import React, { useEffect, useState } from "react";
import { Grid, Typography, Box } from "@mui/material";
import { useTranslations } from "next-intl";
import { useAppSelector } from "@/lib/hooks";
import { makeStyles } from "@mui/styles";
import { fetchOurPartners } from "@/services/api";
import Image from "next/image";

// Importing the separated components
import LoadingIndicator from "@/components/custom/LoadingIndicator";
import ErrorComponent from "@/components/custom/ErrorComponent";

const useStyles = makeStyles(() => ({
  content: {
    padding: "12px",
  },
  title: {
    fontWeight: 600,
    color: "#262626",
    marginBottom: "15px",
  },
}));

interface Partner {
  id: number;
  image: string;
  name: string;
  name_en: string;
  name_ar: string;
}

interface PartnersResponse {
  results: Partner[];
}

const OurPartners: React.FC = () => {
  const pathAfterSlash = useAppSelector((state) => state.path.pathAfterSlash);
  const t = useTranslations("Partners");
  const classes = useStyles();

  const lng = pathAfterSlash;
  const [partners, setPartners] = useState<PartnersResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPartners = async () => {
      try {
        const data = await fetchOurPartners(lng);
        setPartners(data);
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

    loadPartners();
  }, [lng]);

  if (loading) return <LoadingIndicator />;
  if (error) return <ErrorComponent message={error} />;

  return (
    <Box
      sx={{
        marginTop:'100px',
        padding: "50px",
        paddingLeft: {
          md: "130px",
        },
        paddingRight: {
          md: "130px",
        },
        backgroundColor: "#F0F0F0",
      }}
    >
      <Typography
        className={classes.title}
        sx={{
          marginTop:'1.2rem',
          marginBottom:'1.7rem',
          textAlign: pathAfterSlash === "ar" ? "right" : "left",
          fontFamily: pathAfterSlash === "ar" ? "Almarai" : "Source Sans Pro",
          fontWeight:600
        }}
        variant="h6"
        gutterBottom
      >
        {t("OurPartners")}
      </Typography>
      <Grid
        container
        sx={{
          display: {
            xs: "block",
            md: "flex",
          },
          flexDirection: {
            md: "row",
          },
          alignItems: {
            xs: "center",
            md: "center",
          },
          justifyContent: {
            xs: "center",
            md: "space-between",
          },
        }}
      >
        {partners?.results.map((partner) => (
          <Grid
            key={partner.id}
            item
            sx={{
              marginTop:'10px',
              marginBottom:'15px',
              paddingTop: {
                xs: "10px",
                md: "0px !important",
              },
              display: "flex",
              alignItems: "center",
              justifyContent:  pathAfterSlash === "ar" ? "flex-end" : "flex-start",
            }}
          >
            <Image
              src={partner.image}
              alt={partner.name}
              width={180}
              height={40}
              quality={100}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default OurPartners;
