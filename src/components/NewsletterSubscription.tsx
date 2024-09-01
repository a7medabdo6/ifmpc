"use client";
import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";
import CustomButton from "./custom/CustomButton";
import { colors } from "@/utils/colors";
import { useTranslations } from "next-intl";
import { useAppSelector } from "@/lib/hooks";
import { createSubscribe } from "@/services/api";

const useStyles = makeStyles((theme: Theme) => ({
  subscribeContainer: {
    backgroundColor: "#4d6b82",
    paddingTop: "50px",
    paddingBottom: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  textFieldRoot: {
    "& .MuiOutlinedInput-root": {
      height: "14px",
      color: "#fff",
      fontFamily: "Almarai",
      "& fieldset": {
        borderColor: "#fff",
        fontFamily: "Almarai",
      },
      "&:hover fieldset": {
        borderColor: "#fff",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#fff",
      },
    },
    "& .MuiInputLabel-root": {
      color: "#fff",
      fontFamily: "Almarai",
    },
    marginBottom: "15px",
  },
  title: {
    // fontFamily: "Almarai",
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
}

interface NewsletterSubscriptionProps {
  HomeData: HomeDataType;
}

const NewsletterSubscription: React.FC<NewsletterSubscriptionProps> = ({
  HomeData,
}) => {
  const classes = useStyles();
  const t = useTranslations("Subscribe");
  const pathAfterSlash = useAppSelector((state) => state.path.pathAfterSlash);
  const [email, setEmail] = useState("");
  const [subscribeResponse, setSubscribeResponse] = useState(null);

  const postSubscribe = async (email: string) => {
    try {
      const data = await createSubscribe({ email });
      setSubscribeResponse(data); // Ensure this matches your API response structure
    } catch (error) {
      console.error("Failed to subscribe", error);
    }
  };

  const handleClick = () => {
    if (email) {
      postSubscribe(email);
      console.log("Button clicked!");
    } else {
      console.log("Email is required!");
    }
  };

  return (
    <Box
      className={classes.subscribeContainer}
      sx={{
        flexDirection: {
          xs: "column",
          md: pathAfterSlash === "ar" ? "row-reverse" : "row",
        },
        paddingLeft: {
          xs: "24px",
          md: "130px",
        },
        paddingRight: {
          xs: "24px",
          md: "130px",
        },
      }}
    >
      <Box
        sx={{
          width: {
            sm: "100%",
            md: "40%",
          },
        }}
      >
        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          className={classes.title}
          sx={{
            color: "white",
            marginBottom: "15px",
            textAlign: pathAfterSlash === "ar" ? "right" : "left",
            fontFamily: pathAfterSlash === "ar" ? "Almarai" : "Source Sans Pro",
          }}
        >
          {HomeData?.web_site_settings?.subscribe_title}
        </Typography>
        <Typography
          sx={{
            fontSize: "13px",
            color: "white",
            textAlign: pathAfterSlash === "ar" ? "right" : "left",
            fontFamily: pathAfterSlash === "ar" ? "Almarai" : "Source Sans Pro",
          }}
          className={classes.title}
        >
          {HomeData?.web_site_settings?.subscribe_desc}
        </Typography>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        flexDirection="column"
        sx={{
          width: {
            xs: "100%",
            md: "40%",
          },
        }}
      >
        <TextField
          variant="outlined"
          placeholder={t("enteryouremail")}
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={classes.textFieldRoot}
          InputProps={{
            style: { height: "48px", color: "#fff" },
          }}
          InputLabelProps={{
            style: { color: "#fff" },
          }}
          style={{ marginBottom: "15px" }}
        />
        <CustomButton
          onClick={handleClick}
          customColor="white"
          width="100%"
          height="48px"
          backgroundColor={colors.active}
          borderRadius="4px"
        >
          {t("Subscribe Now")}
        </CustomButton>
      </Box>
    </Box>
  );
};

export default NewsletterSubscription;
