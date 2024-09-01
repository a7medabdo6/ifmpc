import React from "react";
import BasicTabs from "../custom/BasicTabs";
import MostRecentContentProjects from "./MostRecentContentProjects";
import { useAppSelector } from "@/lib/hooks";
import { useTranslations } from "next-intl";
import { makeStyles } from "@mui/styles";
import MostRecentContentPublications from "./MostRecentContentPublications";
import MostRecentContentAll from "./MostRecentContentAll";

const useStyles = makeStyles((theme) => ({
  content: {
    padding: "12px",
  },
  title: {
    fontFamily: "Almarai",
  },
}));

const Content = () => {
  const ResultsSearch = useAppSelector((state) => state.search.data);
  const searchData = useAppSelector((state) => state.search.data);

  // دمج المشاريع والمنشورات في متغير واحد
  const combinedContent = [
    ...(searchData?.results?.projects || []),
    ...(searchData?.results?.publications || []),
  ];

  const t = useTranslations("UpcomingTrainings");
  const classes = useStyles();

  return (
    <div style={{ backgroundColor: "white" }}>
      <BasicTabs
        tabone={<MostRecentContentAll projects={combinedContent} />}
        tabonetitle="All"
        tabtwo={
          <MostRecentContentPublications
            projects={searchData?.results?.publications || []}
          />
        }
        tabtwotitle="Publications"
        tabthreetitle="Projects"
        tabthree={
          <MostRecentContentProjects projects={searchData?.results?.projects || []} />
        }
      />
    </div>
  );
};

export default Content;
