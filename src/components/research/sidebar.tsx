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
} from "@mui/material";
import { makeStyles } from "@mui/styles";

import ClearIcon from "@mui/icons-material/Clear";
import { useAppSelector } from "@/lib/hooks";
import { useTranslations } from "next-intl";

const useStyles = makeStyles({
  formLabelRoot: {
    color: "#476B87",
    fontFamily: "Source Sans Pro",
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
  handleToggle: (item: Item) => (event: React.ChangeEvent<HTMLInputElement>) => void;
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
  handleClear
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
            fontFamily:
              pathAfterSlash === "ar" ? '"Almarai"' : "Source Sans Pro",
          }}
        >
          {t(`Topics`)}
        </Typography>
        <Typography
          sx={{
            color: "#476B87",
            fontFamily:
              pathAfterSlash === "ar" ? '"Almarai"' : "Source Sans Pro",
          }}
          onClick={handleClear}
        >
          {t(`Clear`)}
        </Typography>
      </Box>
      <TextField
        label="Checked Items"
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
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: "18px",
                      color: "#476B87",
                      lineHeight: "22.63px",
                      fontFamily:
                        pathAfterSlash === "ar"
                          ? '"Almarai"'
                          : "Source Sans Pro",
                    }}
                  >
                    <span
                      style={{
                        fontFamily:
                          pathAfterSlash === "ar"
                            ? '"Almarai"'
                            : "Source Sans Pro",
                      }}
                    >
                      {item.label}
                    </span>
                  </Typography>
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
                  fontFamily:
                    pathAfterSlash === "ar" ? '"Almarai"' : "Source Sans Pro",
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
