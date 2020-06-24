import React from "react";
import Container from "@material-ui/core/Container";

import { Logo } from "./components/Logo";
import { SearchBar } from "./components/SearchBar";
import { OfficeContainer } from "./components/OfficeContainer";

import styles from "./App.css";

const App = () => {
  return (
    <div className="App">
      <Logo></Logo>
      <Container maxWidth="lg">
        <OfficeContainer></OfficeContainer>
      </Container>
    </div>
  );
};

export default App;
