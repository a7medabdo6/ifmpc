"use client";
import React, { useEffect, useState } from "react";
import { Container, Grid, Box } from "@mui/material";
import ArticleSection from "@/components/research/project/ArticleSection";
import RelatedProjects from "@/components/research/project/RelatedProjects";
import RelatedTopics from "@/components/research/project/RelatedTopics";
import Footer from "@/components/Footer";
import NewsletterSubscription from "@/components/NewsletterSubscription";
import { useTranslations } from "next-intl";
import { useAppSelector } from "@/lib/hooks";
import { makeStyles } from "@mui/styles";

import Navbar from "@/components/Navbar";
import { fetchProjectById } from "@/services/api";
import { useParams } from "next/navigation";
import Header from "@/components/research/project/Header";
import LoadingIndicator from "@/components/custom/LoadingIndicator";
import ErrorComponent from "@/components/custom/ErrorComponent";
const useStyles = makeStyles((theme) => ({
  content: {
    paddingBottom: "24px", // تعيين تباعد داخلي للمحتوى
    paddingLeft: "130px",
    paddingRight: "130px",

    marginTop: "50px",
  },
  bigContainer: {
    maxWidth: "100%", // تعيين عرض الحاوية ليأخذ المساحة القصوى المحتملة
  },
}));
const Home: React.FC = () => {
  const pathAfterSlash = useAppSelector((state) => state.path.pathAfterSlash);

  const classes = useStyles();
  const t = useTranslations("share");
  const { data, status, error } = useAppSelector((state) => state.home);
  const params = useParams<{
    tag: string;
    item: string;
    projectId?: string;
  }>();

  const [oneProject, setOneProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const lng = pathAfterSlash;

  useEffect(() => {
    const getProject = async () => {
      try {
        if (params?.projectId) {
          const data = await fetchProjectById(params.projectId, lng);
          setOneProject(data);
        } else {
          throw new Error("Project ID is not available");
        }
      } catch (error: any) {
        setFetchError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getProject();
  }, [params?.projectId]);
  const articleContent = `
    <p>One way of analyzing whether to engage in FDI is by using the OLI framework...</p>
    <h2>1- Ownership advantage</h2>
    <p>Ownership advantage refers to certain firm-specific advantages...</p>
    <h2>2- Location advantage</h2>
    <p>Location advantage refers to advantages that can be gained from combining...</p>
    <h2>3- Internalisation advantages</h2>
    <p>Internalisation advantages occur when it is more beneficial for a firm to...</p>
  `;

  const relatedProjects = [
    t("Business"),
    t("Ecommerce"),
    t("Marketing"),
    t("Outdoor Sales"),
  ];

  function handleDownloadPDF(): void {
    throw new Error("Function not implemented.");
  }
  if (loading) return <LoadingIndicator />;
  if (fetchError) return <ErrorComponent message={fetchError} />;
  return (
    <Box className={classes.bigContainer} sx={{ backgroundColor: "#ffffff" }}>
      <Navbar />

      <Box className={classes.content}>
        <Header handleDownloadPDF={handleDownloadPDF} oneProject={oneProject} />{" "}
        <Grid
          container
          spacing={3}
          sx={{ direction: pathAfterSlash === "ar" ? "rtl" : "ltr" }}
        >
          <Grid item xs={12} md={9} sx={{ paddingRight: "100px" }}>
            <ArticleSection
              title={t("Article")}
              content={ pathAfterSlash === "ar" ? oneProject?.content_ar : oneProject?.content_en}
            />
            <RelatedTopics />
          </Grid>
          <Grid item xs={12} md={3}>
            <RelatedProjects projects={relatedProjects} />
          </Grid>
        </Grid>
      </Box>
      <NewsletterSubscription HomeData={data} />
      <Footer HomeData={data} />
    </Box>
  );
};

export default Home;
