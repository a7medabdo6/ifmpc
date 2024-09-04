// "use client";
// import React, { useState, useEffect } from "react";
// import ImageContainer from "@/components/training/ImageContainer";
// import Content from "@/components/training/Content";
// import HowItWorks from "@/components/training/HowItWorks";
// import { fetchTrainingLast } from "@/services/api";

// import { Grid, Box, Typography } from "@mui/material";
// import { makeStyles } from "@mui/styles";
// import Navbar from "@/components/Navbar";
// import imageSrc from "../../../../public/assets/images/Rectangle.png";
// import Footer from "@/components/Footer";
// import NewsletterSubscription from "@/components/NewsletterSubscription";
// import { useTranslations } from "next-intl";
// import { useAppSelector } from "@/lib/hooks";
// import Image from "next/image";

// const useStyles = makeStyles((theme) => ({
//   content: {
//     fontWeight: 400,
//   },
//   bigContainer: {
//     maxWidth: "100%",
//     backgroundColor: "#ffffff",
//   },
//   title: {
//     margin: 24,
//     marginLeft: "0px !important",
//     backgroundColor: "#ffffff",
//   },
// }));

// const Page = () => {
//   const classes = useStyles();
//   const t = useTranslations("Publications");
//   const pathAfterSlash = useAppSelector((state) => state.path.pathAfterSlash);
//   const [trainingLast, setTrainingLast] = useState([]);
//   const { data, status, error } = useAppSelector((state) => state.home);

//   console.log(trainingLast);

//   useEffect(() => {
//     const getMostRecent = async () => {
//       const data = await fetchTrainingLast();
//       setTrainingLast(data);
//     };

//     getMostRecent();
//   }, []);
//   return (
//     <Box className={classes.bigContainer}>
//       <Navbar />

//       <Grid
//         container
//         spacing={0}
//         sx={{
//           paddingLeft: { xs: "24px", md: "130px" },
//           paddingRight: { xs: "24px", md: "130px" },
//           flexDirection: { xs: "column", md: "row" },
//           mt: 5,
//         }}
//         style={{
//           marginInline: "auto",
//           marginTop: "80px",
//           width: "auto",
//         }}
//       >

//         <Grid item xs={12} md={12} className={classes.content}>
//           <Box className={classes.title}>
//             <Typography
//               variant="h5"
//               style={{ color: "#262626", fontWeight: 600 }}
//             >
//               Training Features
//             </Typography>
//           </Box>
//         </Grid>
//         <Grid item xs={12} md={6} className={classes.content}>
//           <Content
//             title="Innovative Methods"
//             des="IFPMC uses the latest techniques and methods to ensure cutting-edge learning."
//           />
//           <Content
//             title="Innovative Methods"
//             des="IFPMC uses the latest techniques and methods to ensure cutting-edge learning."
//           />
//           <Content
//             title="Innovative Methods"
//             des="IFPMC uses the latest techniques and methods to ensure cutting-edge learning."
//           />
//           <Content
//             title="Innovative Methods"
//             des="IFPMC uses the latest techniques and methods to ensure cutting-edge learning."
//           />
//           <Content
//             title="Innovative Methods"
//             des="IFPMC uses the latest techniques and methods to ensure cutting-edge learning."
//           />
//         </Grid>
//         <Grid
//           item
//           xs={12}
//           md={6}
//           sx={{ display: "flex", justifyContent: "flex-end" }}
//         >
//           {/* Replace with your image component */}
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "flex-end",
//               width: "80%",
//               height: "80%",
//             }}
//           >
//             <Image
//               layout="responsive"
//               width={100} // النسبة المئوية لا تهم هنا، قيمة العرض يمكن أن تكون صغيرة
//               height={100} // النسبة المئوية لا تهم هنا، قيمة الارتفاع يمكن أن تكون صغيرة
//               src={imageSrc}
//               alt="ImageContainer"
//             />
//           </div>
//         </Grid>
//       </Grid>

//       <HowItWorks />
//       <NewsletterSubscription HomeData={data} />
//       <Footer HomeData={data} />
//     </Box>
//   );
// };

