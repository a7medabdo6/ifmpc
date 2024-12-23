import React, { useState } from "react";
import { Grid, Box, Typography, Dialog } from "@mui/material";
import CustomCard from "./CustomCard";

import CustomButton from "../custom/CustomButton";
import Link from "next/link";
import { colors } from "@/utils/colors";
import { useAppSelector } from "@/lib/hooks";
import { useTranslations } from "next-intl";
const Services: React.FC<{ dataService: any }> = ({ dataService }) => {
  const handleClick = () => {
    console.log("Button clicked!");
  };
  const [open, setopen] = useState(false);
  const [details, setDetails] = useState("");

  const handleClose = () => {
    setopen(false);
  };
  const handleOpenService = (value: any) => {
    setDetails(value);
    setopen(true);
  };
  const pathAfterSlash = useAppSelector((state) => state.path.pathAfterSlash);
  const t = useTranslations("BackgroundImageComponent");
  return (
    <Box
      sx={{
        textAlign: "center",

        paddingRight: { xs: "10px", sm: "20px", md: "300px" },
        paddingLeft: { xs: "10px", sm: "20px", md: "300px" },
        paddingBottom: { xs: "10px", sm: "20px", md: "20px" },
      }}
    >
      {dataService && (
        <>
          <Typography
            variant="h4"
            color="#476B87"
            gutterBottom
            mt={10}
            sx={{
              textAlign: "center",

              paddingRight: { xs: "10px", sm: "20px", md: "40px" },
              paddingLeft: { xs: "10px", sm: "20px", md: "40px" },
            }}
          >
            {dataService?.f_title}{" "}
            <Box component="span" color="#C99700">
              {dataService?.s_title}{" "}
            </Box>
            {dataService?.t_title}{" "}
          </Typography>
          <Typography
            variant="body1"
            color="#606060"
            mb={4}
            sx={{
              textAlign: "center",

              paddingRight: { xs: "10px", sm: "20px", md: "100px" },
              paddingLeft: { xs: "10px", sm: "20px", md: "100px" },
            }}
          >
            {dataService?.description}{" "}
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            {dataService?.items?.map(
              (
                card: { icon: string; title: string; description: string },
                index: React.Key | null | undefined
              ) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  key={index}
                  style={{ cursor: "pointer" }}
                  onClick={() => handleOpenService(card.description)}
                >
                  <CustomCard
                    imageSrc={card.icon}
                    title={card.title}
                    description={card.description}
                  />
                </Grid>
              )
            )}
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
                {t("contactUs")}
              </CustomButton>
            </Box>
          </Link>

          <Dialog onClose={handleClose} open={open}>
            <p
              dangerouslySetInnerHTML={{ __html: details }}
              color="#555"
              style={{ padding: "30px", width: "400px", textAlign: "center" }}
            ></p>
          </Dialog>
        </>
      )}
    </Box>
  );
};

export default Services;
