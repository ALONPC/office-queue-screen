import React from "react";
import Container from "@material-ui/core/Container";

import { Logo } from "./components/Logo";
import { OfficeContainer } from "./components/OfficeContainer";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

const theme = createMuiTheme({
    typography: {
        fontFamily: "Lato, sans-serif",
    },
});

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <div style={{ marginTop: 32, overflow: "hidden" }}>
                <Logo />
                <OfficeContainer />
            </div>
        </ThemeProvider>
    );
};

export default App;
