import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

import style from "./SearchBar.css";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    height: 32,
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  searchBarDecoration: {
    width: "100%",
    borderRadius: 5,
    background: "#2d4f82",
    padding: "10px 0 10px 10px",
    marginTop: "30px",
  },
}));

export const SearchBar = ({ offices, setSearchResults }) => {
  const classes = useStyles();

  const handleSearch = (e) => {
    const searchValue = e.target.value;
    let filteredOffices;
    filteredOffices = offices.filter(
      (office) =>
        office.name.toLowerCase().includes(searchValue) ||
        office.name.toUpperCase().includes(searchValue)
    );
    setSearchResults(filteredOffices);
  };

  return (
    <div className={classes.searchBarDecoration}>
      <Paper component="form" className={classes.root}>
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
        <Divider className={classes.divider} orientation="vertical" />
        <InputBase
          className={classes.input}
          placeholder="Buscar sucursal"
          onChange={(e) => handleSearch(e)}
          autoFocus={true}
        />
      </Paper>
    </div>
  );
};
