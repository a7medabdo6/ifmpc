import React, { useState } from "react";
import { Box, Grid, Typography, Link } from "@mui/material";
import { Facebook, Twitter, YouTube, LinkedIn } from "@mui/icons-material";
import MyAppLogo from "../assets/images/logoWhite.png"; // Adjust the path accordingly
import Image from "next/image";
import { colors } from "../utils/colors";
import XIcon from "@mui/icons-material/X";
import { makeStyles } from "@mui/styles";
import { useTranslations } from "next-intl";
import { useAppSelector } from "@/lib/hooks";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "black",
    color: "white",
    // paddingLeft: "130px",
    // paddingRight: "130px",
    padding: 4,
  },
  gridContainer: {
    // borderBottom: "1px solid #CCCBCB",
    paddingBottom: 1,
    marginBottom: 1,
    // marginLeft: "130px !important",
    // marginRight: "130px !important",

    // marginRight: "1%",
  },
  divir: {
    borderBottom: "1px solid #CCCBCB",
    paddingBottom: 1,
    marginBottom: 1,
    marginLeft: "0px !important",

    // marginRight: "1%",
  },
  logo: {
    marginBottom: 4,
  },
  Box: {},
  BoxAr: {
    display: "flex",
    // paddingRight: "50px",
    flexDirection: "column",
    alignItems: "flex-end",
    paddingLeft: "0px !important",
  },
  socialMediaIconContainer: {
    display: "flex",
    gap: 10,
    marginBottom: 1,
  },
  socialMediaIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 20,
    height: 20,
    borderRadius: "0%",
    backgroundColor: colors.active,
    color: "black",
    "&:hover": {
      backgroundColor: "gray",
    },
  },
  title: {
    color: "#FFFFFF",
  },
  logoImage: {
    width: "60%",
    height: "60%",
    objectFit: "cover",
  },
}));

interface SocialMediaIconProps {
  logo: string;
}

const SocialMediaIcon: React.FC<SocialMediaIconProps> = ({ logo }) => {
  const classes = useStyles();
  return (
    <Box className={classes.socialMediaIcon}>
      <Image
        src={logo}
        alt="Social Media Icon"
        className={classes.logoImage}
        width={20} // تحديد العرض
        height={20} // تحديد الارتفاع
      />
      {/* <img src={logo} alt="Social Media Icon" className={classes.logoImage} /> */}
    </Box>
  );
};

interface HomeDataType {
  website_link?: {
    url: string | undefined;
    logo: string;
    id: number;
    name: string;
    name_en: string;
    name_ar: string;
  }[];
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
  categories?: {
    id: number;
    created: string;
    modified: string;
    name: string;
    name_en: string;
    name_ar: string;
    publication_count: number;
    project_count: number;
  }[];
  // Define the properties you expect in HomeData
}

