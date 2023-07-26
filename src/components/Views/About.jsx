import React from "react";
import FetchCharacters from "./miniProjects/FetchCharacters";
import Container from "@mui/material/Container";

const About = (props) => {
  return (
    <div>
      <Container>
        <h1>Mini Api App</h1>
        <FetchCharacters />
      </Container>
    </div>
  );
};

export default About;
