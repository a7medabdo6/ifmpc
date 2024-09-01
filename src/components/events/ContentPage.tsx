// components/ContentPage.tsx
import React from "react";
import Image from "next/image";
import {
  Box,
  Typography,
  Container,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import imageSrc1 from "../../../public/assets/images/lifeframe.png";
import { makeStyles } from "@mui/styles";
import VideoPlayer from "../custom/VideoPlayer"; // Adjust the path if necessary

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "24px",
    paddingTop: "0px !important",
    // width: "90%",
  },
  bigContainer: {
    maxWidth: "100%",
    backgroundColor: "#ffffff",
  },
  small: {
    color: "#262626",
    marginBlock: 10,
  },
  paragraph: {
    color: "#262626",
    marginBlock: 20,
    width: "95%",
  },
  headers: {
    color: "black",
    fontWeight: 600,
  },
  Mainheaders: {
    color: "black",
    fontWeight: "bold",
    fontSize: "17px",
  },
  image: {
    width: "100%",
    height: "auto",
  },
}));
interface ContentPageProps {
  videoLink?: string | null; // تعديل هنا ليشمل `null`
  firstDescription?: string | null; // تعديل هنا ليشمل `null`
}
const ContentPage: React.FC<ContentPageProps> = ({
  videoLink,
  firstDescription,
}) => {
  const classes = useStyles();
  const videoUrl = videoLink || ""; // استخدام القيمة الافتراضية

  return (
    <Box className={classes.container}>
      <Box mb={4} position="relative">
        {" "}
        {/* Aspect ratio 16:9 */}
        <VideoPlayer videoSrc={videoUrl} />
        {/* <Image
          className={classes.image}
          src={imageSrc1}
          alt="Description of the image"
        /> */}
      </Box>
      <Typography variant="body1" className={classes.paragraph} gutterBottom>
        {firstDescription}
      </Typography>
      <Typography
        className={classes.headers}
        gutterBottom
        sx={{ mb: 0, fontSize: "15px" }}
      >
        1- Ownership advantage
      </Typography>
      <Typography
        className={classes.headers}
        gutterBottom
        sx={{ mb: 0, fontSize: "15px" }}
      >
        2- Location advantages
      </Typography>
      <Typography
        className={classes.headers}
        gutterBottom
        sx={{ mb: 0, fontSize: "15px" }}
      >
        3- Internalization advantages.
      </Typography>
      <Typography
        variant="body1"
        className={classes.paragraph}
        gutterBottom
        sx={{ mb: 2, mt: 2 }}
      >
        The following sections discuss these three areas in greater detail.
      </Typography>
      <Typography variant="h5" className={classes.Mainheaders} gutterBottom>
        1- Ownership advantage
      </Typography>
      <Typography variant="body1" className={classes.paragraph} gutterBottom>
        Ownership advantage refers to certain firm-specific advantages that
        generate a profit or competitive advantage to the firm, allowing it to
        overcome liabilities of foreignness. These firm-specific advantages must
        be transferable across borders, which allows the MNE to become
        competitive despite the challenges it may face when competing in a
        foreign country. Examples of ownership advantage include: The ownership
        of firm-specific assets and technology that can be used abroad. The
        company brand, which is transferable across borders. Managerial
        knowledge and experience. Company culture, such a creating a learning
        environment; and Organisational structures, including the capacity to
        innovate and change. For example, the unique technical knowledge and
        managerial structures of Volkswagen (VW) have allowed the firm to
        successfully compete abroad by supplying cars that are popular in
        different continents and countries. IKEA’s unique style of flat-packed
        furniture has also proved to have global appeal, allowing it to compete
        in foreign markets where it is at a natural disadvantage due to
        liabilities of foreignness.
      </Typography>

      <Typography variant="h5" className={classes.Mainheaders} gutterBottom>
        2- Location advantage
      </Typography>
      <Typography variant="body1" className={classes.paragraph} gutterBottom>
        Location advantage refers to advantages that can be gained from
        combining the resources of the firm (ownership advantages) with the
        resources available in the host economy. Thus, FDI allows firms access
        to profitable resources or skills they would not have access to within
        their home market. Location advantages can include: Access to skilled
        labour. New or rapidly expanding product markets. Natural resources; and
        Government incentive schemes designed to encourage FDI. Locating
        operations in a foreign market can allow a firm to overcome several
        obstacles, including government protectionist policies and
        transportation costs, while also giving it the advantage of being close
        to the customer base. The location of these unique advantages will
        determine where the firm chooses to establish operations abroad. For
        example, Apple has fragmented its supply chain to take advantage of low
        wages in China. Agglomeration as a form of location advantage:
        Agglomeration refers to the clustering of similar businesses or
        industries in the same location. Agglomeration is considered a location
        advantage for several reasons. Firstly, agglomeration results in
        knowledge spill overs and the clustering of a skilled labour force in
        one region. The region may also develop a group of specialised suppliers
        who can service competing businesses. This has been the case in San
        Francisco and Silicon Valley, which have become regional hubs for the
        technology industry.
      </Typography>
      <List sx={{ ml: 4, listStyleType: "disc", pl: 2 }}>
        <ListItem className={classes.small} sx={{ display: "list-item", p: 0 }}>
          <ListItemText
            className={classes.small}
            primary="Increased efficiency"
          />
        </ListItem>
        <ListItem className={classes.small} sx={{ display: "list-item", p: 0 }}>
          <ListItemText
            className={classes.small}
            primary="Better resource allocation"
          />
        </ListItem>
        <ListItem className={classes.small} sx={{ display: "list-item", p: 0 }}>
          <ListItemText
            className={classes.small}
            primary="Access to new markets"
          />
        </ListItem>
      </List>
      <Typography variant="h5" className={classes.Mainheaders} gutterBottom>
        3- Internalisation advantage
      </Typography>
      <Typography variant="body1" className={classes.paragraph} gutterBottom>
        Internalisation advantages occur when it is more beneficial for a firm
        to establish its own production and sales operations in a foreign
        location as opposed to exporting or licensing their products to the host
        economy for instance, a firm may have acquired the necessary capital and
        assets that makes it profitable for them to control and manage the
        entire production process instead of outsourcing production to local
        manufacturers. Internalisation, therefore, allows a firm greater control
        of firm-specific knowledge and management skills, replacing external
        market relationships with internal supply processes. Nevertheless, to
        understand the advantages of internalisation, it is necessary to
        understand the importance of transaction costs. This section will first
        examine the importance of transaction costs and the cost of using the
        market, before examining the advantages of internalisation. Finally,
        this section will investigate some of the disadvantages of
        internalisation. Transaction costs Bargaining. Searching for appropriate
        trading partnerships. Policing, and ensuring contracts are enforced.
        Establishing terms, specifications, and prices. Due diligence.
      </Typography>
      <List sx={{ ml: 4, listStyleType: "disc", pl: 2 }}>
        <ListItem className={classes.small} sx={{ display: "list-item", p: 0 }}>
          <ListItemText primary="Increased efficiency" />
        </ListItem>
        <ListItem className={classes.small} sx={{ display: "list-item", p: 0 }}>
          <ListItemText primary="Better resource allocation" />
        </ListItem>
        <ListItem className={classes.small} sx={{ display: "list-item", p: 0 }}>
          <ListItemText primary="Access to new markets" />
        </ListItem>
        <ListItem className={classes.small} sx={{ display: "list-item", p: 0 }}>
          <ListItemText primary="Access to new markets" />
        </ListItem>
      </List>
    </Box>
  );
};

export default ContentPage;
