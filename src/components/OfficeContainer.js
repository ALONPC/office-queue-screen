import React, { useState, useEffect } from "react";
import axios from "axios";
import { OfficeCard } from "./OfficeCard";
import { SearchBar } from "./SearchBar";
import { API } from "../constants";
import { Grid, Container, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "flex-start",
        // alignItems: "center",
        alignContent: "space-around",
        marginTop: 24,
    },
}));

export const OfficeContainer = () => {
    const [offices, setOffices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        getAllOffices();
    }, []);

    const getAllOffices = async () => {
        const allOffices = await axios
            .get(API)
            .then((res) => {
                setLoading(false);
                return res.data;
            })
            .catch((err) => {
                console.log(err);
            });
        setOffices(allOffices);
        setSearchResults(allOffices);
    };

    const classes = useStyles();

    return (
        <>
            <SearchBar offices={offices} setSearchResults={setSearchResults} />
            <Container maxWidth="lg">
                <Grid container className={classes.root} spacing={2}>
                    {!loading &&
                        searchResults.map((office) => (
                            <Grid key={office.name} item lg={3} md={4} sm={6}>
                                <OfficeCard office={office} />
                            </Grid>
                        ))}
                </Grid>
            </Container>
        </>
    );
};
