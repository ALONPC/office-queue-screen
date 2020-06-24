import React from "react";
import Container from "@material-ui/core/Container";

import { Logo } from "./components/Logo";
import { OfficeContainer } from "./components/OfficeContainer";

const App = () => {
  return (
    <div style={{ marginTop: 32 }} className="App">
      <Logo></Logo>
      <Container maxWidth="lg">
        <OfficeContainer></OfficeContainer>
      </Container>
    </div>
  );
};

export default App;
