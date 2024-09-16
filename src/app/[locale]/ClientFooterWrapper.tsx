// components/ClientFooterWrapper.tsx
"use client";

import Footer from "@/components/Footer";
import { fetchHomeData } from "@/lib/features/homeSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useEffect } from "react";

const ClientFooterWrapper = ({ locale }: any) => {
  const { data, status } = useAppSelector((state) => state.home);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchHomeData(locale));
    }
  }, [dispatch, status]);
  return <Footer HomeData={data} />;
};

export default ClientFooterWrapper;
