import React, { useEffect, useState } from "react";
import BasicTabs from "../custom/BasicTabs";
import MostRecentContentPublications from "./MostRecentContentPublications";
import MostPobularContentPublications from "./MostPopularContentPublications";

interface ContentPubProps {
  handleNext: any;
  count: number;
  handlePrevious: any;
  limit: any;
  setOffset:any;

  MostRecent: any; // Replace Project[] with the actual type of MostRecent
  MostPobular: any; // Replace Project[] with the actual type of MostPobular
}

const ContentPub: React.FC<ContentPubProps> = ({ MostRecent,setOffset, MostPobular, handleNext, handlePrevious,limit, count }) => {
  return (
    <div style={{ backgroundColor: "white" }}>
      <BasicTabs
        tabone={<MostRecentContentPublications setOffset={setOffset} projects={MostRecent} limit={limit} handleNext={handleNext} handlePrevious={handlePrevious} count={count}/>}
        tabonetitle="Most Recent"
        tabtwo={<MostPobularContentPublications setOffset={setOffset} projects={MostPobular} limit={limit} handleNext={handleNext} handlePrevious={handlePrevious} count={count} />}
        tabtwotitle="Most Popular"
      />
    </div>
  );
};

export default ContentPub;
