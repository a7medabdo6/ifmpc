"use client";
import React, { useState, useEffect } from "react";
import Sidebar from "@/components/research/sidebar";
import { Grid, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Navbar from "@/components/Navbar";
import Content from "@/components/research/content";
import Footer from "@/components/Footer";
import NewsletterSubscription from "@/components/NewsletterSubscription";
import { useTranslations } from "next-intl";
import { useAppSelector } from "@/lib/hooks";
import {
  fetchCategories,
  fetchMostRecentProjects,
  fetchMostPopularProjects,
} from "@/services/api";
import LoadingIndicator from "@/components/custom/LoadingIndicator";
import ErrorComponent from "@/components/custom/ErrorComponent";
interface Publication {
  id: number;
  title: string;
  content: string;
  category: {
    id: number;
    name: string;
  };
}
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

const useStyles = makeStyles((theme) => ({
  content: {
    padding: "12px",
  },
  bigContainer: {
    maxWidth: "100%",
  },
  title: {
  },
}));

const Page = () => {
  const classes = useStyles();
  const t = useTranslations("Projects");
  const pathAfterSlash = useAppSelector((state) => state.path.pathAfterSlash);
  const [categories, setCategories] = useState<Category[]>([]);
  const { data } = useAppSelector((state) => state.home);
  const [tabClicks, setTabClicks] = React.useState<number[]>([0, 0, 0]);

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
  useEffect(() => {
    const loadMostRecent = async () => {
      try {
        const data = await fetchMostRecentProjects(lng, offset, limit);
        setMostRecent(data?.results || []);
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

    loadMostRecent();
  }, [lng,offset,tabClicks]);
  useEffect(() => {
    const loadMostPobular = async () => {
      try {
        const data = await fetchMostPopularProjects(lng, offset, limit);
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

    loadMostPobular();
  }, [lng,offset,tabClicks]);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const data: CategoryResponse = await fetchCategories(lng);
        setCategories(data.results);
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

  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});
  const [textFieldValue, setTextFieldValue] = useState<string>("");

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
        className={classes.title}
        sx={{
          paddingRight: {
            xs: "0px",
            md: "130px",
          },
          paddingLeft: {
            xs: "0px",
            md: "130px",
          },
          width: "100%",
          height: "85px",
          background: "linear-gradient(to bottom, #f0f0f0, #ffffff)",
          fontWeight: 600,
          fontSize: "25px",
          lineHeight: "40.22px",
          color: "#262626",
          p: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: pathAfterSlash === "ar" ? "flex-end" : "flex-start",
        }}
      >
        <p
          style={{
            paddingLeft: "11px",
            paddingTop: "60px",

          }}
        >
          {t("All Projects")}
        </p>
      </Box>
      <Grid
        container
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
          xs={12}
          md={3}
          sx={{
            display: {
              xs: "block",
              md: "block",
            },
            order: {
              xs: 1,
              md: 1,
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
          />{" "}
        </Grid>
        <Grid
          item
          xs={12}
          md={9}
          className={classes.content}
          sx={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            order: {
              xs: 2,
              md: 2,
            },
          }}
        >
          <Content
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
