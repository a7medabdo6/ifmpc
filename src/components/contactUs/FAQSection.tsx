import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid, Box, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { makeStyles } from '@mui/styles';
import { useAppSelector } from '@/lib/hooks';
import { fetchQuestions } from '@/services/api';

// Define your styles
const useStyles = makeStyles((theme) => ({
  faqContainer: {
    backgroundColor: '#f5f5f5',
    paddingTop: '2rem',
    paddingBottom: '2rem',

  },
  faqItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
}));
interface EventsResponse {
  results: Event[];
  // أضف خصائص أخرى حسب الحاجة
}
const FAQSection = () => {
  const classes = useStyles();
  const faqs = Array.from({ length: 10 }, (_, i) => `Frequently Asked Question ${i + 1}`);
  const [Events, setEvents] = useState<EventsResponse | null>(null);
  const { data } = useAppSelector((state) => state.home);
  const pathAfterSlash = useAppSelector((state) => state.path.pathAfterSlash);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const lng = pathAfterSlash;
console.log(Events);

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
    <Box className={classes.faqContainer} sx={{
      paddingLeft: {
        xs: '24px',
        md: '130px'
      },
      paddingRight: {
        xs: '24px',
        md: '130px'
      },
    }}>
      <Box >
        <Typography sx={{color:'#262626'}} variant="h6" gutterBottom>
          Frequently Asked Questions
        </Typography>
        <Grid container spacing={2}>
          {faqs.map((faq, index) => (
            <Grid item xs={12} md={6} key={index} className={classes.faqItem}>
              <Typography sx={{color:'#262626'}}>{faq}</Typography>
              <IconButton sx={{color:'#262626'}}>
                <AddIcon />
              </IconButton>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default FAQSection;
