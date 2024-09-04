// components/CustomButton.tsx

"use client";

import React from "react";
import { useAppSelector } from "@/lib/hooks";

interface CustomButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  customColor?: string;
  width?: string;
  height?: string;
  backgroundColor?: string;
  borderRadius?: string;
  borderColor?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  onClick,
  children,
  customColor,
  width,
  height,
  backgroundColor,
  borderRadius,
  borderColor,
}) => {
  const pathAfterSlash = useAppSelector((state) => state.path.pathAfterSlash);

  const customStyles = {
    color: customColor || "black",
    width: width || "auto",
    height: height || "auto",
    backgroundColor: backgroundColor || "gray",
    borderRadius: borderRadius || "8px",
    borderColor: borderColor || "",
    border: "unset",
    fontSize: "18px",
  };

  return (
    <button type="button" onClick={onClick} style={customStyles}>
      {children}
    </button>
  );
};

export default CustomButton;
