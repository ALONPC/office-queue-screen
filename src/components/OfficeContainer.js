import React, { useState, useEffect } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import { OfficeCard } from "./OfficeCard";
import { SearchBar } from "./SearchBar";
import { API } from "../constants";

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

  return (
    <>
      <SearchBar
        offices={offices}
        setSearchResults={setSearchResults}></SearchBar>
      <Grid container style={{ marginTop: "24px" }} spacing={3}>
        {!loading &&
          searchResults.map((office) => (
            <Grid key={office.name} item xs={6} sm={3}>
              <OfficeCard office={office}></OfficeCard>
            </Grid>
          ))}
      </Grid>
    </>
  );
};
