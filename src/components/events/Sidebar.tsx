import React from "react";
import { Box } from "@mui/material";
import SidebarItem from "./SidebarItem";
import { parseISO, differenceInDays } from "date-fns";

interface Event {
  id: number;
  title: string;
  video_link: string | null;
  description: string;
  published_at: string;
  thumbnail_url: string;
  video_id: string;
  video_url: string;
}

interface SidebarProps {
  events: Event[] | undefined;
  handleItemClick: any;
}

const Sidebar: React.FC<SidebarProps> = ({ events, handleItemClick }) => {
  const getDaysAgo = (dateString: string | null) => {
    if (!dateString) return 0; // إذا كانت قيمة التاريخ غير موجودة، ارجع 0

    try {
      const publishedDate = parseISO(dateString);
      const today = new Date();
      const daysAgo = differenceInDays(today, publishedDate);
      return daysAgo;
    } catch (error) {
      console.error("Error parsing date:", error);
      return 0; // في حالة حدوث خطأ أثناء التحويل، ارجع 0
    }
  };

  return (
    <Box
      sx={{
        paddingLeft: {
          xs: "24px",
          md: "0px",
        },
      }}
    >
      {events?.map((event) => {
        const daysAgo = getDaysAgo(event.published_at); // حساب الأيام منذ تاريخ النشر
        return (
          <div
            key={event.id}
            style={{ cursor: "pointer" }}
            onClick={() => {
              handleItemClick(event);
            }}
          >
            <SidebarItem
              imageSrc={event.thumbnail_url}
              title={event.title}
              views="15K" // This is a placeholder. Replace with actual data if available
              daysAgo={daysAgo.toString()} // تحويل إلى string لتطابق النوع في SidebarItem
            />
          </div>
        );
      })}
    </Box>
  );
};

export default Sidebar;
