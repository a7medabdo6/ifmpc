import { FC } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Image, { StaticImageData } from "next/image";
import { colors } from "@/utils/colors";
import styled from "styled-components";
import Link from "next/link";
import { useAppSelector } from "@/lib/hooks";
import { useTranslations } from "next-intl";
import { makeStyles } from "@mui/styles";
import { format, parseISO } from "date-fns"; // استيراد الدوال من date-fns

const useStyles = makeStyles((theme) => ({
  content: {
    padding: "12px",
  },
  title: {
    fontFamily: "Almarai",
  },
}));

export interface Item {
  id: any;
  content?: string; // Define as string to hold HTML content
  name?: any;
  created?: string; // تعديل النوع ليكون string
  date: string;
  title: string;
  description: string;
  image?: string | StaticImageData;
  top?: boolean;
}

const ResponsiveImageWrapper = styled.div`
  width: 100%;
  position: relative;
  height: 150px;

  @media (min-width: 768px) {
    height: 200px;
    max-width: 600px;
    margin-left: "10px";
  }
`;

interface SectionProps {
  content?: any;
  name?: any;
  created?: any;
  title: string;
  items: Item[];
  withImage?: boolean;
  top?: boolean;
  pathLink?: string;
}

const Section: FC<SectionProps> = ({
  content,
  name,
  created,
  title,
  items,
  withImage,
  top,
  pathLink,
}) => {
  const pathAfterSlash = useAppSelector((state) => state.path.pathAfterSlash);
  const t = useTranslations("UpcomingTrainings");
  const classes = useStyles();

  const sectionStyle: React.CSSProperties = {
    flexDirection: pathAfterSlash === "ar" ? "row-reverse" : "row",
    alignItems: "flex-start",
    padding: title === "Upcoming Trainings" ? 16 : 0,
    marginBottom: 16,
    borderBottom: "1px solid #CCCBCB",
    paddingBottom: 1,
  };

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      day: "2-digit",
      month: "long",
      year: "numeric",
    };

    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString("en-GB", options);

    // ترتيب الأجزاء بالشكل المطلوب
    const [day, month, year] = formattedDate.split(" ");
    return `${day} - ${month} - ${year}`;
  };

  return (
    <Box>
      <List>
        {items.map((item, index) => (
          <ListItem
            key={index}
            style={sectionStyle}
            sx={{
              display: {
                xs: "block",
                sm: "block",
                md: "flex",
                lg: "flex",
                xl: "flex",
              },
            }}
          >
            <ListItemText
              sx={{ direction: pathAfterSlash === "ar" ? "rtl" : "ltr" }}
              primary={
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: top ? "column" : "column-reverse",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection:
                        pathAfterSlash === "ar" && title === "Latest Projects"
                          ? "row-reverse"
                          : "row",
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: "35px" }}>
                      <AccessTimeIcon
                        sx={{
                          color: colors.active,
                          marginLeft: pathAfterSlash === "ar" ? "13px" : "0px",
                        }}
                      />
                    </ListItemIcon>
                    <Typography
                      className={classes.title}
                      sx={{
                        color: "#262626",
                        fontWeight: pathAfterSlash === "ar" ? 600 : "",
                      }}
                      component="span"
                    >
                      {formatDate(item?.created || "")}
                    </Typography>
                  </Box>
                  <Link
                    href={`/${pathAfterSlash}/research/${pathLink}/${item?.id}`}
                    passHref
                  >
                    <Typography
                      variant="body2"
                      color="textPrimary"
                      className={classes.title}
                      sx={{
                        fontWeight: 600,
                        color: "#476B87",
                        fontSize: "18px",
                        cursor: "pointer",
                        flexDirection:
                          pathAfterSlash === "ar" && title === "Latest Projects"
                            ? "row-reverse"
                            : "row",
                        display: pathAfterSlash === "ar" ? "flex" : "block",
                      }}
                      component="div"
                    >
                      {item?.name}
                    </Typography>
                  </Link>
                </Box>
              }
              secondary={
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="div"
                  sx={{
                    marginTop:'5px',
                    textAlign:
                      pathAfterSlash === "ar" && title !== "Latest Projects"
                        ? "initial !important"
                        : pathAfterSlash === "ar" && title === "Latest Projects"
                        ? "right"
                        : "left",
                  }}
                  className={classes.title}
                  dangerouslySetInnerHTML={{ __html: item?.content?.slice(0, 320)  || "" }}
                />
              }
            />
            {withImage && item.image && (
              <Box
                sx={{
                  marginBottom:'10px',

                  width: "100%",
                  marginLeft: "20px",
                  maxWidth: { xs: "300px", md: "32%" },
                }}
              >
                <ResponsiveImageWrapper>
                  <Image
                    src={item.image}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </ResponsiveImageWrapper>
              </Box>
            )}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Section;
