import React from "react";
import {
  Typography,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Avatar,
  Box,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTranslations } from "next-intl";
import { useAppSelector } from "@/lib/hooks";
import Image from "next/image";
import imageDownload from "../../../../public/assets/images/download.png";
import imageShare from "../../../../public/assets/images/shareIcon.png";
import { LinkedinShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import PrintOutlinedIcon from "@mui/icons-material/PrintOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Triangle from "./Triangle"; // Import the Triangle component
import XIcon from "@mui/icons-material/X";

const useStyles = makeStyles({
  subtitle: {
    color: "#476B87",
  },
  iconWithText: {
    paddingRight: "14px",
    paddingTop: "0px",
    display: "flex",
    alignItems: "center",
    gap: "5px",
    position: "relative",
    "@media (min-width: 960px)": {
      paddingTop: "0px !important",
    },
  },
  active: {
    border: "2px solid #476B87",
    borderRadius: "4px",
    "& .MuiTypography-root": {
      color: "#476B87",
    },
    "& .MuiSvgIcon-root": {
      color: "#476B87",
    },
  },
  container: {
    display: "flex",
    paddingTop: "50px",
    paddingBottom: "50px",
  },
  menuItem: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  shareText: {
    display: "flex",
    alignItems: "center",
    gap: "5px",
    position: "relative",
  },
  menu: {
    top: "10px",
    "& .MuiPaper-root": {
      position: "relative",
    },
  },
  avatarContainer: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
  },
  title: {},
});

interface HeaderProps {
  handleDownloadPDF: () => void;
  onePublication: any;
  handlePrint: any;
}

const Header: React.FC<HeaderProps> = ({
  handleDownloadPDF,
  onePublication,
  handlePrint,
}) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [activeIcon, setActiveIcon] = React.useState<string | null>(null);
  const t = useTranslations("share");

  const pathAfterSlash = useAppSelector((state) => state.path.pathAfterSlash);
  const open = Boolean(anchorEl);

  const handleClick = (
    event: React.MouseEvent<HTMLElement>,
    iconName: string
  ) => {
    setAnchorEl(event.currentTarget);
    setActiveIcon(iconName);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setActiveIcon(null);
  };

  // Define the URL to share
  const shareUrl = window.location.href;

  return (
    <header>
      <Grid
        container
        spacing={2}
        sx={{
          direction: pathAfterSlash === "ar" ? "rtl" : "ltr",
          paddingRight: {
            xs: "0px",
            md: "0px",
          },
        }}
      >
        <Grid
          item
          xs={12}
          md={9}
          sx={{
            paddingRight: {
              xs: "0px",
              md: "0px",
            },
          }}
        >
          <Typography variant="h4" className={classes.title} sx={{ color: '#262626' }}>
            {onePublication?.name}
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          md={9}
          className={classes.container}
          direction={{ xs: "column", md: "row" }}
          alignItems={{ xs: "flex-start", md: "center" }}
        >
          <Grid item xs={12} md={9} display="flex">
            <Box className={classes.avatarContainer} sx={{
              position: 'relative', display: 'flex', alignItems: 'center', marginRight: pathAfterSlash === 'en' ? "15px" : '68px', marginLeft: pathAfterSlash === 'ar' ? '15px' : '0px'
            }}>
              {onePublication?.author.map((author: any, index: number) => (
                <Avatar
                  key={author?.id}
                  src={author?.image}
                  alt={author?.name}
                  sx={{
                    position: 'absolute',
                    left: `${index * 30}px`,
                    zIndex: index,
                    border: '2px solid white',
                  }}
                />
              ))}
            </Box>
            <Box className={classes.textContainer} sx={{ marginLeft: pathAfterSlash === 'en' ? '68px' : '0px' }}>
              <Typography variant="subtitle1" sx={{ color: '#262626' }} className={classes.subtitle}>
                {onePublication?.author
                  .map((author: any) => author.name)
                  .join(" & ")}
              </Typography>
              <Typography variant="body2" sx={{ color: '#262626' }} className={classes.title}>
                {new Date(onePublication?.created).toLocaleDateString()}
              </Typography>
            </Box>
          </Grid>
          <Grid container justifyContent="flex-end" spacing={2}>
            <Grid
              item
              className={`${classes.iconWithText} ${
                activeIcon === "share" ? classes.active : ""
              }`}
            >
              <IconButton onClick={(e) => handleClick(e, "share")}>
                <Image
                  src={imageShare}
                  alt="Description of the image"
                  width={18}
                  height={18}
                />
              </IconButton>
              <div className={classes.shareText}>
                <Typography variant="body2" className={classes.title} sx={{ color: '#262626' }}>
                  {t("share")}
                </Typography>
              </div>
              {open && activeIcon === "share" && <Triangle color="#476B8733" />}
              <Menu
                disableScrollLock={true}
                anchorEl={anchorEl}
                open={Boolean(anchorEl) && activeIcon === "share"}
                onClose={handleClose}
                className={classes.menu}
                PaperProps={{
                  style: {
                    maxHeight: 200,
                    width: "25ch",
                  },
                }}
              >
                <MenuItem onClick={handleClose} className={classes.menuItem}>
                <TwitterShareButton url={shareUrl} className={classes.menuItem}>
                <XIcon />
                  Share on Twitter

                  </TwitterShareButton>
                 
                </MenuItem>
                <MenuItem onClick={handleClose} className={classes.menuItem}>
                <LinkedinShareButton url={shareUrl} className={classes.menuItem}>
                <LinkedInIcon />
                Share on LinkedIn

                  </LinkedinShareButton>
                 
                </MenuItem>
                <MenuItem onClick={handleClose} className={classes.menuItem}>
             
                  <WhatsappShareButton url={shareUrl} className={classes.menuItem}>
                    <WhatsAppIcon  />
                    Share on WhatsApp

                  </WhatsappShareButton>
                </MenuItem>
              </Menu>
            </Grid>
            <Grid
              item
              className={`${classes.iconWithText} ${
                activeIcon === "print" ? classes.active : ""
              }`}
            >
              <IconButton 
                onClick={() => {
                  handlePrint();
                  setActiveIcon("print");
                }}
              >
                <PrintOutlinedIcon sx={{ color: "black" }} />
              </IconButton>
              <Typography variant="body2" sx={{ color: '#262626' }} className={classes.title}>
                {t("Print")}
              </Typography>
            </Grid>
            <Grid
              item
              className={`${classes.iconWithText} ${
                activeIcon === "download" ? classes.active : ""
              }`}
            >
              <IconButton
                onClick={() => {
                  handleDownloadPDF();
                  setActiveIcon("download");
                }}
              >
                <Image
                  src={imageDownload}
                  alt="Description of the image"
                  width={18}
                  height={18}
                />
              </IconButton>
              <Typography variant="body2" sx={{ color: '#262626' }} className={classes.title}>
                {t("Download")}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </header>
  );
};

export default Header;
