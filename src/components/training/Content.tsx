import React from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useAppSelector } from "@/lib/hooks";

interface ContentProps {
  title: string;
  des: any;
}

const useStyles = makeStyles((theme) => ({
  title: {
    // marginLeft: 24,
    color: "#262626",
    marginBottom: "2px",
    fontSize: "18px",

    fontWeight: 600, // Applying fontWeight directly
  },
  des: {
    marginTop: 24,
    fontSize: "15px",
    color: "#262626",
    fontWeight: 600,
  },
}));

const Content: React.FC<ContentProps> = ({ des, title }) => {
  const classes = useStyles();
  const pathAfterSlash = useAppSelector((state) => state.path.pathAfterSlash);

  return (
    <Box display="flex">
      <Box sx={{ marginBottom: '10px', textAlign: pathAfterSlash === 'ar' ? 'end' : 'start' }}>
        <Typography variant="body1" component="p" className={classes.title} sx={{
          fontFamily: "Almarai", fontWeight: 600,
        }}>
          {title}
        </Typography>
        <Typography variant="body2" className={classes.des} sx={{ fontFamily: "Almarai", color: '#262626 !important',marginTop:'5px' }}>
          {des}
        </Typography>
      </Box>
    </Box>
  );
};

export default Content;
