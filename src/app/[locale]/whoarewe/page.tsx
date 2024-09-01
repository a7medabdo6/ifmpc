"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import { useAppSelector, useAppDispatch, useAppStore } from "@/lib/hooks";

import Footer from "@/components/Footer";
import NewsletterSubscription from "@/components/NewsletterSubscription";
import OurPartners from "@/components/OurPartners";
import WhoAreWe from "@/components/WhoAreWe/WhoAreWe";
import { colors } from "@/utils/colors";
import LoadingIndicator from "@/components/custom/LoadingIndicator";
import ErrorComponent from "@/components/custom/ErrorComponent";
const Page: React.FC = () => {
  const { data, status, error } = useAppSelector((state) => state.home);

  return (
    <div className="container" style={{ backgroundColor: colors.white }}>
      <Navbar />

      <WhoAreWe />
      <OurPartners />

      <NewsletterSubscription HomeData={data} />
      <Footer HomeData={data} />
    </div>
  );
};

export default Page;
