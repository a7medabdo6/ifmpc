import React from "react";
import BasicTabs from "../custom/BasicTabs";
import MostRecentContentProjects from "./MostRecentContentProjects";
import MostPopularContentProjects from "./MostPopularContentProjects";


import { projects } from "../../data/homeData";
import { publications } from "../../data/homeData";
interface ContentProps {
  handleNext: any;
  count: number;
  handlePrevious: any;
  limit: any;
  setOffset:any;
  MostRecent: any; // Replace Project[] with the actual type of MostRecent
  MostPobular: any; // Replace Project[] with the actual type of MostPobular
}
const Content: React.FC<ContentProps> = ({ MostRecent, MostPobular, handleNext, handlePrevious,limit, count,setOffset }) => {

  return (
    <div style={{ backgroundColor: "white" }}>
      <BasicTabs
        tabone={<MostRecentContentProjects setOffset={setOffset} limit={limit} projects={MostRecent} handleNext={handleNext} handlePrevious={handlePrevious} count={count} />}
        tabonetitle="Most Recent"
        tabtwo={<MostPopularContentProjects setOffset={setOffset} limit={limit} projects={MostPobular} handleNext={handleNext} handlePrevious={handlePrevious} count={count} />}
        tabtwotitle="Most Popular"
      />
    </div>
  );
};

export default Content;