// Define the props for the Footer component
interface FooterProps {
  HomeData: HomeDataType;
}
const Footer: React.FC<FooterProps> = ({ HomeData }) => {
  const classes = useStyles();
  const t = useTranslations("footer");
  const pathAfterSlash = useAppSelector((state) => state.path.pathAfterSlash);
  const [linkesSocial, setlinkesSocial] = useState(HomeData?.website_link);

  return (
    <Box sx={{ backgroundColor: "black" }}>
      <Box
        component="footer"
        sx={{
          paddingTop:'40px',
          paddingBottom:'40px',
          paddingLeft: {
            xs: "24px",
            md: "130px",
          },
          paddingRight: {
            xs: "24px",
            md: "130px",
          },
        }}
        className={classes.footer}
      >
        <Box>
          <Grid
            container
            className={classes.gridContainer}
            sx={{
              flexDirection: pathAfterSlash === "ar" ? "row-reverse" : "row",
              marginLeft: "0px !important",
              justifyContent: "space-between",
            }}
          >
            <Grid
              item
              sx={{
                flexDirection: pathAfterSlash === "ar" ? "column" : "row", // Corrected spelling and added default value

                paddingLeft: "0px !important",
                width: {
                  xs: "100% !important",
                  md: "30% !important",
                },
              }}
              className={pathAfterSlash === "ar" ? classes.BoxAr : classes.Box}
            >
              <Box
                className={classes.logo}
                sx={
                  {
                    // paddingRight: pathAfterSlash === "ar" ? "24px" : "0px",
                  }
                }
              >
                <Image
                  src={MyAppLogo}
                  alt="Picture of the author"
                  width={243}
                  height={52}
                />
              </Box>
              <Typography
                variant="body2"
                className={classes.title}
                sx={{
                  width: "75%",
                  // paddingRight: pathAfterSlash === "ar" ? "24px" : "0px",
                  textAlign: pathAfterSlash === "ar" ? "right" : "left",
              
                }}
              >
                {HomeData?.web_site_settings?.footer_short_desc}
                {/* {t("Welcome to IFPMC")} */}
              </Typography>
            </Grid>
            <Grid
              item
              sx={{
                flexDirection: pathAfterSlash === "ar" ? "column" : "row", // Corrected spelling and added default value
              }}
              className={pathAfterSlash === "ar" ? classes.BoxAr : classes.Box}
            >
              <Typography
                variant="h6"
                gutterBottom
                
                className={classes.title}
                sx={{
                  fontSize:'18px',

              
                }}
              >
                {t("Categories")}
              </Typography>
              {HomeData?.categories && HomeData.categories.length > 0 ? (
                HomeData.categories.slice(0, 4).map((item) => (
                  <Typography
                    key={item.id} // Ensure each item has a unique key
                    variant="body2"
                    sx={{
                      marginBottom: "7px",
                     
                    }}
                    className={classes.title}
                  >
                    <Link
                      href="#"
                      color="inherit"
                      underline="none"
                      className={classes.title}
                    >
                      {item.name} {/* Render category name */}
                    </Link>
                  </Typography>
                ))
              ) : (
                <Typography
                  variant="body2"
                  sx={{
                    marginBottom: "10px",
                  
                  }}
                  className={classes.title}
                >
                  {t("No categories available")} {/* Fallback message */}
                </Typography>
              )}
            </Grid>
            <Grid
              item
              sx={{
                flexDirection: pathAfterSlash === "ar" ? "column" : "row", // Corrected spelling and added default value
              }}
              className={pathAfterSlash === "ar" ? classes.BoxAr : classes.Box}
            >
              <Typography
                variant="h6"
                gutterBottom
                className={classes.title}
                sx={{
                  fontSize:'19px',

               
                }}
              >
                {t("Quick Links")}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  marginBottom: "7px",
                 
                }}
                className={classes.title}
              >
                <Link href="/" color="inherit" underline="none">
                  {t("Home")}
                </Link>
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  marginBottom: "7px",
                 
                }}
                className={classes.title}
              >
                <Link
                  href={`/${pathAfterSlash}/whoarewe`}
                  color="inherit"
                  underline="none"
                >
                  {t("Who are we")}
                </Link>
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  marginBottom: "7px",
             
                }}
                className={classes.title}
              >
                <Link
                  href={`/${pathAfterSlash}/contact`}
                  color="inherit"
                  underline="none"
                >
                  {t("Contact Us")}
                </Link>
              </Typography>
            </Grid>
            <Grid
              item
              sx={{
                flexDirection: pathAfterSlash === "ar" ? "column" : "row", // Corrected spelling and added default value
              }}
              className={pathAfterSlash === "ar" ? classes.BoxAr : classes.Box}
            >
              <Typography
                variant="h6"
                gutterBottom
                className={classes.title}
                sx={{
                  fontSize:'18px',

                }}
              >
                {t("Social Media")}
              </Typography>
              <Box className={classes.socialMediaIconContainer}>
                {linkesSocial?.map((link) => (
                  <Link
                    href={link.url}
                    color="inherit"
                    target="_blank"
                    rel="noopener noreferrer"
                    key={link.id}
                  >
                    <SocialMediaIcon logo={link.logo} />
                  </Link>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box textAlign="center">
        <Box className={classes.divir}></Box>

        <Typography
          className={classes.title}
          sx={{
            width: "100%",
            padding: "10px",
           
          }}
          variant="body2"
        >
          {t("IFPMC 2024")}
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
