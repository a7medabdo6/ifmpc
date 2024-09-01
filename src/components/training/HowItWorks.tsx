import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import CustomButton from "../custom/CustomButton";
import { colors } from "@/utils/colors";
import { makeStyles } from "@mui/styles";

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
    fontWeight:600,
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

  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <Box className={classes.box}>
      <Grid
        container
        spacing={0}
        sx={{ flexDirection: { xs: "column", md: "row" }, mt: 5, pt: 10 }}
      >
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            paddingLeft: { xs: "0px", md: "116px" },
            paddingRight: { xs: "0px", md: "116px" },
          }}
        >
          <Typography variant="body1" component="p" className={classes.title}>
            <span className={classes.text}>How It Works in </span>
            <span style={{ color: colors.active, fontSize: "22px",    fontWeight:600 }}>
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
          <Box sx={{ marginRight: "24px", paddingRight: "116px" }}>
            <CustomButton
              onClick={handleClick}
              customColor="white"
              width="175px"
              height="35px"
              backgroundColor={colors.active}
              borderRadius="4px"
            >
              Contact Us
            </CustomButton>
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
          sx={{ flexDirection: { xs: "column", md: "row" }, mt: 5 }}
        >
          <Grid item xs={12} md={4} sx={{paddingRight:'25px'}}>
            <Box>
              <Typography
                variant="body1"
                component="p"
                sx={{fontWeight:600,marginBottom:'5px'}}
                className={classes.title}
              >
                1. Before
              </Typography>
              <Typography
                variant="body1"
                component="p"
                className={classes.texttwo}
              >
                Carrying out training needs assessment. Identifying the purpose
                of the training. Aligning learning outcomes with business goals.
                Planning the most appropriate delivery method.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} sx={{paddingRight:'25px'}}>
            <Box>
              <Typography
                variant="body1"
                component="p"
                sx={{fontWeight:600,marginBottom:'5px'}}

                className={classes.title}
              >
                2. During

              </Typography>
              <Typography
                variant="body1"
                component="p"
                
                className={classes.texttwo}
              >
                Draw upon the learners prior knowledge to create connections. Align content with real-life jobs and responsibilities. Divide programs into modules. Provide action plans to keep learners motivated.

              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} sx={{paddingRight:'25px'}}>
            <Box>
              <Typography
                variant="body1"
                component="p"
                sx={{fontWeight:600,marginBottom:'5px'}}

                className={classes.title}
              >
                3. After
              </Typography>
              <Typography
                variant="body1"
                component="p"
                className={classes.texttwo}
              >
                Supplement training with social learning. Arrange post-training follow-up sessions. Provide opportunities for practice skills to be applied for all learners .

              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default HowItWorks;
