import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import moment from "moment";

import { Person, Schedule } from "@material-ui/icons";

const useOnlineStyles = makeStyles((_) => ({
    root: {
        maxWidth: 345,
        backgroundColor: "#2d4f82",
    },
    content: {
        height: 64,
    },
    text: {
        fontWeight: "bold",
        color: "#FFF",
    },
    bottom: {
        height: 24,
        backgroundColor: "#3cb371",
        fontWeight: "bold",
        color: "#FFF",
    },
}));

const useOfflineStyles = makeStyles((_) => ({
    root: {
        maxWidth: 345,
        backgroundColor: "#eee",
    },
    content: {
        height: 64,
    },
    text: {
        fontWeight: "bold",
        color: "#888",
    },
    bottom: {
        height: 24,
        backgroundColor: "#888",
        fontWeight: "bold",
        color: "#FFF",
    },
}));

export const OfficeCard = ({ office: { name, online, lines } }) => {
    const [totalPeopleWaiting, setTotalPeopleWaiting] = useState(0);
    const [avgWaitingTime, setAvgWaitingTime] = useState(0);
    const onlineClasses = useOnlineStyles();
    const offlineClasses = useOfflineStyles();
    const classes = online ? onlineClasses : offlineClasses;

    useEffect(() => {
        sumPeopleWaiting();
        getAvgWaitingTime();
    }, [lines]);

    const sumPeopleWaiting = () => {
        const waitingPeople = [];
        for (const key of Object.keys(lines)) {
            waitingPeople.push(lines[key].waiting);
        }
        const total = waitingPeople.reduce((a, b) => a + b);
        setTotalPeopleWaiting(total);
    };

    const getAvgWaitingTime = () => {
        const elapsedArr = [];
        for (const key of Object.keys(lines)) {
            elapsedArr.push(lines[key].elapsed);
        }
        const totalAvg = elapsedArr.reduce(
            (a, b) => (a + b) / elapsedArr.length
        );
        const parsedTotalAvg = moment.utc(totalAvg * 1000).format("HH:mm:ss");
        setAvgWaitingTime(parsedTotalAvg);
    };

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia className={classes.media} />
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
                <Person /> {totalPeopleWaiting}
                <Schedule /> {avgWaitingTime}
            </CardActions>
        </Card>
    );
};
