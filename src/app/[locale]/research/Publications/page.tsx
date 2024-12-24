"use client";
import React, { useState, useEffect } from "react";
import Sidebar from "@/components/research/sidebar";
import { Grid, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Navbar from "@/components/Navbar";
import ContentPub from "@/components/research/contentPub";
import Footer from "@/components/Footer";
import NewsletterSubscription from "@/components/NewsletterSubscription";
import { useTranslations } from "next-intl";
import { useAppSelector } from "@/lib/hooks";
import {
  fetchCategories,
  fetchMostRecentPublications,
  fetchMostPopularPublications,
} from "@/services/api";
import LoadingIndicator from "@/components/custom/LoadingIndicator";
import ErrorComponent from "@/components/custom/ErrorComponent";


// Define the Publication interface
interface Publication {
  id: number;
  title: string;
  content: string;
  category: {
    id: number;
    name: string;
  };
}

const useStyles = makeStyles((theme) => ({
  content: {
    padding: "12px", // تعيين تباعد داخلي للمحتوى
  },
  container: {},
  bigContainer: {
    maxWidth: "100%", // تعيين عرض الحاوية ليأخذ المساحة القصوى المحتملة
  },
  title: {
  },
  root: {
    height: "85px",
    width: "100%", // Width
    background: "linear-gradient(to bottom, #f0f0f0, #ffffff)", // Background gradient
    fontWeight: 600, // Font weight
    fontSize: "25px", // Font size
    lineHeight: "40.22px", // Line height
    color: "#262626", // Text color
    p: 2, // Padding
    display: "flex", // Ensure text aligns properly
    alignItems: "center", // Vertically center text
  },
}));

interface Category {
  id: number;
  created: string;
  modified: string;
  name: string;
  name_en: string;
  name_ar: string;
  publication_count: number;
  project_count: number;
}

interface CategoryResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Category[];
}

