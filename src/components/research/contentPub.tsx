import React, { useEffect, useState } from "react";
import BasicTabs from "../custom/BasicTabs";
import MostRecentContentPublications from "./MostRecentContentPublications";
import MostPobularContentPublications from "./MostPopularContentPublications";

interface ContentPubProps {
  MostRecent: any; // Replace Project[] with the actual type of MostRecent
  MostPobular: any; // Replace Project[] with the actual type of MostPobular
}
const ContentPub: React.FC<ContentPubProps> = ({ MostRecent, MostPobular }) => {
  return (
    <div style={{ backgroundColor: "white" }}>
      <BasicTabs
        tabone={<MostRecentContentPublications projects={MostRecent} />}
        tabonetitle="Most Recent"
        tabtwo={<MostPobularContentPublications projects={MostPobular} />}
        tabtwotitle="Most Popular"
      />
    </div>
  );
};

export default ContentPub;
