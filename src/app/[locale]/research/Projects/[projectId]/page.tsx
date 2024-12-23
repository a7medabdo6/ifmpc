"use client";
import React, { useEffect, useRef, useState } from "react";
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
import { useReactToPrint } from "react-to-print";
import generatePDF from "react-to-pdf";
import { generatePDFProject } from "@/utils/generatePDF";
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
  const [tags, setTags] = useState([]);

  useEffect(() => {
    if (oneProject) {
      const dataTags = oneProject.tags.map((i: { name: any }) => {
        return i.name;
      });
      setTags(dataTags);
    }
  }, [oneProject]);
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

  const componentRef = useRef<HTMLDivElement | null>(null); // Properly typed ref

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "My Document",
    pageStyle: `
      @page {
        size: A4;
        margin: 20mm;
      }
      body {
        font-size: 12px;
        line-height: 1.6;
      }
      h2 {
        font-size: 18px;
        margin-bottom: 10px;
      }
      p {
        margin: 5px 0;
      }
      .MuiContainer-root {
        padding-left: 20px !important;
        padding-right: 20px !important;
      }
      .MuiGrid-root {
        padding: 0 !important;
      }
    `,
  });

  if (loading) return <LoadingIndicator />;
  if (fetchError) return <ErrorComponent message={fetchError} />;
  return (
    <Box className={classes.bigContainer} sx={{ backgroundColor: "#ffffff" }}>
      <Navbar />

      <Box className={`${classes.content} no-padding-at-sm`}>
        <Header
          handlePrint={handlePrint}
          handleDownloadPDF={generatePDFProject}
          oneProject={oneProject}
        />{" "}
        <Grid
          container
          spacing={3}
          sx={{ direction: pathAfterSlash === "ar" ? "rtl" : "ltr" }}
        >
          <Grid item xs={12} md={9} sx={{ paddingRight: "100px" }}>
            <ArticleSection
              componentRef={componentRef}
              title={t("Article")}
              content={
                pathAfterSlash === "ar"
                  ? oneProject?.content_ar
                  : oneProject?.content_en
              }
            />
            <RelatedTopics />
          </Grid>
          <Grid item xs={12} md={3}>
            <RelatedProjects projects={tags} />
          </Grid>
        </Grid>
      </Box>
      <NewsletterSubscription HomeData={data} />
    </Box>
  );
};

export default Home;
