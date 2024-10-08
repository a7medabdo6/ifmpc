import React from "react";
import { Typography } from "@mui/material";
import ArticleContent from "./ArticleContent";

const ArticleSection: React.FC<{ title: string; content: any; componentRef:any; }> = ({
  title,
  content,
  componentRef
}) => (
  <section >
    <Typography
      variant="h6"
      sx={{  fontWeight: "bold" ,
        color:'#262626'
      }} // Apply Almarai font here      
      
     
    >
      {title}
    </Typography>
    <ArticleContent content={content} componentRef={componentRef} />
    {/* <div dangerouslySetInnerHTML={{ __html: content }} /> */}
  </section>
);

export default ArticleSection;
