import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import CustomButton from "../custom/CustomButton";
import { colors } from "@/utils/colors";
import { makeStyles } from "@mui/styles";
import { useAppSelector } from "@/lib/hooks";
import { useTranslations } from "next-intl";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  title: {
    marginLeft: 24,
    color: "#262626", // لون النص الافتراضي
    marginBottom: "5px",
    fontWeight: 600,
    display: "flex",
    flexDirection: "row", // ترتيب العناصر بشكل أفقي
  },
  text: {
    fontWeight: 600,
    fontSize: "22px",
    marginRight: "4px", // إضافة مسافة يمينية بين النصوص
  },
  button: {
    marginRight: 0, // إضافة مسافة يمينية بين النصوص
  },
  box: {

    paddingBottom: "22px",
    backgroundColor: "#F0F0F0", // إضافة مسافة يمينية بين النصوص
  },
  titletwo: {
    marginLeft: 24,

    color: "#262626", // لون النص الافتراضي
    marginBottom: "24px",
    fontWeight: "bold",
    display: "flex",
    flexDirection: "row", // ترتيب العناصر بشكل أفقي
  },
  texttwo: {
    marginLeft: 24,
    color: "#262626",
    marginRight: "24px", // إضافة مسافة يمينية بين النصوص
  },
}));

const HowItWorks = () => {
  const classes = useStyles();
  const t = useTranslations("Works");
  const pathAfterSlash = useAppSelector((state) => state.path.pathAfterSlash);
  const isArabic = pathAfterSlash === 'ar';
  const handleClick = () => {
    
    console.log("Button clicked!");
  };

  return (
    <Box className={classes.box}>
      <Grid
        container
        spacing={0}
        sx={{ flexDirection: { xs: "column", md: isArabic ? "row-reverse" : "row" }, mt: 5, pt: 10 }}
      >
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: 'flex', justifyContent: isArabic ? 'flex-end' : "flex-start",
            paddingLeft: { xs: "0px", md: "116px" },
            paddingRight: { xs: "0px", md: "116px" },
          }}
        >
          <Typography variant="body1" component="p" className={classes.title} sx={{ flexDirection: isArabic ? 'row-reverse' : 'row' }}>

            <span className={classes.text}>{t("How It Works in IFPMC")}</span>
            <span style={{ color: colors.active, fontSize: "22px", fontWeight: 600 }}>
              IFPMC
            </span>
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          className={classes.button}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Box sx={{ marginRight: "24px", paddingRight: "116px", width: isArabic ? "100%" : null, marginLeft: isArabic ? "130px" : null }}>
          <Link href={`/${pathAfterSlash}/contact`} passHref>
      <CustomButton
        customColor="white"
        width="175px"
        height="35px"
        backgroundColor={colors.active}
        borderRadius="4px"
      >
        {t('Contact Us')}
      </CustomButton>
    </Link>
          </Box>
        </Grid>
      </Grid>
      <Box
        className={classes.box}
        sx={{
          paddingLeft: { xs: "24px", md: "130px" },
          paddingRight: { xs: "24px", md: "130px" },
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{ flexDirection: { xs: "column", md: isArabic ? "row-reverse" : "row" }, mt: 5 }}
        >
          <Grid item xs={12} md={4} sx={{ paddingRight: '25px' }}>
            <Box>
              <Typography
                variant="body1"
                component="p"
                sx={{
                  fontWeight: 600, marginBottom: '5px', color: '#262626'
                  , justifyContent: isArabic ? 'flex-end' : null
                }}
                className={classes.title}
              >
                1. {t("Before")}
              </Typography>
              <Typography
                variant="body1"
                component="p"
                sx={{
                  color: '#262626', textAlign: isArabic ? 'right' : 'left'
                }}
                className={classes.texttwo}
              >
                {t('Carryingdes').split('\n').map((line, index) => (
                  <span key={index}>
                    {line}
                    <br />
                  </span>
                ))}

              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} sx={{ paddingRight: '25px' }}>
            <Box>
              <Typography
                variant="body1"
                component="p"
                sx={{ fontWeight: 600, marginBottom: '5px', color: '#262626', justifyContent: isArabic ? 'flex-end' : null }}

                className={classes.title}
              >
                3. {t('During')}



              </Typography>
              <Typography
                variant="body1"
                component="p"
                sx={{
                  color: '#262626', textAlign: isArabic ? 'right' : 'left'
                }}
                className={classes.texttwo}
              >
                {t('Duringdes').split('\n').map((line, index) => (
                  <span key={index}>
                    {line}
                    <br />
                  </span>
                ))}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} sx={{ paddingRight: '25px' }}>
            <Box>
              <Typography
                variant="body1"
                component="p"
                sx={{ fontWeight: 600, marginBottom: '5px', color: '#262626', justifyContent: isArabic ? 'flex-end' : null }}

                className={classes.title}
              >
                3. {t('After')}

              </Typography>
              <Typography
                variant="body1"
                component="p"
                sx={{
                  color: '#262626', textAlign: isArabic ? 'right' : 'left'
                }}
                className={classes.texttwo}
              >
                {t('Supplement').split('\n').map((line, index) => (
                  <span key={index}>
                    {line}
                    <br />
                  </span>
                ))}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default HowItWorks;
