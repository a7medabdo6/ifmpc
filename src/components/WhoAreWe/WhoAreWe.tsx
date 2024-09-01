import React from 'react';
import { Typography, Box, List, ListItem, ListItemText } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    padding: '2rem 0',
    width: '75%',
    '@media (max-width: 600px)': {
      width: '90%',
    },
  },
  section: {
    marginBottom: '2rem',
  },
  title: {
    fontWeight: 600,
    color: '#262626',
  },
  Who: {
    fontWeight: "bold",
    color: '#262626',
    fontSize:"25px"
  },
  list: {
    padding: 0,
    marginLeft: '20px',
  },
  listItem: {
    display: 'flex',
    alignItems: 'flex-start',
    paddingLeft: 0,
    paddingRight: 0,
    position: 'relative',
    '&::before': {
      content: '"•"',  // إضافة النقطة
      position: 'absolute',
      left: '-20px',   // تحديد موقع النقطة بالنسبة للنص
      top: '0',
      fontSize: '20px', // حجم النقطة
      color: '#262626',
    },
  },
  listItemText: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom:'0px',
  },
  primary: {
    flex: '0 0 auto',
    marginRight: '8px',
    fontWeight: 600,
    fontSize: '14px',
    color: '#262626',
  },
  secondary: {
    flex: '1 1 auto',
    textAlign: 'left',
    color: '#262626',
  },
});

const WhoAreWe: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root} sx={{
      marginLeft: {
        xs: '24px',
        md: '130px'
      },
      marginRight: {
        xs: '24px',
        md: '130px',
      },
      color: '#262626',
    }}>
      <Box className={classes.section}>
        <Typography variant="h5" gutterBottom className={classes.Who} sx={{fontWeight:600,fontSize:'22px'}}>
          Who Are We
        </Typography>
      </Box>
      <Box className={classes.section}>
        <Typography variant="h6" gutterBottom className={classes.title} sx={{fontWeight:600,fontSize:'18px'}}>
          Our Vision
        </Typography>
        <Typography paragraph sx={{ maxWidth: '782px' }}>
      We believe in research and data-driven change and development. Why?<br />
      We value change and development that is based on evidence and providing a cost-effective approach for our clients and partners.
      Through research and impact analysis we can tailor the best solutions for the most challenging problems.
    </Typography>
      </Box>
      <Box className={classes.section}>
      <Typography variant="h6" gutterBottom className={classes.title} sx={{fontWeight:600,fontSize:'18px'}}>
      Our Mission
        </Typography>
        <Typography paragraph sx={{ maxWidth: '782px' }}>
          IFMPC strives to build a network bringing together experts, researchers, politicians, entrepreneurs working on political and economic development in Iraq.
        </Typography>
        <List className={classes.list}>
          <ListItem className={classes.listItem} sx={{padding:'0px',marginLeft:"35px"}}>
            <Box className={classes.listItemText} >
              <Typography className={classes.primary}  sx={{fontWeight:600}}>Private Sector : </Typography>
              <Typography className={classes.secondary}>We help our clients to find the edge to stay ahead of competition.</Typography>
            </Box>
          </ListItem>
          <ListItem className={classes.listItem}sx={{padding:'0px',marginLeft:"35px"}}>
            <Box className={classes.listItemText}>
              <Typography className={classes.primary } sx={{fontWeight:600}}>Public Sector : </Typography>
              <Typography className={classes.secondary}>We help the public sector to develop strategies for better results.</Typography>
            </Box>
          </ListItem>
        </List>
      </Box>
      <Box className={classes.section}>
      <Typography variant="h6" gutterBottom className={classes.title} sx={{fontWeight:600,fontSize:'18px'}}>
      Our Approach
        </Typography>
        <Typography paragraph>
          How do we plan to achieve our goals and deliver on our promises to clients and partners?
        </Typography>
        <List className={classes.list}>
          <ListItem className={classes.listItem} sx={{padding:'0px',marginLeft:"35px"}}>
            <Box className={classes.listItemText} sx={{ maxWidth: '782px' }}>
            <Typography className={classes.secondary}>
    <span style={{ fontWeight: 600 }}>Research: </span>
    Through research, we strive to understand the drivers and causes of problems, inform on learning and measure impact.
  </Typography></Box>
          </ListItem>
          <ListItem className={classes.listItem} sx={{padding:'0px',marginLeft:"35px"}}>
            <Box className={classes.listItemText} sx={{ maxWidth: '782px' }}>
              <Typography className={classes.primary} sx={{fontWeight:600}}>Training : </Typography>
              <Typography className={classes.secondary}>We build capacities and prepare our clients for success and prosperity through tailored training.</Typography>
            </Box>
          </ListItem>
          <ListItem className={classes.listItem} sx={{padding:'0px',marginLeft:"35px"}}>
            <Box className={classes.listItemText} sx={{ maxWidth: '782px' }}>
              <Typography className={classes.primary} sx={{fontWeight:600}}>Experts : </Typography>
              <Typography className={classes.secondary}>We work closely with local experts to build grassroots resilience and develop realistic solutions.</Typography>
            </Box>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default WhoAreWe;
