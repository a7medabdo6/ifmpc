import React, { useState } from "react";
import {
  TextField,
  List,
  ListItem,
  Checkbox,
  FormControlLabel,
  Typography,
  Box,
  InputAdornment,
  IconButton,
  Tooltip,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

import ClearIcon from "@mui/icons-material/Clear";
import { useAppSelector } from "@/lib/hooks";
import { useTranslations } from "next-intl";

const useStyles = makeStyles({
  formLabelRoot: {
    color: "#476B87",
  },
});

interface Category {
  id: number;
  created: string;
  modified: string;
  name: string;
  name_en: string;
  name_ar: string;
  publication_count: number;
  project_count: number;
}

interface Item {
  id: number;
  label: string;
  projectCount: number; // Adjust this if the property name is different
}

interface SidebarProps {
  categories: Category[];
  checkedItems: { [key: number]: boolean };
  setCheckedItems: (items: { [key: number]: boolean }) => void;
  textFieldValue: string;
  handleToggle: (
    item: Item
  ) => (event: React.ChangeEvent<HTMLInputElement>) => void;
  setTextFieldValue: (value: string) => void;
  handleClear: () => void;
  items: Item[];
}

const Sidebar: React.FC<SidebarProps> = ({
  categories,
  checkedItems,
  items,
  setCheckedItems,
  textFieldValue,
  handleToggle,
  setTextFieldValue,
  handleClear,
}) => {
  const classes = useStyles();
  const t = useTranslations("Publications");
  const pathAfterSlash = useAppSelector((state) => state.path.pathAfterSlash);

  return (
    <Box
      style={{ padding: "27px", width: "85%", backgroundColor: "#ffffff" }}
      sx={{ direction: pathAfterSlash === "ar" ? "rtl" : "ltr" }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",

            color: "#262626",
          }}
        >
          {t(`Topics`)}
        </Typography>
        <Typography
          sx={{
            color: "#476B87",
            cursor: "pointer",
            "&:hover": {
              color: "#123456",
            },
          }}
          onClick={handleClear}
        >
          {t(`Clear`)}
        </Typography>
      </Box>
      <TextField
        label={t("Checked Items")}
        variant="outlined"
        fullWidth
        value={textFieldValue}
        onChange={(e) => setTextFieldValue(e.target.value)}
        InputProps={{
          style: {
            color: "#476B87",
            height: "50px",
            textAlign: "center",
          },
          endAdornment: textFieldValue && (
            <InputAdornment position="end">
              <IconButton onClick={handleClear}>
                <ClearIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
        InputLabelProps={{
          classes: {
            root: classes.formLabelRoot,
          },
          style: {
            textAlign: pathAfterSlash === "ar" ? "right" : "left", // Align label based on language
            right: pathAfterSlash === "ar" ? "25px" : "auto", // Adjust position for RTL
            left: pathAfterSlash === "ar" ? "auto" : "0", // Adjust position for LTR
          },
        }}
      />
      <Box
        sx={{ direction: pathAfterSlash === "ar" ? "rtl" : "ltr", gap: "8px" }}
      >
        <List>
          {items?.map((item) => (
            <ListItem
              key={item.id}
              sx={{
                padding: 0,
                height: "30px",
                justifyContent: "space-between",
              }}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checkedItems[item.id] || false}
                    onChange={handleToggle(item)}
                    name={item.label}
                    sx={{
                      color: "#476B87",
                      "&.Mui-checked": {
                        color: "#476B87",
                      },
                    }}
                  />
                }
                label={
                  <Tooltip title={item.label}>
                    <Typography
                      sx={{
                        textAlign: pathAfterSlash === "ar" ? "right" : "left",
                        fontWeight: 400,
                        fontSize: "18px",
                        color: "#476B87",
                        lineHeight: "22.63px",
                      }}
                    >
                      <span>
                        {item.label.length > 22
                          ? `${item.label.substring(0, 22)}...`
                          : item.label}

                        {/* {item.label} */}
                      </span>
                    </Typography>
                  </Tooltip>
                }
                style={{
                  marginRight: pathAfterSlash === "ar" ? "0px" : "16px",
                }}
              />
              <Typography
                sx={{
                  marginLeft: pathAfterSlash === "ar" ? "0px" : "auto",
                  fontWeight: 400,
                  fontSize: "18px",
                  color: "#476B87",
                  lineHeight: "22.63px",
                }}
              >
                <span>({item.projectCount})</span>
              </Typography>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
