import React from "react";
import { Typography, Box, List, ListItem } from "@mui/material";
import { useTranslations } from "next-intl";
import { useAppSelector } from "@/lib/hooks";
import ModalCom from "../ModalCom";
import CustomButton from "../custom/CustomButton";
import { colors } from "@/utils/colors";

const WhoAreWe: React.FC = () => {
  const t = useTranslations("whoareyou");
  const pathAfterSlash = useAppSelector((state) => state.path.pathAfterSlash);
  const isArabic = pathAfterSlash === "ar";

  return (
    <Box
      sx={{
        padding: "2rem 0",
        width: {
          xs: "90%",
          md: "75%",
        },
        marginLeft: {
          xs: "24px",
          md: "130px",
        },
        marginRight: {
          xs: "24px",
          md: "130px",
        },
        color: "#262626",
      }}
    >
      <Box sx={{ marginBottom: "2rem", marginTop: "2rem" }}>
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            fontWeight: 600,
            fontSize: "22px",
            color: "#262626",
            textAlign: isArabic ? "right" : "left",
          }}
        >
          {t("Who Are We")}
        </Typography>
      </Box>
      <Box
        sx={{
          marginBottom: "2rem",
          flexDirection: "column",
          alignItems: isArabic ? "flex-end" : "flex-start",
          display: "flex",
        }}
      >
        <ModalCom
          pdfUrl={"../road.pdf"}
          component={
            <CustomButton
              customColor="white"
              width="175px"
              height="38px"
              backgroundColor={colors.active}
              borderRadius="8px"
            >
              {t("Our Vision")}
            </CustomButton>
          }
        />

        <Typography
          paragraph
          sx={{
            maxWidth: "782px",
            color: "#262626",
            marginTop: "10px",
            textAlign: isArabic ? "right" : "left",
          }}
        >
          {t("Why?")}
        </Typography>
      </Box>
      <Box sx={{ marginBottom: "2rem" }}>
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            fontWeight: 600,
            fontSize: "18px",
            color: "#262626",
            textAlign: isArabic ? "right" : "left",
          }}
        >
          {t("Our Mission")}
        </Typography>
        <Typography
          paragraph
          sx={{
            maxWidth: "100%",
            color: "#262626",
            textAlign: isArabic ? "right" : "left",
          }}
        >
          {t("IFMPC strives")}
        </Typography>
        <List
          sx={{
            padding: 0,
            marginLeft: isArabic ? "0px" : "45px",
            marginRight: isArabic ? "45px" : "0px",
          }}
        >
          <ListItem
            sx={{
              display: "flex",
              alignItems: "flex-start",
              paddingLeft: 0,
              paddingRight: 0,
              position: "relative",
              "&::before": {
                content: '"•"',
                position: "absolute",
                left: isArabic ? null : "-20px",
                right: isArabic ? "-20px" : null,
                top: "9px",
                fontSize: "20px",
                color: "#262626",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                width: "100%",
                marginBottom: "0px",
                flexDirection: isArabic ? "row-reverse" : "row",

                textAlign: isArabic ? "right" : "left",
              }}
            >
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "14px",
                  color: "#262626",
                  marginRight: "8px",
                  textWrap: "nowrap",
                }}
              >
                {t("Private Sector : ")}
              </Typography>
              <Typography
                sx={{
                  color: "#262626",
                  textAlign: isArabic ? "right" : "left",
                }}
              >
                {t("Private Sectordes")}
              </Typography>
            </Box>
          </ListItem>
          <ListItem
            sx={{
              display: "flex",
              alignItems: "flex-start",
              paddingLeft: 0,
              paddingRight: 0,
              position: "relative",
              "&::before": {
                content: '"•"',
                position: "absolute",
                left: isArabic ? null : "-20px",
                right: isArabic ? "-20px" : null,
                top: "9px",
                fontSize: "20px",
                color: "#262626",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: isArabic ? "row-reverse" : "row",
                textAlign: isArabic ? "right" : "left",

                width: "100%",
                marginBottom: "0px",
              }}
            >
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "14px",
                  color: "#262626",
                  marginRight: "8px",
                  textWrap: "nowrap",
                }}
              >
                {t("Public Sector : ")}
              </Typography>
              <Typography
                sx={{
                  color: "#262626",
                  textAlign: isArabic ? "right" : "left",
                }}
              >
                {t("Public Sectordes")}
              </Typography>
            </Box>
          </ListItem>
        </List>
      </Box>
      <Box sx={{ marginBottom: "2rem" }}>
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            fontWeight: 600,
            fontSize: "18px",
            color: "#262626",
            textAlign: isArabic ? "right" : "left",
          }}
        >
          {t("Our Approach")}
        </Typography>
        <Typography
          paragraph
          sx={{
            textAlign: isArabic ? "right" : "left",
            color: "#262626",
          }}
        >
          {t("How do we")}
        </Typography>
        <List
          sx={{
            padding: 0,
            marginLeft: isArabic ? "0px" : "45px",
            marginRight: isArabic ? "45px" : "0px",
          }}
        >
          <ListItem
            sx={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: isArabic ? "flex-end" : "flex-start",

              paddingLeft: 0,
              paddingRight: 0,
              position: "relative",

              "&::before": {
                content: '"•"',
                position: "absolute",
                left: isArabic ? null : "-20px",
                right: isArabic ? "-20px" : null,
                top: "9px",
                fontSize: "20px",
                color: "#262626",
              },
            }}
          >
            <Box
              sx={{
                maxWidth: "782px",
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: isArabic ? "row-reverse" : "row",
                textAlign: isArabic ? "right" : "left",
              }}
            >
              <Typography
                sx={{
                  color: "#262626",
                }}
              >
                <span
                  style={{
                    fontWeight: 600,
                    color: "#262626",
                    textWrap: "nowrap",
                  }}
                >
                  {" "}
                  {t("Research")}
                </span>
                {t("Researchdes")}
              </Typography>
            </Box>
          </ListItem>
          <ListItem
            sx={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: isArabic ? "flex-end" : "flex-start",

              paddingLeft: 0,
              paddingRight: 0,
              position: "relative",
              "&::before": {
                content: '"•"',
                position: "absolute",
                left: isArabic ? null : "-20px",
                right: isArabic ? "-20px" : null,
                top: "9px",
                fontSize: "20px",
                color: "#262626",
              },
            }}
          >
            <Box
              sx={{
                maxWidth: "782px",
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: isArabic ? "row-reverse" : "row",
                textAlign: isArabic ? "right" : "left",
              }}
            >
              <Typography
                sx={{
                  fontWeight: 600,
                  color: "#262626",
                  textWrap: "nowrap",
                }}
              >
                {" "}
                {t("Training")}
              </Typography>
              <Typography>{t("Trainingdes")}</Typography>
            </Box>
          </ListItem>
          <ListItem
            sx={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: isArabic ? "flex-end" : "flex-start",
              paddingLeft: 0,
              paddingRight: 0,
              position: "relative",
              "&::before": {
                content: '"•"',
                position: "absolute",
                left: isArabic ? null : "-20px",
                right: isArabic ? "-20px" : null,
                top: "9px",
                fontSize: "20px",
                color: "#262626",
              },
            }}
          >
            <Box
              sx={{
                maxWidth: "782px",
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: isArabic ? "row-reverse" : "row",
                textAlign: isArabic ? "right" : "left",
              }}
            >
              <Typography
                sx={{
                  fontWeight: 600,
                  color: "#262626",
                  textWrap: "nowrap",
                }}
              >
                {" "}
                {t("Experts")}
              </Typography>
              <Typography
                sx={{
                  color: "#262626",
                }}
              >
                {t("Expertsdes")}
              </Typography>
            </Box>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default WhoAreWe;
