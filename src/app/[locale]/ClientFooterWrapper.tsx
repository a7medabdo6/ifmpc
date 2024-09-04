// components/ClientFooterWrapper.tsx
"use client";

import Footer from "@/components/Footer";
import { useAppSelector } from "@/lib/hooks";

const ClientFooterWrapper = () => {
  const { data } = useAppSelector((state) => state.home);

  return <Footer HomeData={data} />;
};

export default ClientFooterWrapper;