"use client";
import React, { useEffect, useState } from "react";
import Sidebar from "@/components/events/Sidebar";
import ContentPage from "@/components/events/ContentPage";
import { Grid, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsletterSubscription from "@/components/NewsletterSubscription";
import { fetchEvents } from "@/services/api";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import LoadingIndicator from "@/components/custom/LoadingIndicator";
import ErrorComponent from "@/components/custom/ErrorComponent";
const useStyles = makeStyles((theme) => ({
  content: {
    // padding: '12px',
  },
  bigContainer: {
    // maxWidth: "100%",
    backgroundColor: "#ffffff",
  },
}));

interface Event {
  id: number;
  title: string;
  video_link: string | null;
  description: string;
  published_at: string;
  thumbnail_url: string;
  video_id: string;
  video_url: string;
}

interface EventsResponse {
  results: Event[];
  // أضف خصائص أخرى حسب الحاجة
}

const Page = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const [Events, setEvents] = useState<EventsResponse | null>(null);
  const { data } = useAppSelector((state) => state.home);
  const pathAfterSlash = useAppSelector((state) => state.path.pathAfterSlash);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const lng = pathAfterSlash;

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const data = await fetchEvents(lng);
        setEvents(data);
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

    loadEvents();
  }, [lng]);



  const firstVideoLink = Events?.results[0]?.video_url || null;
  const firstdescription = Events?.results[0]?.description || null;

  const handleItemClick = (selectedEvent: Event) => {
    if (Events) {
      const updatedEvents = [
        selectedEvent,
        ...Events.results.filter(
          (event: { id: number }) => event.id !== selectedEvent.id
        ),
      ];
      setEvents({ ...Events, results: updatedEvents });
    }
  };
  
  if (loading) return <LoadingIndicator />;
  if (error) return <ErrorComponent message={error} />;
  return (
    <Box className={classes.bigContainer}>
      <Navbar />
      <Grid
        container
        spacing={0}
        style={{
          marginTop: "80px",
          width: "auto", // هذا يلغي العرض التلقائي بنسبة 100%
        }}
        sx={{
          flexDirection: { xs: "column", md: "row" },
          mt: 5,
          marginLeft: {
            xs: "0px",
            md: "130px",
          },
          marginRight: {
            xs: "0px",
            md: "130px",
          },
        }}
      >
        <Grid item xs={12} md={8} className={classes.content}>
          <ContentPage
            videoLink={firstVideoLink}
            firstDescription={firstdescription}
          />
        </Grid>
        <Grid item xs={12} md={4} sx={{ display: "block" }}>
          <Sidebar events={Events?.results} handleItemClick={handleItemClick} />
        </Grid>
      </Grid>
      <NewsletterSubscription HomeData={data} />
      <Footer HomeData={data} />
    </Box>
  );
};

export default Page;
