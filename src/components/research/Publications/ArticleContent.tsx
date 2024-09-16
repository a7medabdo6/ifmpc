import React from "react";
import { Box } from "@mui/material";

interface ArticleContentProps {
  content: string;
  componentRef: any;
}

const ArticleContent: React.FC<ArticleContentProps> = ({
  content,
  componentRef,
}) => {
  return (
    <Box
      ref={componentRef}
      sx={{ padding: "12px", color: "#262626" }}
      id="content-to-print"
    >
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Box>
  );
};

export default ArticleContent;
