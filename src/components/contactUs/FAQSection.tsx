import React from 'react';
import { Container, Typography, Grid, Box, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { makeStyles } from '@mui/styles';

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

const FAQSection = () => {
  const classes = useStyles();
  const faqs = Array.from({ length: 10 }, (_, i) => `Frequently Asked Question ${i + 1}`);

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
