// import React from "react";
// import Image from "next/image";
// import {
//   Box,
//   Typography,
//   List,
//   ListItem,
// } from "@mui/material";
// import image from '../../../../public/assets/images/nat.png'
// import { useTranslations } from "next-intl";
// import { useAppSelector } from "@/lib/hooks";
// import { makeStyles } from "@mui/styles";

// const useStyles = makeStyles((theme) => ({
//   content: {
//     padding: "12px",
//   },
//   title: {
//   },
//   listText: {
//   },
// }));

// const ArticleContent: React.FC = () => {
//   const t = useTranslations("share");
//   const classes = useStyles();

//   const pathAfterSlash = useAppSelector((state) => state.path.pathAfterSlash);
//   return (
//     <Box sx={{ padding: "0px" }}>
//       <Typography variant="body1" gutterBottom className={classes.title}>
//         {t("onway")}
//       </Typography>
//       <Typography variant="h6" gutterBottom sx={{ mb: 0 }} className={classes.title}>
//         1- {t("owner")}
//       </Typography>
//       <Typography variant="h6" gutterBottom sx={{ mb: 0 }} className={classes.title}>
//         2- {t("location")}
//       </Typography>
//       <Typography variant="h6" gutterBottom sx={{ mb: 0 }} className={classes.title}>
//         3- {t("Internalization")}
//       </Typography>
//       <Typography variant="body1" gutterBottom sx={{ mb: 2, mt: 2 }} className={classes.title}>
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
//       <List sx={{ ml: 4, listStyleType: "disc", pl: 2,marginRight:'24px'  }}>
//         <ListItem sx={{ display: "list-item", p: 0 }}>
//           <Typography variant="body1" className={classes.listText} sx={{textAlign:pathAfterSlash === 'ar' ? 'right' : 'left'}}>
//             {t("Increased efficiency")}
//           </Typography>
//         </ListItem>
//         <ListItem sx={{ display: "list-item", p: 0 }}>
//           <Typography variant="body1" className={classes.listText} sx={{textAlign:pathAfterSlash === 'ar' ? 'right' : 'left'}}>
//             {t("Better resource allocation")}
//           </Typography>
//         </ListItem>
//         <ListItem sx={{ display: "list-item", p: 0 }}>
//           <Typography variant="body1" className={classes.listText} sx={{textAlign:pathAfterSlash === 'ar' ? 'right' : 'left'}}>
//             {t('Access to new markets')}
//           </Typography>
//         </ListItem>
//       </List>
//       <Typography variant="h6" gutterBottom className={classes.title}>
//         3- {t("Internalization")}
//       </Typography>
//       <Typography variant="body1" gutterBottom className={classes.title}>
//         {t("Internalisation advantages")}
//       </Typography>
//       <Box
//         sx={{
//           display: "flex",
//           alignItems: "flex-start", // Align items to the start
//           justifyContent: "center", // Center content horizontally
//           mb: 2
//         }}
//       >
//         <Image
//           src={image} // Update the path to your image
//           alt="Descriptive alt text"
//           layout="responsive" // Ensure the image is responsive
//           width={600} // Adjust width to the desired aspect ratio
//           height={400} // Adjust height to the desired aspect ratio
//         />
//       </Box>
//       <List sx={{ ml: 4, listStyleType: "disc", pl: 2,marginRight:'24px' }}>
//         <ListItem sx={{ display: "list-item", p: 0 }}>
//           <Typography variant="body1" className={classes.listText} sx={{textAlign:pathAfterSlash === 'ar' ? 'right' : 'left'}}>
//             {t("Increased efficiency")}
//           </Typography>
//         </ListItem>
//         <ListItem sx={{ display: "list-item", p: 0 }}>
//           <Typography variant="body1" className={classes.listText} sx={{textAlign:pathAfterSlash === 'ar' ? 'right' : 'left'}}>
//             {t("Better resource allocation")}
//           </Typography>
//         </ListItem>
//         <ListItem sx={{ display: "list-item", p: 0 }}>
//           <Typography variant="body1" className={classes.listText} sx={{textAlign:pathAfterSlash === 'ar' ? 'right' : 'left'}}>
//             {t('Access to new markets')}
//           </Typography>
//         </ListItem>
//         <ListItem sx={{ display: "list-item", p: 0 }}>
//           <Typography variant="body1" className={classes.listText} sx={{textAlign:pathAfterSlash === 'ar' ? 'right' : 'left'}}>
//             {t('Access to new markets')}
//           </Typography>
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
      id="content-to-printProject"
    >
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Box>
  );
};

export default ArticleContent;
