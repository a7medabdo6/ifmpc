"use client";

import { FC, useState, useEffect } from "react";
import dynamic from "next/dynamic";
import BackgroundImageComponent from "@/components/BackgroundImageComponent";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsletterSubscription from "@/components/NewsletterSubscription";
import OurPartners from "@/components/OurPartners";
import { updateFloor } from "@/lib/features/bookSlice";
import { useAppSelector, useAppDispatch, useAppStore } from "@/lib/hooks";

import { colors } from "@/utils/colors";
import { fetchHomeData } from "@/lib/features/homeSlice";
import HomeContent from "@/components/HomeContent";

// const HomeContent = dynamic(() => import("@/components/HomeContent"), {
//   ssr: false,
// });

const Home: FC = () => {
  const dispatch = useAppDispatch();
  const { data, status, error } = useAppSelector((state) => state.home);

  // useEffect(() => {
  //   if (status === "idle") {
  //     dispatch(fetchHomeData("en"));
  //   }
  // }, [dispatch, status]);

  return (
    <div className="container" style={{ backgroundColor: colors.white }}>
      <Navbar />
      <BackgroundImageComponent HomeData={data} />
      <HomeContent HomeData={data} />
      <OurPartners />
      <NewsletterSubscription HomeData={data} />
      <Footer HomeData={data} />
    </div>
  );
};

export default Home;
