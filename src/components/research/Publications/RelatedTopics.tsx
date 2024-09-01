import React from "react";
import { Box, Chip, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { StaticImageData } from "next/image";
import { useTranslations } from "next-intl";
import { useAppSelector } from "@/lib/hooks";
import Section from "./Section";

export interface Item {
  id: any; // Add the 'id' property
  date: string;
  title: string;
  description: string;
  image?: string | StaticImageData;
  top?: boolean;
}

const useStyles = makeStyles({
  typography: {
    fontWeight: 600,
    fontFamily: "Almarai",
  },
  chip: {
    margin: "5px",
    backgroundColor: "#476B8733",
    color: "#476B87",
    fontWeight: 400,
  },
});

const RelatedTopics = () => {
  const classes = useStyles();
  const t = useTranslations("share");
  const { data } = useAppSelector((state) => state.home);

  const publicatiosItems: Item[] =
    data?.publication?.map(
      (project: {
        id: any;
        created: any;
        name: any;
        content: any;
        image: any;
      }) => ({
        id: project.id, // Ensure 'id' is included
        date: project.created,
        title: project.name,
        description: project.content,
        image: project.image,
      })
    ) || [];

  return (
    <div>
      <Typography
        variant="h6"
        sx={{ fontFamily: "Almarai", fontWeight: "bold" }} // Apply Almarai font here
        className={classes.typography}
      >
        {t("Related Projects")}
      </Typography>
      <Section
        title="Latest Projects"
        items={publicatiosItems}
        pathLink="Publications"
        top={true}
      />
    </div>
  );
};

export default RelatedTopics;