// export default Page;

"use client";
import React, { useState, useEffect } from "react";
import ImageContainer from "@/components/training/ImageContainer";
import Content from "@/components/training/Content";
import HowItWorks from "@/components/training/HowItWorks";
import { fetchTrainingLast } from "@/services/api";

import { Grid, Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Navbar from "@/components/Navbar";
import imageSrc from "../../../../public/assets/images/Rectangle.png";
import Footer from "@/components/Footer";
import NewsletterSubscription from "@/components/NewsletterSubscription";
import { useTranslations } from "next-intl";
import { useAppSelector } from "@/lib/hooks";
import Image from "next/image";
import LoadingIndicator from "@/components/custom/LoadingIndicator";
import ErrorComponent from "@/components/custom/ErrorComponent";
// تعريف الواجهة لتحديد شكل البيانات المتوقعة
interface TrainingData {
  id: number;
  created: string;
  modified: string;
  title: string;
  title_en: string;
  title_ar: string;
  image: string;
  description: string;
  description_en: string;
  description_ar: string;
}

const useStyles = makeStyles((theme) => ({
  content: {
    fontWeight: 400,
  },
  bigContainer: {
    maxWidth: "100%",
    backgroundColor: "#ffffff",
  },
  title: {
    margin: 24,
    marginLeft: "0px !important",
    marginRight: "0px !important",

    backgroundColor: "#ffffff",
  },
}));

const Page = () => {
  const classes = useStyles();
  const t = useTranslations("Training");
  const pathAfterSlash = useAppSelector((state) => state.path.pathAfterSlash);
  const [trainingLast, setTrainingLast] = useState<TrainingData | null>(null);
  const { data } = useAppSelector((state) => state.home);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
console.log(trainingLast);

  const lng = pathAfterSlash;
  useEffect(() => {
    const loadTRaining = async () => {
      try {
        const data = await fetchTrainingLast(lng);
        setTrainingLast(data.training); // تأكد من أن البيانات المسترجعة تتطابق مع الواجهة
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unexpected error occurred.");
        }
      } finally {
        setLoading(false);
      }
    };

    loadTRaining();
  }, [lng]);


  return (
    <Box className={classes.bigContainer}>
      <Navbar />

      <Grid
        container
        spacing={0}
        sx={{
          paddingLeft: { xs: "24px", md: "130px" },
          paddingRight: { xs: "24px", md: "130px" },
          flexDirection: { xs: "column", md: "row" },
          mt: 5,
        }}
        style={{
          marginInline: "auto",
          marginTop: "80px",
          width: "auto",
        }}
      >
        <Grid item xs={12} md={12} className={classes.content} sx={{textAlign:pathAfterSlash === 'ar' ? "end" : "start"}}>
          <Box className={classes.title}>
            <Typography
              variant="h5"
              style={{ color: "#262626", fontWeight: 600 ,


              }}
            >
              {t("Training Features")}
              
            </Typography>
          </Box>
        </Grid>
        <Box  sx={{width:'100%',
        display:'flex',
          flexDirection:pathAfterSlash === 'ar' ? 'row-reverse' :'row'
        }}>
        <Grid item xs={12} md={6} className={classes.content}>
          {trainingLast && (
            <Content
              title={trainingLast.title}
              des={
                <div
                  dangerouslySetInnerHTML={{ __html: trainingLast.description }}
                />
              }
            />
          )}
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: "flex", justifyContent:pathAfterSlash === 'ar' ? 'flex-start' : "flex-end" }}
        >
          {/* Replace with your image component */}
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              width: "80%",
              height: "80%",
            }}
          >
            <Image
              layout="responsive"
              width={100}
              height={100}
              src={trainingLast?.image || imageSrc} // Provide a default image path
              alt="ImageContainer"
            />
          </div>
        </Grid>
        </Box>
        
      </Grid>

      <HowItWorks />
      <NewsletterSubscription HomeData={data} />
    </Box>
  );
};

export default Page;
