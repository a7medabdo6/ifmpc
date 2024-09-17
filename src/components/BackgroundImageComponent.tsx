"use client";

import React from "react";
import styles from "./component.module.css";
import { Typography } from "@mui/material";
import CustomButton from "./custom/CustomButton";
import { colors } from "@/utils/colors";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useAppSelector } from "@/lib/hooks";
import { useTranslations } from "next-intl";
import { makeStyles } from "@mui/styles";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  content: {
    padding: "12px",
  },
  
}));

interface HomeDataType {
  web_site_settings?: {
    footer_short_desc?: string;
    footer_short_desc_en?: string;
    footer_short_desc_ar?: string;
    main_header?: string;
    main_header_en?: string;
    main_header_ar?: string;
    slider_image?: string;
    subscribe_title?: string;
    subscribe_title_en?: string;
    subscribe_title_ar?: string;
    subscribe_desc?: string;
    subscribe_desc_en?: string;
    subscribe_desc_ar?: string;
  };
  // Define the properties you expect in HomeData
}

// Define the props for the Footer component
interface BackgroundImageComponentProps {
  HomeData: HomeDataType;
}

const BackgroundImageComponent: React.FC<BackgroundImageComponentProps> = ({ HomeData }) => {

  const classes = useStyles();

  const pathAfterSlash = useAppSelector((state) => state.path.pathAfterSlash);
  const t = useTranslations("BackgroundImageComponent");

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClick = () => {
    console.log("Button clicked!");
  };

  // Extract the background image URL from HomeData
  const backgroundImage = HomeData?.web_site_settings?.slider_image
    ? `url(${HomeData.web_site_settings.slider_image})`
    : undefined;

  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: backgroundImage,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className={styles.overlay}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            width: isSmallScreen ? "100%" : "34%",
          }}
        >
          {HomeData?.web_site_settings?.main_header}
        </Typography>
        <Link href={`/${pathAfterSlash}/contact`} passHref>

        <CustomButton
          onClick={handleClick}
          customColor="white"
          width="175px"
          height="48px"
          backgroundColor={colors.active}
          borderRadius="4px"
        >
          {t("contactus")}
        </CustomButton>
        </Link>

      </div>
    </div>
  );
};

export default BackgroundImageComponent;
