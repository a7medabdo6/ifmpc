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
import { formatDate } from "@/components/custom/formatDate";

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
  date: string;
  title: string;
  description: string;
  image?: string | StaticImageData;
  top?: boolean;
}

const ResponsiveImageWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: flex-end;
  max-width: 50%;

  @media (min-width: 768px) {
    max-width: 600px;
  }
`;

interface SectionProps {
  title: string;
  items: Item[];
  withImage?: boolean;
  top?: boolean;
  pathLink?: string;
  borderAll?: boolean;
}

const Section: FC<SectionProps> = ({
  title,
  items,
  withImage,
  top,
  pathLink,
  borderAll = false,
}) => {
  const pathAfterSlash = useAppSelector((state) => state.path.pathAfterSlash);
  const t = useTranslations("UpcomingTrainings");
  const classes = useStyles();

  const sectionStyle: React.CSSProperties = {
    flexDirection: pathAfterSlash === "ar" ? "row-reverse" : "row",
    alignItems: "flex-start",
    paddingLeft: borderAll ? 25 : 0,
    paddingRight: borderAll ? 25 : 0,
    marginBlock: 20,
    paddingBottom: 1,
    borderBottom: "1px solid #CCCBCB ",
    borderTop: borderAll ? "1px solid #CCCBCB " : "unset",
    borderLeft: borderAll ? "1px solid #CCCBCB " : "unset",
    borderRight: borderAll ? "1px solid #CCCBCB " : "unset",
    gap: "150px",
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
              primary={
                <Box
                  sx={{
                    display: "flex",
                    alignItems:
                     "flex-start",
                    flexDirection: top ? "column" : "column-reverse",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems:
                       "flex-start",
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
                      sx={{
                        color: "#606060",
                        fontWeight: pathAfterSlash === "ar" ? 600 : "",
                        fontFamily:
                          pathAfterSlash === "ar"
                            ? "Almarai"
                            : "Source Sans Pro",
                      }}
                      component="span"
                    >
                      {formatDate(item.date)}
                    </Typography>
                  </Box>
                  <Link
                    href={`/${pathAfterSlash}/research/${pathLink}/${item?.id}`}
                    passHref
                  >
                    <Typography
                      variant="body2"
                      color="textPrimary"
                      sx={{
                        marginBlock: "10px",
                        fontWeight: 600,
                        color: "#476B87",
                        fontSize: "18px",
                        cursor: "pointer",
                        fontFamily:
                          pathAfterSlash === "ar"
                            ? "Almarai"
                            : "Source Sans Pro",
                        flexDirection:
                          pathAfterSlash === "ar" && title === "Latest Projects"
                            ? "row-reverse"
                            : "row",
                        display: pathAfterSlash === "ar" ? "flex" : "block",
                        textAlign: pathAfterSlash === "ar" ? "right" : "left", // Default to "left" if not "ar"
                      }}
                      component="div"
                    >
                      {item.title}
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
                    fontFamily:
                      pathAfterSlash === "ar" ? "Almarai" : "Source Sans Pro",
                  }}
                  dangerouslySetInnerHTML={{ __html: item.description.slice(0, 320)  }} // Render HTML
                />
              }
            />
            {withImage && item.image && (
              <Box
                sx={{
                  marginBottom:'10px',

                  width: "100%",
                  maxWidth: { xs: "100%", md: "32%" },
                }}
              >
                <ResponsiveImageWrapper>
                  <Image
                    src={item.image}
                    alt={item.title}
                    style={{ width: "100%" }}
                    width={1200}
                    height={150}
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
