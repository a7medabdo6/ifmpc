import React from "react";
import Image, { StaticImageData } from "next/image";
import { Box, useMediaQuery, useTheme } from "@mui/material";

interface ImageContainerProps {
  imageSrc: StaticImageData;
}

const ImageContainer: React.FC<ImageContainerProps> = ({ imageSrc }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); // تحديد الشاشات الصغيرة

  const imageSize = isSmallScreen
    ? { width: 300, height: 150, marginLeft: "50px" }
    : { width: 600, height: 300 };

  return (
    <Box
      mr="24px"
      {...(isSmallScreen && { marginLeft: "50px" })}
      display="flex"
      justifyContent="flex-end"
    >
      <Image
        src={imageSrc}
        alt="ImageContainer"
        {...imageSize}
        objectFit="cover"
      />
    </Box>
  );
};

export default ImageContainer;
