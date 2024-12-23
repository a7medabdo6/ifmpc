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
import { fetchHome, FetchHomeData, fetchServices } from "../../services/api";

import { colors } from "@/utils/colors";
import { fetchHomeData } from "@/lib/features/homeSlice";
import LoadingIndicator from "@/components/custom/LoadingIndicator";
import ErrorComponent from "@/components/custom/ErrorComponent";
import { fetchCategoriesData } from "@/lib/features/categoriesSlice";
import HomeContent from "@/components/HomeContent";
import Services from "@/components/HomeCards/Services";

// const HomeContent = dynamic(() => import("@/components/HomeContent"), {
//   ssr: false,
// });

const Home: FC = () => {
  const dispatch = useAppDispatch();
  const pathAfterSlash = useAppSelector((state) => state.path.pathAfterSlash);
  const [loader, setloader] = useState(true);
  const [data, setdata] = useState(null);
  const categoriesData = useAppSelector((state) => state.categories.data);
  const lng = pathAfterSlash;
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const FetchData = async () => {
    if (lng) {
      dispatch(fetchCategoriesData(lng)); // Pass the language code you need
      const data = await FetchHomeData(lng);
      setdata(data);
      // console.log(data, "dataaa CLIENT");
    }
  };
  useEffect(() => {
    FetchData();
  }, [lng]);
  useEffect(() => {
    if (hasKey(data, "categories")) {
      setloader(false);
    }
  }, [data]);
  const [dataService, setDataService] = useState<any>(null);
  console.log(dataService);
  useEffect(() => {
    const getPublication = async () => {
      try {
        const data = await fetchServices(lng);
        setDataService(data?.results[0]);
      } catch (error: any) {
        setFetchError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getPublication();
  }, [lng]);
  const hasKey = (obj: any, key: any) => {
    return obj?.hasOwnProperty(key);
  };
  // if (loading) return <LoadingIndicator />;
  // if (fetchError) return <ErrorComponent message={fetchError} />;
  return (
    <div className="container" style={{ backgroundColor: colors.white }}>
      <Navbar />
      {loader ? (
        <>
          {/* <BackgroundImageComponent HomeData={data} /> */}
          <Services dataService={dataService} />
          {/* <HomeContent HomeData={data} />
          <OurPartners />
          <NewsletterSubscription HomeData={data} /> */}
        </>
      ) : (
        <>
          <LoadingIndicator />
          {/* <BackgroundImageComponent HomeData={data} />
          <HomeContent HomeData={data} />
          <OurPartners />
          <NewsletterSubscription HomeData={data} /> */}
        </>
      )}
    </div>
  );
};

export default Home;
