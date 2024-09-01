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
import Image from "next/image";
import { colors } from "@/utils/colors";
import styled from "styled-components";
import Link from "next/link";
import { useAppSelector } from "@/lib/hooks";
import { useTranslations } from "next-intl";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: "Almarai",
  },
}));

const ResponsiveImageWrapper = styled.div`
  width: 100%;
  position: relative;
  height: 150px;

  @media (min-width: 768px) {
    height: 200px;
    max-width: 600px;
  }
`;

interface Item {
  id: number;
  created: string;
  modified: string;
  name: string;
  name_en: string;
  name_ar: string;
  content: string;
  content_en: string;
  content_ar: string;
  image?: string;
  popularity_count: number;
  category: number;
  author: number[];
  tags: number[];
}

interface SectionProps {
  title: string;
  items: Item[];
  withImage?: boolean;
  top?: boolean;
  pathLink?: string;
}

// دالة لتحويل التاريخ
const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(dateString).toLocaleDateString("en-US", options);
};

const Section: FC<SectionProps> = ({
  title,
  items,
  withImage,
  top,
  pathLink,
}) => {
  const pathAfterSlash = useAppSelector((state) => state.path.pathAfterSlash);
  const classes = useStyles();
  const t = useTranslations("UpcomingTrainings");

  const sectionStyle: React.CSSProperties = {
    flexDirection: pathAfterSlash === "ar" ? "row" : "row",
    alignItems: "flex-start",
    padding: title === "Upcoming Trainings" ? 16 : 0,
    marginBottom: 16,
    borderBottom: top ? undefined :"1px solid #CCCBCB",
    paddingBottom: 1,
    // border: top ? undefined : "1px solid #CCCBCB",
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
              sx={{
                direction: pathAfterSlash === "ar" ? "rtl" : "ltr",
                marginRight:pathAfterSlash === "ar" ? '0px' : "80px",
              }}
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
                      {formatDate(item.created)}
                    </Typography>
                  </Box>
                  <Link href={`/en/research/${pathLink}/${index}`} passHref>
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
                      {item.name}
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
                    textAlign:
                      pathAfterSlash === "ar" && title !== "Latest Projects"
                        ? "initial !important"
                        : pathAfterSlash === "ar" && title === "Latest Projects"
                        ? "right"
                        : "left",
                  }}
                  className={classes.title}
                  dangerouslySetInnerHTML={{ __html: item.content }} // عرض المحتوى كـ HTML
                />
              }
            />
            {withImage && item.image && (
              <Box
                sx={{
                  width: "100%",
                  marginBottom:'20px',
                  maxWidth: { xs: "300px", md: "32%" },
                }}
              >
                <ResponsiveImageWrapper>
                  <Image
                    src={item.image}
                    alt={item.name}
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