const Page = () => {
  const classes = useStyles();
  const t = useTranslations("Publications");
  const pathAfterSlash = useAppSelector((state) => state.path.pathAfterSlash);
  const [categories, setCategories] = useState<Category[]>([]);
  const { data } = useAppSelector((state) => state.home);
  const [tabClicks, setTabClicks] = React.useState<number[]>([0, 0, 0]);
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});
  const [textFieldValue, setTextFieldValue] = useState<string>("");
  // Specify types for state variables
  const [MostRecent, setMostRecent] = useState<Publication[]>([]);
  const [MostPobular, setMostPobular] = useState<Publication[]>([]);
  const [filteredMostRecent, setFilteredMostRecent] = useState<Publication[]>(
    []
  );
  const [filteredMostPobular, setFilteredMostPobular] = useState<Publication[]>(
    []
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const lng = pathAfterSlash;
  const [count, setCount] = useState<number>(0);

  const [offset, setOffset] = useState(0);
  const limit = 10;
  const extractNumbers = (checkedItems: Record<string, boolean>): number[] => {
    return Object.keys(checkedItems).filter(key => checkedItems[key]).map(Number);
  };
  
  
  
  const categoriesrResult = extractNumbers(checkedItems);
  console.log(categoriesrResult); // Output: 38,40,44  
  useEffect(() => {
    const loadMostRecent = async () => {
      try {
        const data = await fetchMostRecentPublications(lng, offset, limit,categoriesrResult);
        setMostRecent(data?.results || []);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unexpected error occurred.");
        }
      } finally {
        setLoading(false);
      }
    };
    if( lng)

    loadMostRecent();
  }, [lng,offset,tabClicks,checkedItems]);
 
  useEffect(() => {
    const loadMostPobular = async () => {
      
      try {
        const data = await fetchMostPopularPublications(lng, offset, limit,categoriesrResult);
        setMostPobular(data?.results || []);
        setCount(data?.count || 0)

      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unexpected error occurred.");
        }
      } finally {
        setLoading(false);
      }
    };
if( lng)
    loadMostPobular();
  }, [lng,offset,tabClicks,checkedItems]);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const data: CategoryResponse = await fetchCategories(lng);
        setCategories(data.results);
        setCount(data?.count || 0)

      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unexpected error occurred.");
        }
      } finally {
        setLoading(false);
      }
    };

    loadCategories();
  }, [lng]);

 

  const items = categories?.map((category) => ({
    id: category.id,
    label: category.name,
    projectCount: category.project_count,
  }));

  const handleToggle = (item: { id: number; label: string }) => () => {
    const newCheckedItems = {
      ...checkedItems,
      [item.id]: !checkedItems[item.id],
    };
    setCheckedItems(newCheckedItems);

    const checkedValues = items
      .filter((it) => newCheckedItems[it.id])
      .map((it) => `${it.label} (${it.projectCount})`);
    setTextFieldValue(checkedValues.join(", "));
  };

  useEffect(() => {
    const checkedCategoryIds = Object.keys(checkedItems)
      .filter((id) => checkedItems[parseInt(id, 10)])
      .map((id) => parseInt(id, 10));

    const filterPublications = (publications: Publication[]) => {
      return publications.filter((pub) =>
        checkedCategoryIds.includes(pub.category.id)
      );
    };

    setFilteredMostRecent(filterPublications(MostRecent));
    setFilteredMostPobular(filterPublications(MostPobular));
  }, [checkedItems, MostRecent, MostPobular]);

  const handleClear = () => {
    setCheckedItems({});
    setTextFieldValue("");
  };
  const handleNext = async () => {

    setOffset(prevOffset => prevOffset + limit);
  };

  const handlePrevious = async () => {
    setOffset(prevOffset => (prevOffset - limit >= 0 ? prevOffset - limit : 0));
  };

  if (loading) return <LoadingIndicator />;
  if (error) return <ErrorComponent message={error} />;
  return (
    <Box className={classes.bigContainer} sx={{ backgroundColor: "#ffffff" }}>
      <Navbar />
      <Box
        className={classes.root}
        sx={{
          paddingRight: {
            xs: "0px",
            md: "130px",
          },
          paddingLeft: {
            xs: "0px",
            md: "130px",
          },
          justifyContent: pathAfterSlash === "ar" ? "flex-end" : "flex-start",
        }}
      >
        <p
          style={{
            paddingLeft: "27px",
            paddingTop: "60px",
          }}
        >
          {t("All Publications")}
        </p>
      </Box>
      <Grid
        item
        xs={3}
        sx={{
          display: {
            xs: "block",
            sm: "none",
            md: "block",
            lg: "none",
            xl: "none",
          },
        }}
      >
        <Sidebar
          categories={categories}
          checkedItems={checkedItems}
          setCheckedItems={setCheckedItems}
          textFieldValue={textFieldValue}
          handleToggle={handleToggle}
          setTextFieldValue={setTextFieldValue}
          handleClear={handleClear}
          items={items}
        />
      </Grid>
      <Grid
        container
        className={classes.container}
        spacing={0}
        sx={{
          flexDirection: pathAfterSlash === "ar" ? "row-reverse" : "row",
          paddingRight: {
            xs: "0px",
            md: "130px",
          },
          paddingLeft: {
            xs: "0px",
            md: "130px",
          },
          width: "auto",
        }}
      >
        <Grid
          item
          xs={3}
          sx={{
            display: {
              xs: "none",
              sm: "block",
              md: "none",
              lg: "block",
              xl: "block",
            },
          }}
        >
          <Sidebar
            categories={categories}
            checkedItems={checkedItems}
            setCheckedItems={setCheckedItems}
            textFieldValue={textFieldValue}
            handleToggle={handleToggle}
            setTextFieldValue={setTextFieldValue}
            handleClear={handleClear}
            items={items}
          />
        </Grid>
        <Grid item xs={12} md={9} className={classes.content}>
          <ContentPub
           tabClicks={tabClicks}
           setTabClicks={setTabClicks}
            setOffset={setOffset}

            limit={limit}
            handleNext={handleNext}
            handlePrevious={handlePrevious}
            count={count}
            MostPobular={
              filteredMostPobular.length > 0 ? filteredMostPobular : MostRecent
            }
            MostRecent={
              filteredMostRecent.length > 0 ? filteredMostRecent : MostRecent
            }
          />
        </Grid>
      </Grid>
      <NewsletterSubscription HomeData={data} />
    </Box>
  );
};

export default Page;
