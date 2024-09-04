import React from "react";
import { Typography } from "@mui/material";
import ArticleContent from "./ArticleContent";

const ArticleSection: React.FC<{ title: string; content: any }> = ({
  title,
  content,
}) => (
  <section>
    <Typography variant="h6"
          sx={{  fontWeight: "bold",
            color:'#262626'

            
           }} // Apply Almarai font here

    >{title}</Typography>
    <ArticleContent content={content} />
    {/* <div dangerouslySetInnerHTML={{ __html: content }} /> */}
  </section>
);

export default ArticleSection;
