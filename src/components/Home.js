import React from "react";
import "./Home.css";
import Hero from "./Hero";
import aiPerson from "../assets/Artificial intelligence-cuate.svg";
import Flex from "@react-css/flex";

function Home() {
  return (
    <Flex row>
      <Flex.Item className="HalfWidth">
        <img src={aiPerson} alt="AI Person" className="HeroImage" />
      </Flex.Item>
      <Flex.Item className="HalfWidth">
        <Hero />
      </Flex.Item>
    </Flex>
  );
}

export default Home;
