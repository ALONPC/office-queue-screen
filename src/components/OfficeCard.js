import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { Person, Schedule } from "@material-ui/icons";

const useOnlineStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    backgroundColor: "#2d4f82",
  },
  content: {
    height: 64,
  },
  text: {
    fontWeight: "bold",
    color: "white",
  },
  bottom: {
    height: "24px",
    backgroundColor: "mediumseagreen",
  },
}));

export const OfficeCard = ({ office: { name, lines } }) => {
  const classes = useOnlineStyles();
  //   const offline = useOfflineStyles();

  const [totalPeopleWaiting, setTotalPeopleWaiting] = useState(0);

  useEffect(() => {
    sumPeopleWaiting();
  }, [lines]);

  const sumPeopleWaiting = () => {
    const waitingPeople = [];
    for (const key of Object.keys(lines)) {
      waitingPeople.push(lines[key].waiting);
    }
    const total = waitingPeople.reduce((a, b) => a + b);
    console.log("sumPeopleWaiting -> total", total);
    setTotalPeopleWaiting(total);
  };

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent className={classes.content}>
          <Typography
            className={classes.text}
            gutterBottom
            variant="h5"
            component="h2"
          >
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.bottom}>
        <Person></Person>
        {totalPeopleWaiting}
        <Schedule></Schedule>
      </CardActions>
    </Card>
  );
};
