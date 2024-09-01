import React, { useState } from "react";
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import { useAppSelector } from "@/lib/hooks";
import { useTranslations } from "next-intl";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  content: {
    padding: "12px",
  },
  title: {
    fontWeight: 500,
    fontFamily: "Almarai",
  },
}));
interface SidebarProps {
  setCategoriesProjects:any;
  setCategoriesPublications:any;
  categoriesProjects: number[];
  categoriesPublications: number[];
  
}
const Sidebar: React.FC<SidebarProps> = ({
  categoriesProjects,
  categoriesPublications,
  setCategoriesPublications,
  setCategoriesProjects
  
}) => { 
   const t = useTranslations("Result");
  const classes = useStyles();

  // Get categories data from the Redux store
  const categoriesData = useAppSelector((state) => state.categories.data);

  // Separate categories into publications and projects
 // Separate categories into publications and projects based on their counts
const publications = categoriesData?.results.filter((item: any) => item.publication_count > 0) || [];
const projects = categoriesData?.results.filter((item: any) => item.project_count > 0) || [];




  // Handle checkbox change for publications
  const handlePublicationCheckboxChange = (id: number, checked: boolean) => {
    setCategoriesPublications((prevSelectedIds: any[]) => {
      if (checked) {
        // Add ID to the selectedPublicationIds array
        return [...prevSelectedIds, id];
      } else {
        // Remove ID from the selectedPublicationIds array
        return prevSelectedIds.filter((selectedId) => selectedId !== id);
      }
    });
  };

  // Handle checkbox change for projects
  const handleProjectCheckboxChange = (id: number, checked: boolean) => {
    setCategoriesProjects((prevSelectedIds: any[]) => {
      if (checked) {
        // Add ID to the selectedProjectIds array
        return [...prevSelectedIds, id];
      } else {
        // Remove ID from the selectedProjectIds array
        return prevSelectedIds.filter((selectedId) => selectedId !== id);
      }
    });
  };
  // Clear all checkboxes
  const handleClearAll = () => {
    setCategoriesPublications([]); // Clear all selected publication IDs
    setCategoriesProjects([]); // Clear all selected project IDs
  };
  return (
    <Box sx={{ width: 250, padding: 2 }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography className={classes.title} sx={{ fontWeight: 600, fontSize: '20px', fontFamily: "Almarai" }}>
          {t(`Filter Results:`)}
        </Typography>
        <Typography
          variant="body2"
          color="primary"
          sx={{
            cursor: "pointer",
            marginTop: "7px",
            fontFamily: "Almarai",
            marginLeft: "4px",
            transition: "color 0.3s ease",
            "&:hover": {
              color: "#ff5722", // Change to desired hover color
            },
          }}
          onClick={handleClearAll}

          className={classes.title}
        >
          {t(`Clear`)}
        </Typography>
      </Box>

      {/* Publications Section */}
      <Typography
        variant="subtitle1"
        sx={{ marginTop: 2, color: '#262626', fontWeight: 600, fontFamily: "Almarai" }}
        className={classes.title}
      >
        {t(`Publications`)}
      </Typography>
      <FormGroup>
        {publications.map((pub: any) => (
          <FormControlLabel
            key={pub.id}
            control={
              <Checkbox
                checked={categoriesPublications.includes(pub.id)}
                onChange={(event) => handlePublicationCheckboxChange(pub.id, event.target.checked)}
                sx={{
                  color: "#476B87", // unchecked color
                  "&.Mui-checked": {
                    color: "#476B87", // checked color
                  },
                }}
              />
            }
            label={pub.name} // Display category name based on the current language
            className={classes.title}
            sx={{
              "& .MuiFormControlLabel-label": {
                color: "#476B87",
                fontFamily: "Almarai",
              },
            }}
          />
        ))}
      </FormGroup>

      {/* Projects Section */}
      <Typography
        variant="subtitle1"
        sx={{ marginTop: 2, color: '#262626', fontWeight: 600, fontFamily: "Almarai" }}
        className={classes.title}
      >
        {t(`Projects`)}
      </Typography>
      <FormGroup>
        {projects.map((proj: any) => (
          <FormControlLabel
            key={proj.id}
            control={
              <Checkbox
                checked={categoriesProjects.includes(proj.id)}
                onChange={(event) => handleProjectCheckboxChange(proj.id, event.target.checked)}
                sx={{
                  color: "#476B87", // unchecked color
                  "&.Mui-checked": {
                    color: "#476B87", // checked color
                  },
                }}
              />
            }
            label={proj.name} // Display category name based on the current language
            className={classes.title}
            sx={{
              "& .MuiFormControlLabel-label": {
                color: "#476B87",
                fontFamily: "Almarai",
              },
            }}
          />
        ))}
      </FormGroup>
    </Box>
  );
};

export default Sidebar;
