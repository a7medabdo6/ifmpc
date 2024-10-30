"use client";
import { FC } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { projects, trainings, publications } from "../data/homeData";
import dynamic from "next/dynamic";
import { useAppSelector } from "@/lib/hooks";
import { useTranslations } from "next-intl";
import { makeStyles } from "@mui/styles";
import ModalCom from "./ModalCom";
import Section from "./custom/Section";
// const Section = dynamic(() => import("./custom/Section"), { ssr: false });

const useStyles = makeStyles((theme) => ({
  root: { marginTop: "80px" },
  content: {
    padding: "12px",
  },
  box: {
    borderBottom: "1px solid #CCCBCB",
    paddingBottom: 1,
    marginBottom: 2,
  },
  title: {
    fontWeight: "600 !important", // Make font-weight important
    color: "#262626",
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

interface Project {
  id: number;
  created: string;
  modified: string;
  name: string;
  name_en: string;
  name_ar: string;
  content: string;
  content_en: string;
  content_ar: string;
  image: string;
  popularity_count: number;
  category: number;
  author: number[];
  tags: number[];
}

interface Publication {
  id: number;
  created: string;
  modified: string;
  name: string;
  name_en: string;
  name_ar: string;
  image: string;

  content: string;
  content_en: string;
  content_ar: string;
  popularity_count: number;
  category: number;
  author: number[];
  tags: number[];
}

interface Training {
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

interface WebsiteSettings {
  id: number;
  footer_short_desc: string;
  footer_short_desc_en: string;
  footer_short_desc_ar: string;
  main_header: string;
  main_header_en: string;
  main_header_ar: string;
  slider_image: string;
  subscribe_title: string;
  subscribe_title_en: string;
  subscribe_title_ar: string;
  subscribe_desc: string;
  subscribe_desc_en: string;
  subscribe_desc_ar: string;
}

interface HomeDataType {
  categories?: Category[];
  projects?: Project[];
  publication?: Publication[];
  training?: Training[];
  website_settings?: WebsiteSettings;
  website_link?: {
    id: number;
    name: string;
    name_en: string;
    name_ar: string;
  }[];
}

interface HomeContentProps {
  HomeData: HomeDataType;
}

// تحديث نوع Item
interface Item {
  id: number;
  date: string;
  title: string;
  description: string;
  image: string;
  Content?: string; // إذا كان هذا الحقل اختياري
  name?: string; // إذا كان هذا الحقل اختياري
  createdts?: string; // إذا كان هذا الحقل اختياري
}

const HomeContent: React.FC<HomeContentProps> = ({ HomeData }) => {
  const classes = useStyles();
  const pathAfterSlash = useAppSelector((state) => state.path.pathAfterSlash);
  const gridDirection = pathAfterSlash === "ar" ? "rtl" : "ltr";
  const t = useTranslations("HomePage");

  // تحويل المشاريع إلى نوع Item
  const projectsItems: Item[] =
    HomeData?.projects?.map((project) => ({
      id: project.id, // إضافة هذه القيم المطلوبة
      date: project.created,
      title: project.name,
      description: project.content,
      image: project.image,
      Content: project.content, // إضافة خصائص إضافية إذا لزم الأمر
      name: project.name, // إضافة خصائص إضافية إذا لزم الأمر
      createdts: project.created, // إضافة خصائص إضافية إذا لزم الأمر
    })) || [];

  const publicatiosItems: Item[] =
    HomeData?.publication?.map((project) => ({
      id: project.id, // إضافة هذه القيم المطلوبة
      date: project.created,
      title: project.name,
      description: project.content,
      image: project.image,
      Content: project.content, // إضافة خصائص إضافية إذا لزم الأمر
      name: project.name, // إضافة خصائص إضافية إذا لزم الأمر
      createdts: project.created, // إضافة خصائص إضافية إذا لزم الأمر
    })) || [];
  const trainingItems: Item[] =
    HomeData?.training?.map((project) => ({
      id: project.id, // إضافة هذه القيم المطلوبة
      date: project.created,
      title: project.title,
      description: project.description,
      image: project.image,
      createdts: project.created, // إضافة خصائص إضافية إذا لزم الأمر
    })) || [];
  return (
    <Box
      className={classes.root}
      sx={{
        marginLeft: {
          xs: "24px",
          md: "130px",
        },
        marginRight: {
          xs: "24px",
          md: "130px",
        },
      }}
    >
      <Grid container spacing={4} dir={gridDirection}>
        <Grid item xs={12} md={7}>
          <Box className={classes.box}>
            <Typography variant="h5" gutterBottom className={classes.title}>
              {t("LatestProjects")}
            </Typography>
          </Box>
          <Section
            title="Latest Publications"
            items={HomeData?.publication}
            pathLink="Publications"
            top={true}
          />
        </Grid>
        <Grid item xs={12} md={1}></Grid>
        <Grid item xs={12} md={4}>
          <Box className={classes.box}>
            <Typography variant="h5" gutterBottom className={classes.title}>
              {t("UpcomingTrainings")}
            </Typography>
          </Box>

          <Box>
            <ModalCom
              pdfUrl={"./training.pdf"}
              component={
                <Section
                  title="Upcoming Trainings"
                  borderAll={true}
                  //   pathLink="Training"
                  items={[HomeData?.training?.[0]]}
                />
              }
            />
          </Box>
        </Grid>
      </Grid>

      <Grid sx={{ marginTop: "50px" }}>
        <Box className={classes.box}>
          <Typography
            sx={{
              display: "flex",
              justifyContent:
                pathAfterSlash === "ar" ? "flex-end" : "flex-start",
            }}
            variant="h5"
            gutterBottom
            className={classes.title}
          >
            {t("LatestProjects")}
          </Typography>
        </Box>
        <Section
          title="Latest Projects"
          pathLink="Projects"
          items={HomeData?.projects}
          withImage
          top={true}
        />
      </Grid>
    </Box>
  );
};

export default HomeContent;
