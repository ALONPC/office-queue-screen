import React from "react";
import { Grid, Container } from "@material-ui/core";

import { OfficeCard } from "./OfficeCard";

export const OfficeList = ({ searchResults }) => (
    <Container maxWidth="lg">
        <div style={{ marginTop: 24 }}>
            <Grid container spacing={2}>
                {!!searchResults.length &&
                    searchResults.map((office) => (
                        <Grid
                            item
                            lg={3}
                            md={4}
                            sm={6}
                            xs={12}
                            key={office.name}
                        >
                            <OfficeCard office={office} />
                        </Grid>
                    ))}
            </Grid>
        </div>
    </Container>
);
