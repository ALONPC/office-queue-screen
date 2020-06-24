import React, { useState, useEffect } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import { OfficeCard } from "./OfficeCard";

import style from "./OfficeContainer.css";
import { SearchBar } from "./SearchBar";

export const OfficeContainer = () => {
  const [offices, setOffices] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getAllOffices();
  }, []);

  const getAllOffices = async () => {
    const allOffices = await axios
      .get("https://boiling-mountain-49639.herokuapp.com/desafio-frontend")
      .then((res) => {
        setLoading(false);
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
    setOffices(allOffices);
    console.log("getsAllOffices -> allOffices", allOffices);
    console.log("OfficeContainer -> loading", loading);
  };

  return (
    <>
      <SearchBar></SearchBar>
      <Grid container style={{ marginTop: "24px" }} spacing={3}>
        {!loading &&
          offices.map((office) => (
            <Grid item xs={6} sm={3}>
              <OfficeCard key={office.name} office={office}></OfficeCard>
            </Grid>
          ))}
      </Grid>
    </>
  );
};
