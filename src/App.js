import React from "react";
import { createMuiTheme, ThemeProvider, CssBaseline } from "@material-ui/core";

import { Logo } from "./components/Logo";
import { Content } from "./components/Content";

const theme = createMuiTheme({
    typography: {
        fontFamily: "Lato, sans-serif",
        color: "#fff",
    },
    palette: {
        primary: {
            main: "#2d4f82",
        },
        secondary: {
            main: "#3cb371",
        },
        online: {
            content: {
                background: "#2d4f82",
                text: "#eee",
            },
            bottom: {
                background: "#3cb371",
                text: "#eee",
            },
        },
        offline: {
            content: {
                background: "#eee",
                text: "#888",
            },
            bottom: {
                background: "#888",
                text: "#eee",
            },
        },
        background: {
            default: "#191970",
        },
    },
});

const App = () => (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <div style={{ marginTop: 32, overflow: "hidden" }}>
            <Logo />
            <Content />
        </div>
    </ThemeProvider>
);

export default App;
