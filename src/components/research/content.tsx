import React from "react";
import BasicTabs from "../custom/BasicTabs";
import MostRecentContentProjects from "./MostRecentContentProjects";
import MostPopularContentProjects from "./MostPopularContentProjects";


import { projects } from "../../data/homeData";
import { publications } from "../../data/homeData";
interface ContentProps {
  MostRecent: any; // Replace Project[] with the actual type of MostRecent
  MostPobular:any; // Replace Project[] with the actual type of MostPobular
}
const Content: React.FC<ContentProps> = ({ MostRecent, MostPobular }) => {

  return (
    <div style={{ backgroundColor: "white" }}>
      <BasicTabs
        tabone={<MostRecentContentProjects projects={MostRecent} />}
        tabonetitle="Most Recent"
        tabtwo={<MostPopularContentProjects projects={MostPobular} />}
        tabtwotitle="Most Popular"
      />
    </div>
  );
};

export default Content;
