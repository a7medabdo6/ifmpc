

"use client";
import React, { useState, useEffect } from "react";
import ImageContainer from "@/components/training/ImageContainer";
import Content from "@/components/training/Content";
import HowItWorks from "@/components/training/HowItWorks";
import { fetchTrainingLast } from "@/services/api";

import { Grid, Box, Typography, Pagination } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Navbar from "@/components/Navbar";
import imageSrc from "../../../../public/assets/images/Rectangle.png";
import Footer from "@/components/Footer";
import NewsletterSubscription from "@/components/NewsletterSubscription";
import { useTranslations } from "next-intl";
import { useAppSelector } from "@/lib/hooks";
import Image from "next/image";
import LoadingIndicator from "@/components/custom/LoadingIndicator";
import ErrorComponent from "@/components/custom/ErrorComponent";

// Define interface for data structure
interface TrainingData {
  id: number;
  created: string;
  modified: string;
  title: string;
  title_en: string;
  title_ar: string;
  image: string;
  description: string;
  description_en: string;
  description_ar: string;
}

const useStyles = makeStyles((theme) => ({
  content: {
    fontWeight: 400,
  },
  bigContainer: {
    maxWidth: "100%",
    backgroundColor: "#ffffff",
  },
  title: {
    margin: 24,
    marginLeft: "0px !important",
    marginRight: "0px !important",
    backgroundColor: "#ffffff",
  },
}));

const Page = () => {
  const classes = useStyles();
  const t = useTranslations("Training");
  const pathAfterSlash = useAppSelector((state) => state.path.pathAfterSlash);
  const [trainingLast, setTrainingLast] = useState<TrainingData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [itemsPerPage] = useState(1); // Set the number of items per page
  const { data } = useAppSelector((state) => state.home);

  const lng = pathAfterSlash;
  const [isClient, setIsClient] = useState(false); // Check if rendering on client side

  // Run this only on the client-side
  useEffect(() => {
    setIsClient(true); // Ensures this part runs only on the client
  }, []);
  useEffect(() => {
    const loadTraining = async () => {
      try {
        const data = await fetchTrainingLast(lng);
        setTrainingLast(data?.results || []); // Ensure array is set even if no results
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

    loadTraining();
  }, [lng]);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  // Paginate the data
  const paginatedData = trainingLast.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  if (loading || trainingLast.length === 0) return <LoadingIndicator />;
  if (error) return <ErrorComponent message={error} />;

  return (
    <Box className={classes.bigContainer}>
      <Navbar />

      <Grid
        container
        spacing={0}
        sx={{
          paddingLeft: { xs: "24px", md: "130px" },
          paddingRight: { xs: "24px", md: "130px" },
          flexDirection: { xs: "column", md: "row" },
          mt: 5,
        }}
        style={{
          marginInline: "auto",
          marginTop: "80px",
          width: "auto",
        }}
      >
        <Grid item xs={12} md={12} className={classes.content} sx={{ textAlign: pathAfterSlash === 'ar' ? "end" : "start" }}>
          <Box className={classes.title}>
            <Typography
              variant="h5"
              style={{ color: "#262626", fontWeight: 600 }}
            >
              {t("Training Features")}
            </Typography>
          </Box>
        </Grid>


        {paginatedData.length > 0 ? (
          paginatedData.map((item, index) => (
            <Box  key={index} sx={{ width: '100%', display: 'flex', flexDirection: pathAfterSlash === 'ar' ? 'row-reverse' : 'row' }}>

              <Grid item xs={12} md={6} className={classes.content}>

                <Content
                  key={item.id}
                  title={item.title}
                  des={<div dangerouslySetInnerHTML={{ __html: item.description }} />}
                />


              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                sx={{ display: "flex", justifyContent: pathAfterSlash === 'ar' ? 'flex-start' : "flex-end" }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    width: "80%",
                    height: "80%",
                  }}
                >
                  <Image
                    layout="responsive"
                    width={100}
                    height={100}
                    src={item?.image || imageSrc} // Provide a default image path
                    alt="Training Image"
                  />
                </div>
              </Grid>
            </Box>

          ))
        ) : (
          <Typography>No training data available</Typography>
        )}
      </Grid>

      {/* Pagination */}
      <Pagination
        count={Math.ceil(trainingLast.length / itemsPerPage)} // Total pages
        page={page}
        onChange={handlePageChange}
        sx={{ mt: 4, display: "flex", justifyContent: "center" }}
      />

      <HowItWorks />
      <NewsletterSubscription HomeData={data} />
    </Box>
  );
};

export default Page;
