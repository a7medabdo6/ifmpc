import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import Image from "next/image";

interface CardProps {
  imageSrc: string; // المسار للصورة
  title: string;
  description: string;
}

const CustomCard: React.FC<CardProps> = ({ imageSrc, title, description }) => {
  return (
    <Card
      sx={{
        backgroundColor: "#D1DAE1",
        borderRadius: "0", // إلغاء الزوايا الدائرية
        padding: "20px",
        textAlign: "center",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 6px 10px rgba(0, 0, 0, 0.15)",
        },
        minHeight: "180px",
      }}
    >
      <Box
        sx={{
          marginBottom: "15px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Image
          src={imageSrc}
          alt={title}
          width={38} // عرض الصورة
          height={33} // ارتفاع الصورة
          // style={{ borderRadius: "50%" }} // إذا كنت ترغب في زوايا دائرية للصورة
        />
      </Box>
      <Typography
        variant="h6"
        fontWeight="400"
        color="#476B87"
        gutterBottom
        fontSize={18}
        sx={{
          paddingRight: { xs: "10px", sm: "10px", md: "10px" },
          paddingLeft: { xs: "10px", sm: "10px", md: "10px" },
        }}
      >
        {title}
      </Typography>
    </Card>
  );
};

export default CustomCard;
