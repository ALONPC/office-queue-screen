import React from "react";
import { CircularProgress } from "@material-ui/core";

export const Loading = () => {
    return (
        <div
            style={{
                top: "30%",
                left: "50%",
                position: "fixed",
                transform: "translate(-50%, -50%)",
            }}
        >
            <CircularProgress size={100} color="secondary" />
        </div>
    );
};
