import React, { useState } from "react";
import { Item } from "../../data/homeData";
import Section from "./Section";
import { Box, Typography, Pagination, PaginationItem, Button } from "@mui/material";
import {
  KeyboardDoubleArrowLeft,
  KeyboardDoubleArrowRight,
} from "@mui/icons-material";
import { useTranslations } from "next-intl";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  content: {
    padding: "12px", 
  },
  bigContainer: {
    maxWidth: "100%",
  },
  title: {
  },
}));

interface MostRecentContentProjectsProps {
  projects: Item[];
  limit:any;
  count:any;
  handleNext:any;
  handlePrevious:any;
  setOffset:any;
}


const MostRecentContentProjects: React.FC<MostRecentContentProjectsProps> = ({
  projects,
  count,
  handleNext,
  handlePrevious,
  limit,
  setOffset
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = Math.ceil(count / limit);
  const classes = useStyles();
  const t = useTranslations("pagination");

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    const startIndex = (page - 1) * limit;
    
    setOffset(startIndex)
    setCurrentPage(page);
  };

  const handlePreviousPage = () => {
    handlePrevious()
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  };

  const handleNextPage = () => {
    handleNext()
    setCurrentPage((prevPage) =>
      prevPage < totalPages ? prevPage + 1 : prevPage
    );
  };

  // Logic to slice items based on currentPage
  const startIndex = (currentPage - 1) * limit;
  const endIndex = startIndex + limit;

  const slicedProjects = projects.slice(startIndex, startIndex + limit);
  const isNextDisabled = currentPage === totalPages;

  return (
    <div style={{ backgroundColor: "white" }}>
      <Section
        title=""
        items={projects}
        top={true}
        pathLink="Projects"
        withImage
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "16px",
        }}
      >
          <Button
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
        sx={{
          marginRight: "16px",
          color: currentPage === 1 ? "#B0B0B0" : "#476B87",
        }}
      >
        <KeyboardDoubleArrowLeft />
        {t(`Previous`)}
      </Button>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handleChangePage}
          color="primary"
          renderItem={(item) => (
            <PaginationItem
              {...item}
              components={{
                previous: KeyboardDoubleArrowLeft,
                next: KeyboardDoubleArrowRight,
              }}
              sx={{
                "&.Mui-selected": {
                  backgroundColor: "transparent",
                  color: "#C99700",
                  fontWeight: "bold",
                },
                "& .MuiTouchRipple-root": {
                  display: "none",
                },
              }}
            />
          )}
        />
         <Button
          onClick={handleNextPage}
          disabled={isNextDisabled}
          sx={{
            marginLeft: "16px",
            color: isNextDisabled ? "#B0B0B0" : "#476B87",
          }}
        >
          {t(`Next`)}
          <KeyboardDoubleArrowRight />
        </Button>
      </Box>
    </div>
  );
};

export default MostRecentContentProjects;
