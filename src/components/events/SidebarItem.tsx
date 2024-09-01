// components/SidebarItem.tsx
import React from "react";
import Image, { StaticImageData } from "next/image";
import { Box, Typography } from "@mui/material";

interface SidebarItemProps {
  imageSrc: string;
  title: string;
  views: string;
  daysAgo: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  imageSrc,
  title,
  views,
  daysAgo,
}) => {
  return (
    <Box display="flex" mb={2}>
      <Box mr={2}>
        <Image src={imageSrc} alt={title} width={170} height={104} />
      </Box>
      <Box>
        <Typography
          variant="body1"
          component="p"
          style={{
            color: "black",
            fontWeight: 500,
          }}
          fontWeight="bold"
        >
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {views} views · {daysAgo} days ago
        </Typography>
      </Box>
    </Box>
  );
};

export default SidebarItem;
