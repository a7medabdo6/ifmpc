

import React from "react";
import { Box } from "@mui/material";

interface ArticleContentProps {
  content: string;
}

const ArticleContent: React.FC<ArticleContentProps> = ({ content }) => {
  return (
    <Box sx={{ padding: "12px", color:"#262626" }}>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Box>
  );
};

export default ArticleContent;
