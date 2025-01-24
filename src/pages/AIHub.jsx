import React from "react";
import AiHubLayout from "../components/AiHub/AiHubLayout";
import Navbar from "../components/AiHub/Navbar";

import TrainingModels from "../components/AiHub/TrainingModels";
import AiResearch  from "../components/AiHub/AiResearch";
import ComingSoonAi from "../components/AiHub/ComingSoonAi";
import ComparisonModal from "../components/AiHub/ComparisonModal";



const Home = () => {
    return (
      <div>
         <Navbar />
        <TrainingModels/>
        <AiResearch/>
        <AiHubLayout/>
        <ComingSoonAi/>
        <ComparisonModal/>
        
    </div>
  );
};

export default Home;
