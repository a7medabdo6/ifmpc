import * as React from "react";
import { Box, Typography, InputBase, IconButton, Paper } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useTranslations } from "next-intl";
import { makeStyles } from "@mui/styles";
import { useAppSelector } from "@/lib/hooks";
import { useSearchParams } from "next/navigation";

const useStyles = makeStyles((theme) => ({
  content: {
    padding: "12px",
  },
  title: {},
}));

interface SearchResultProps {
  query: string;
  onClear: () => void;
  inputValue: any;
  setInputValue: any;
  handleInputChange: any;
  handleKeyDown: any;
}

const SearchResult: React.FC<SearchResultProps> = ({
  query,
  onClear,
  handleInputChange,
  setInputValue,
  inputValue,
  handleKeyDown,
}) => {
  const t = useTranslations("Result");
  const classes = useStyles();
  const pathAfterSlash = useAppSelector((state) => state.path.pathAfterSlash);
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("searchQuery");

  return (
    <Box sx={{ width: "100%" }} dir={pathAfterSlash === "ar" ? "rtl" : "ltr"}>
      <Typography
        variant="h6"
        gutterBottom
        className={classes.title}
        sx={{ fontWeight: 600 }}
      >
        {t(`Search Results for`)} “ {searchQuery} ”
      </Typography>
      <Paper
        component="form"
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          borderRadius: 5,
          backgroundColor: "#f5f5f5",
          boxShadow: "none", // Remove box shadow
          border: "none", // Remove border
        }}
        onSubmit={(e) => e.preventDefault()} // Prevent default form submission
      >
        <InputBase
          sx={{ ml: 1, flex: 1, paddingInline: "10px" }}
          placeholder={t("Search Results for")}
          value={inputValue}
          onKeyDown={handleKeyDown} // Attach the key down handler
          onChange={handleInputChange} // Attach the change handler
          className={classes.title}
          inputProps={{ "aria-label": "search results" }}
        />
        <IconButton sx={{ p: "10px" }} aria-label="clear" onClick={onClear}>
          <CloseIcon />
        </IconButton>
      </Paper>
    </Box>
  );
};

export default SearchResult;
