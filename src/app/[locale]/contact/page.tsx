"use client";
import React, { useEffect, useState } from "react";
import { Container, Grid, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/contactUs/ContactForm";
import ContactInformation from "@/components/contactUs/ContactInformation";
import FAQSection from "@/components/contactUs/FAQSection";
import NewsletterSubscription from "@/components/NewsletterSubscription";
import { useTranslations } from "next-intl";
import { useAppSelector } from "@/lib/hooks";
import { createContactUs, fetchContactUs } from "../../../services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // import the CSS file for toastify
import LoadingIndicator from "@/components/custom/LoadingIndicator";
import ErrorComponent from "@/components/custom/ErrorComponent";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#FFFFFF",
    minHeight: "100vh",
  },
  title: {
  },
  container: {
    // width: '100%',
    padding: "2rem 0",
  },
}));

const Page = () => {
  const classes = useStyles();
  const [countryEn, setCountryEn] = useState<string>("");
  const [countryAr, setCountryAr] = useState<string>("");
  const [position, setPosition] = useState<{ lat: number; lng: number }>({
    lat: 51.505,
    lng: -0.09,
  });
  const [mapLink, setMapLink] = useState<string>("");
  const pathAfterSlash = useAppSelector((state) => state.path.pathAfterSlash);
  const { data, status } = useAppSelector((state) => state.home);

  const t = useTranslations("contactUs");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [message, setMessage] = useState("");
  const [ContactUs, setContactUs] = useState();
  const [error, setError] = useState<string | null>(null);
  const lng = pathAfterSlash || 'en';
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadContactUs = async () => {
      
      try {
        const data = await fetchContactUs(lng);
        setContactUs(data?.results || []);

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
if( lng)
    loadContactUs();
  }, [lng]);
  const handleFirstNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };

  const handlePhoneNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPhoneNumber(event.target.value);
  };

  const handleEmailAddressChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEmailAddress(event.target.value);
  };

  const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleClick = async () => {
    try {
      const contactData = {
        first_name: firstName,
        last_name: lastName,
        email: emailAddress,
        phone: phoneNumber,
        description: message,
      };

      // Sending the data to the backend using createContactUs function
      const response = await createContactUs(contactData);

      // Notify the user of successful submission
      toast.success("Contact request submitted successfully!");
    } catch (error) {
      // Notify the user of the error
      toast.error("Failed to submit contact request.");
    }
  };
  if (loading) return <LoadingIndicator />;
  if (error) return <ErrorComponent message={error} />;
  return (
    <Box className={classes.root}>
      <Navbar />
      <Box
        className={classes.container}
        sx={{
          marginLeft: {
            xs: "24px",
            md: "98px",
          },
          marginRight: {
            xs: "24px",
            md: "98px",
          },
        }}
      >
        <Grid
          container
          spacing={4}
          sx={{ direction: pathAfterSlash === "ar" ? "rtl" : "ltr" }}
        >
          <Grid item xs={12} md={6}>
            <ContactForm
              title={t("contactUs")}
              firstName={firstName}
              lastName={lastName}
              phoneNumber={phoneNumber}
              emailAddress={emailAddress}
              message={message}
              onFirstNameChange={handleFirstNameChange}
              onLastNameChange={handleLastNameChange}
              onPhoneNumberChange={handlePhoneNumberChange}
              onEmailAddressChange={handleEmailAddressChange}
              onMessageChange={handleMessageChange}
              onClick={handleClick}
              buttonText={t("contactUs")}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <ContactInformation
              countryAr={countryAr}
              setCountryAr={setCountryAr}
              position={position}
              setPosition={setPosition}
              mapLink={mapLink}
              setMapLink={setMapLink}
              countryEn={countryEn}
              setCountryEn={setCountryEn}
              ContactUs={ContactUs}
            />
          </Grid>
        </Grid>
      </Box>
      <Box sx={{paddingTop:'2rem'}}>
        <FAQSection />
      </Box>
      <NewsletterSubscription HomeData={data} />
      <ToastContainer />
    </Box>
  );
};

export default Page;
