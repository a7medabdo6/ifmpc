"use client";
import React from "react";
import PodcastList from "@/components/podcast/PodcastList";
import { useAppSelector, useAppDispatch, useAppStore } from "@/lib/hooks";

import { Grid, Box, Typography, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Navbar from "@/components/Navbar";
// import imageSrc from '../../../../public/assets/images/Rectangle.png'
import Footer from "@/components/Footer";
import NewsletterSubscription from "@/components/NewsletterSubscription";
import LoadingIndicator from "@/components/custom/LoadingIndicator";
import ErrorComponent from "@/components/custom/ErrorComponent";
const useStyles = makeStyles((theme) => ({
  content: {
    marginTop: 24,
    marginLeft: "130px",
    marginRight: "130PX",
    marginBottom: "75px",
  },
  bigContainer: {
    maxWidth: "100%",
    backgroundColor: "#ffffff",
  },
  title: {
    margin: 30,
    backgroundColor: "#ffffff",
  },
}));

const Page = () => {
  // Change component name to start with uppercase
  const classes = useStyles();
  const { data, status, error } = useAppSelector((state) => state.home);

  return (
    <Box className={classes.bigContainer}>
      <Navbar />
      <Box className={classes.content}>
        <Typography variant="h4" component="h1" gutterBottom>
          IFPMC Podcasts
        </Typography>
        <PodcastList />
      </Box>
    </Box>
  );
};

export default Page;
