import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Link,
} from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { makeStyles } from "@mui/styles";
import XIcon from "@mui/icons-material/X";
import { YouTube, LinkedIn } from "@mui/icons-material";
import { colors } from "@/utils/colors";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useAppSelector } from "@/lib/hooks";
import { useTranslations } from "next-intl";

const useStyles = makeStyles((theme) => ({
  listItem: {
    paddingLeft: "0px !important",
    paddingTop: "0px",
  },
  logo: {
    marginBottom: 4,
  },
  listIcon: {
    minWidth: "30px",
  },
  socialMediaIconContainer: {
    display: "flex",
    gap: "8px",
    marginBottom: "8px",
  },
  socialMediaIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "20px",
    height: "20px",
    borderRadius: "10%",
    backgroundColor: colors.active,
    color: "black",
    "&:hover": {
      backgroundColor: "gray",
    },
  },
  container: {
    backgroundColor: "#fff",
    padding: "2rem",
    borderRadius: "8px",
  },
  title: {
    fontWeight: 600,
    marginBottom: "15px",
  },
  imageContainer: {
    marginTop: "1rem",
    display: "flex",
    justifyContent: "flex-start",
    width: "100%",
    height: "170px",
    position: "relative",
    "& img": {
      objectFit: "cover",
    },
  },
}));

const SocialMediaIcon: React.FC<{ icon: React.ElementType }> = ({
  icon: IconComponent,
}) => {
  const classes = useStyles();

  return (
    <Box className={classes.socialMediaIcon}>
      <IconComponent sx={{ color: "white", fontSize: "13px" }} />
    </Box>
  );
};

const DraggableMarker: React.FC<{
  position: { lat: number; lng: number };
  setPosition: (pos: { lat: number; lng: number }) => void;
}> = ({ position, setPosition }) => {
  const markerRef = React.useRef<L.Marker>(null);

  const eventHandlers = React.useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current;
        if (marker != null) {
          const latLng = marker.getLatLng();
          setPosition(latLng);
          console.log(`Latitude: ${latLng.lat}, Longitude: ${latLng.lng}`);
        }
      },
    }),
    [setPosition]
  );

  return (
    <Marker
      draggable={true}
      eventHandlers={eventHandlers}
      position={position}
      ref={markerRef}
      icon={L.icon({
        iconUrl: "/assets/images/markir.png",
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32],
      })}
    >
      <Popup>
        <span>
          Lat: {position.lat}, Lng: {position.lng}
        </span>
      </Popup>
    </Marker>
  );
};

interface ContactInformationProps {
  position: { lat: number; lng: number };
  setPosition: (pos: { lat: number; lng: number }) => void;
  mapLink: string;
  countryAr: string;
  countryEn: string;
  setCountryEn: any;
  setCountryAr: any;

  setMapLink: (link: string) => void;
}

const ContactInformation: React.FC<ContactInformationProps> = ({
  position,
  countryAr,
  countryEn,
  setCountryEn,
  setCountryAr,
  setPosition,
  mapLink,
  setMapLink,
}) => {
  const classes = useStyles();
  const pathAfterSlash = useAppSelector((state) => state.path.pathAfterSlash);
  const t = useTranslations("contactUs");

  const getLocationDetails = async (language: string) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${position.lat}&lon=${position.lng}&format=json&addressdetails=1&accept-language=${language}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching location details:", error);
      return null;
    }
  };

  useEffect(() => {
    const fetchLocationDetails = async () => {
      const resultEn = await getLocationDetails("en"); // طلب البيانات بالإنجليزية
      const resultAr = await getLocationDetails("ar"); // طلب البيانات بالعربية

      if (resultEn && resultEn.address) {
        const { address } = resultEn;
        setCountryEn(address.country || "");
      }

      if (resultAr && resultAr.address) {
        const { address } = resultAr;
        setCountryAr(address.country || ""); // الحصول على اسم الدولة باللغة العربية
      }
    };
    fetchLocationDetails();
  }, [position]);

  const handlePositionChange = (newPosition: { lat: number; lng: number }) => {
    setPosition(newPosition);
    const link = `https://www.google.com/maps?q=${newPosition.lat},${newPosition.lng}`;
    setMapLink(link);
  };

  return (
    <Box className={classes.container}>
      <Typography className={classes.title} sx={{color:'#262626'}} variant="h6" gutterBottom>
      {t("contactInformation")}
      </Typography>
      <List>
        <ListItem className={classes.listItem}>
          <ListItemIcon className={classes.listIcon}>
            <LocationOnOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary={`${t("Country")} ${countryEn}`} sx={{ textAlign:pathAfterSlash === 'ar' ? "right":"left",color:'#262626'  }} />
        </ListItem>

        <ListItem className={classes.listItem}>
          <ListItemIcon className={classes.listIcon}>
            <PhoneOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary={t("Here is the Phone Number of IFPMC")} sx={{ textAlign:pathAfterSlash === 'ar' ? "right":"left",color:'#262626'  }}/>
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemIcon className={classes.listIcon}>
            <EmailOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary={t("Here is the Email of IFPMC" )}            sx={{ textAlign:pathAfterSlash === 'ar' ? "right":"left",color:'#262626' }} // Align the text to the end
 />
        </ListItem>
      </List>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          marginTop: "1rem",
        }}
      >
        <Box className={classes.socialMediaIconContainer}>
          <Link href="#" color="inherit">
            <SocialMediaIcon icon={XIcon} />
          </Link>
          <Link href="#" color="inherit">
            <SocialMediaIcon icon={YouTube} />
          </Link>
          <Link href="#" color="inherit">
            <SocialMediaIcon icon={LinkedIn} />
          </Link>
        </Box>
      </Box>
      <Box className={classes.imageContainer}>
        <MapContainer
          center={position}
          zoom={13}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='Map data © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <DraggableMarker
            position={position}
            setPosition={handlePositionChange}
          />
        </MapContainer>
      </Box>
    </Box>
  );
};

export default ContactInformation;
