import React, { useState } from "react";
import Section from "./Section";
import { Box, Typography, Pagination, PaginationItem } from "@mui/material";
import { useTranslations } from "next-intl";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  content: {
    padding: "12px", // تعيين تباعد داخلي للمحتوى
  },
  bigContainer: {
    maxWidth: "100%", // تعيين عرض الحاوية ليأخذ المساحة القصوى المحتملة
  },
  title: {
    fontFamily: "Almarai",
  },
  noData: {
    textAlign: "center",
    marginTop: "20px",
    color: "gray",
  },
}));

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
  image: string;
  popularity_count: number;
  category: number;
  author: number[];
  tags: number[];
}

interface MostRecentContentProjectsProps {
  projects: Item[];
}

const itemsPerPage = 6;

const MostRecentContentProjects: React.FC<MostRecentContentProjectsProps> = ({
  projects,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = Math.ceil(projects.length / itemsPerPage);
  const classes = useStyles();
  const t = useTranslations("pagination");

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) =>
      prevPage < totalPages ? prevPage + 1 : prevPage
    );
  };

  // Logic to slice items based on currentPage
  const startIndex = (currentPage - 1) * itemsPerPage;
  const slicedProjects = projects.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div style={{ backgroundColor: "white" }}>
      {projects.length === 0 ? (
        <Typography sx={{   fontFamily: "Almarai"}} className={classes.noData}>{t("Nodatafound")}</Typography>
      ) : (
        <>
          <Section
            title=""
            items={slicedProjects}
            top={true}
            pathLink="Projects"
            withImage
          />
          {totalPages > 1 && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "16px",
              }}
            >
              <Typography
                onClick={handlePreviousPage}
                sx={{
                  cursor: "pointer",
                  marginRight: "16px",
                  color: currentPage === 1 ? "gray" : "blue",
                    fontFamily: "Almarai"
                }}
                component="span"
                className={classes.title}
              >
                {t(`Previous`)}
              </Typography>
              <Pagination
                count={totalPages}
                page={currentPage}
                onChange={handleChangePage}
                color="primary"
                renderItem={(item) => (
                  <PaginationItem
                    {...item}
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
              <Typography
                onClick={handleNextPage}
                sx={{
                  cursor: "pointer",
                  marginLeft: "16px",
                  color: currentPage === totalPages ? "gray" : "blue",
                   fontFamily: "Almarai"
                }}
                component="span"
                className={classes.title}
              >
                {t(`Next`)}
              </Typography>
            </Box>
          )}
        </>
      )}
    </div>
  );
};

export default MostRecentContentProjects;
