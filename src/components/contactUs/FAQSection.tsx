import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Box,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { makeStyles } from "@mui/styles";
import { useAppSelector } from "@/lib/hooks";
import { fetchQuestions } from "@/services/api";
import { useTranslations } from "next-intl";

const useStyles = makeStyles((theme) => ({
  faqContainer: {
    backgroundColor: "#f5f5f5",
    paddingTop: "2rem",
    paddingBottom: "2rem",
  },
  faqItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));

// Define the Event interface
interface Event {
  id: number;
  desc: string;
  name: string; // Define the name property
  // Add other properties as needed
}

interface EventsResponse {
  results: Event[];
  // Add other properties as needed
}

const FAQSection = () => {
  const classes = useStyles();
  const [Events, setEvents] = useState<EventsResponse | null>(null);
  const { data } = useAppSelector((state) => state.home);
  const pathAfterSlash = useAppSelector((state) => state.path.pathAfterSlash);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const t = useTranslations("contactUs");

  const lng = pathAfterSlash;

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const data = await fetchQuestions(lng);
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

  return (
    <Box
      className={classes.faqContainer}
      sx={{
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
      <Box>
        <Typography
          sx={{ color: "#262626", fontSize: "32px",
            textAlign:pathAfterSlash === 'ar' ?'right' : 'left'
           }}
          variant="h6"
          gutterBottom
        >
          {t('Frequently Asked Questions')}
          
        </Typography>
        <Grid container spacing={2}>
          {Events?.results.map((item, index) => (
            <Grid item xs={12} md={6} key={index} className={classes.faqItem}>
              <Accordion
                style={{ backgroundColor: "transparent", boxShadow: "unset",width:'100%' }}
              >
                <AccordionSummary
                style={{paddingLeft:'0px'}}
                  expandIcon={<AddIcon style={{ color: "#476B87" }} />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography sx={{ color: "#476B87", fontSize: "22px" }}>
                    {item?.name}
                  </Typography>{" "}
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{item?.desc}</Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default FAQSection;
