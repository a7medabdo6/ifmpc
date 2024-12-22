import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import CustomCard from "./CustomCard";

import CustomButton from "../custom/CustomButton";
import Link from "next/link";
import { colors } from "@/utils/colors";
import { useAppSelector } from "@/lib/hooks";
import { useTranslations } from "next-intl";
const Services: React.FC<{ dataService: any }> = ({ dataService }) => {
  const cardsData = [
    {
      imageSrc:"/assets/images/Union_2.png" ,
      title: "Customized consultancy for developing banking services",
      description: "",
    },
    {
      imageSrc:"/assets/images/Trend_up.png" ,
      title: "Innovative solutions to optimize operations and processes",
      description: "",
    },
    {
      imageSrc:"/assets/images/Union_1.png" ,
      title:
        "Comprehensive support to address challenges in the Iraqi banking sector",
      description: "",
    },
    {
      imageSrc:"/assets/images/Union_3.png" ,
      title:
        "Developing risk management plans to ensure financial sustainability",
      description: "",
    },
    {
      imageSrc:"/assets/images/Union_5.png" ,
      title:
        "Training and developing human resources in the banking sector",
      description: "",
    },
    {
      imageSrc:"/assets/images/Union_6.png" ,
      title:
        "Connecting banks with regional and international networks",
      description: "",
    },
  ];
  const handleClick = () => {
    console.log("Button clicked!");
  };
 const pathAfterSlash = useAppSelector((state) => state.path.pathAfterSlash);
  const t = useTranslations("BackgroundImageComponent");
  return (
<Box
  sx={{
    textAlign: "center",
   
    paddingRight: { xs: "10px", sm: "20px", md: "300px" },
    paddingLeft: { xs: "10px", sm: "20px", md: "300px" },
    paddingBottom:{ xs: "10px", sm: "20px", md: "20px" }
  }}
>
      <Typography variant="h4" color="#476B87" gutterBottom mt={10}  sx={{
    textAlign: "center",
    
    paddingRight: { xs: "10px", sm: "20px", md: "40px" },
    paddingLeft: { xs: "10px", sm: "20px", md: "40px" },
  }}>
        {dataService?.f_title}{" "}
        <Box component="span" color="#C99700">
        {dataService?.s_title}{" "}
        </Box>
        {dataService?.t_title}{" "}
      </Typography>
      <Typography variant="body1" color="#606060" mb={4}   sx={{
    textAlign: "center",
 
    paddingRight: { xs: "10px", sm: "20px", md: "100px" },
    paddingLeft: { xs: "10px", sm: "20px", md: "100px" },
  }}>
        {dataService?.description}{" "}


      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {dataService?.items?.map((card: { icon: string; title: string; description: string; }, index: React.Key | null | undefined) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <CustomCard
              imageSrc={card.icon}
              title={card.title}
              description={card.description}
            />
          </Grid>
        ))}
      </Grid>
      <Link href={`/${pathAfterSlash}/whoarewe`} passHref>
  <Box
    sx={{
      paddingTop: { xs: "10px", sm: "10px", md: "20px" },
    }}
  >
    <CustomButton
      onClick={handleClick}
      customColor="white"
      width="175px"
      height="48px"
      backgroundColor={colors.active}
      borderRadius="4px"
    >
      
      {t("contactus")}
    </CustomButton>
  </Box>
</Link>;
    </Box>
  );
};

export default Services;
