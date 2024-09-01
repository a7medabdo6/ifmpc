"use client";

import { FC, useState, useEffect } from "react";
import dynamic from "next/dynamic";
import BackgroundImageComponent from "@/components/BackgroundImageComponent";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsletterSubscription from "@/components/NewsletterSubscription";
import OurPartners from "@/components/OurPartners";
import StoreProvider from "./StoreProvider";
import { updateFloor } from "@/lib/features/bookSlice";
import { useAppSelector, useAppDispatch, useAppStore } from "@/lib/hooks";
import { fetchHome } from "../../services/api";

import { colors } from "@/utils/colors";
import { fetchHomeData } from "@/lib/features/homeSlice";
import LoadingIndicator from "@/components/custom/LoadingIndicator";
import ErrorComponent from "@/components/custom/ErrorComponent";
import { fetchCategoriesData } from "@/lib/features/categoriesSlice";
const HomeContent = dynamic(() => import("@/components/HomeContent"), {
  ssr: false,
});

const Home: FC = () => {
  const dispatch = useAppDispatch();
  const pathAfterSlash = useAppSelector((state) => state.path.pathAfterSlash);

  const { data, status } = useAppSelector((state) => state.home);
  const categoriesData = useAppSelector((state) => state.categories.data);
  const lng = pathAfterSlash;

  useEffect(() => {
    if (lng) {
      dispatch(fetchCategoriesData(lng)); // Pass the language code you need
    }
  }, [dispatch, lng]);
  useEffect(() => {
    if (status === "idle" && lng) {
      dispatch(fetchHomeData(lng));
    }
  }, [dispatch, status, lng]);

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
