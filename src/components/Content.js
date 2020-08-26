import React, { useState, useEffect } from "react";
import axios from "axios";

import { SearchBar } from "./SearchBar";
import { OfficeList } from "./OfficeList";
import { Loading } from "./Loading";

import { API } from "../constants";

export const Content = () => {
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
            <SearchBar offices={offices} setSearchResults={setSearchResults} />
            {loading && <Loading />}
            {!loading && <OfficeList searchResults={searchResults} />}
        </>
    );
};
