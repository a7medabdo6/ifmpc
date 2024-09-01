// import React from "react";
// import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";
// import { useTranslations } from "next-intl";
// import { useAppSelector } from "@/lib/hooks";
// import { makeStyles } from "@mui/styles";

// const useStyles = makeStyles((theme) => ({
//   content: {
//     padding: "12px",
//   },
//   title: {
//     fontFamily: "Almarai",
//   },
// }));
// interface ArticleContentProps {
//   content: any;
// }

// const ArticleContent: React.FC<ArticleContentProps> = ({ content }) => {
//   const t = useTranslations("share");
//   const classes = useStyles();
//   console.log(content);

//   const pathAfterSlash = useAppSelector((state) => state.path.pathAfterSlash);

//   return (
//     <Box sx={{ padding: "0px" }}>
//       <Typography variant="body1" gutterBottom className={classes.title}>
//         {t("onway")}
//       </Typography>
//       <Typography
//         variant="h6"
//         gutterBottom
//         sx={{ mb: 0 }}
//         className={classes.title}
//       >
//         1- {t("owner")}
//       </Typography>
//       <Typography
//         variant="h6"
//         gutterBottom
//         sx={{ mb: 0 }}
//         className={classes.title}
//       >
//         2- {t("location")}
//       </Typography>
//       <Typography
//         variant="h6"
//         gutterBottom
//         sx={{ mb: 0 }}
//         className={classes.title}
//       >
//         3- {t("Internalization")}
//       </Typography>
//       <Typography
//         variant="body1"
//         gutterBottom
//         sx={{ mb: 2, mt: 2 }}
//         className={classes.title}
//       >
//         {t("following")}
//       </Typography>
//       <Typography variant="h6" gutterBottom className={classes.title}>
//         1- {t("owner")}
//       </Typography>
//       <Typography variant="body1" gutterBottom className={classes.title}>
//         {t("Ownership advantage")}
//       </Typography>
//       <Typography variant="h6" gutterBottom className={classes.title}>
//         2- {t("location")}
//       </Typography>
//       <Typography variant="body1" gutterBottom className={classes.title}>
//         {t("Location advantage")}
//       </Typography>
//       <List sx={{ ml: 4, listStyleType: "disc", pl: 2 }}>
//         <ListItem sx={{ display: "list-item", p: 0 }}>
//           <ListItemText
//             primary={
//               <Typography style={{ fontFamily: "Almarai" }}>
//                 {t("Increased efficiency")}
//               </Typography>
//             }
//             sx={{ textAlign: pathAfterSlash === "ar" ? "right" : "left" }}
//           />
//         </ListItem>
//         <ListItem sx={{ display: "list-item", p: 0 }}>
//           <ListItemText
//             primary={
//               <Typography style={{ fontFamily: "Almarai" }}>
//                 {t("Better resource allocation")}
//               </Typography>
//             }
//             sx={{ textAlign: pathAfterSlash === "ar" ? "right" : "left" }}
//           />
//         </ListItem>
//         <ListItem sx={{ display: "list-item", p: 0 }}>
//           <ListItemText
//             primary={
//               <Typography style={{ fontFamily: "Almarai" }}>
//                 {t("Access to new markets")}
//               </Typography>
//             }
//             sx={{ textAlign: pathAfterSlash === "ar" ? "right" : "left" }}
//           />
//         </ListItem>
//       </List>
//       <Typography variant="h6" gutterBottom className={classes.title}>
//         3- {t("Internalization")}
//       </Typography>
//       <Typography variant="body1" gutterBottom className={classes.title}>
//         {t("Internalisation advantages")}
//       </Typography>
//       <List sx={{ ml: 4, listStyleType: "disc", pl: 2 }}>
//         <ListItem sx={{ display: "list-item", p: 0 }}>
//           <ListItemText
//             primary={
//               <Typography style={{ fontFamily: "Almarai" }}>
//                 {t("Increased efficiency")}
//               </Typography>
//             }
//             sx={{ textAlign: pathAfterSlash === "ar" ? "right" : "left" }}
//           />
//         </ListItem>
//         <ListItem sx={{ display: "list-item", p: 0 }}>
//           <ListItemText
//             primary={
//               <Typography style={{ fontFamily: "Almarai" }}>
//                 {t("Better resource allocation")}
//               </Typography>
//             }
//             sx={{ textAlign: pathAfterSlash === "ar" ? "right" : "left" }}
//           />
//         </ListItem>
//         <ListItem sx={{ display: "list-item", p: 0 }}>
//           <ListItemText
//             primary={
//               <Typography style={{ fontFamily: "Almarai" }}>
//                 {t("Access to new markets")}
//               </Typography>
//             }
//             sx={{ textAlign: pathAfterSlash === "ar" ? "right" : "left" }}
//           />
//         </ListItem>
//         <ListItem sx={{ display: "list-item", p: 0 }}>
//           <ListItemText
//             primary={
//               <Typography style={{ fontFamily: "Almarai" }}>
//                 {t("Access to new markets")}
//               </Typography>
//             }
//             sx={{ textAlign: pathAfterSlash === "ar" ? "right" : "left" }}
//           />
//         </ListItem>
//       </List>
//     </Box>
//   );
// };

// export default ArticleContent;

import React from "react";
import { Box } from "@mui/material";

interface ArticleContentProps {
  content: string;
}

const ArticleContent: React.FC<ArticleContentProps> = ({ content }) => {
  return (
    <Box sx={{ padding: "12px", fontFamily: "Almarai",color:"#262626" }}>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Box>
  );
};

export default ArticleContent;
