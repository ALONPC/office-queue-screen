import React, { useState, useEffect } from "react";
import {
    makeStyles,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    Typography,
} from "@material-ui/core";
import { Person, Schedule } from "@material-ui/icons";
import moment from "moment";

const defaultCardStyles = {
    content: {
        height: 94,
        padding: 16,
        fontWeight: "bold",
    },
    bottom: {
        padding: 6,
    },
};

const useStyles = (status) =>
    makeStyles((theme) => ({
        card: {
            maxWidth: 345,
        },
        content: {
            ...defaultCardStyles.content,
            backgroundColor: theme.palette[status].content.background,
            color: theme.palette[status].content.text,
        },
        bottom: {
            ...defaultCardStyles.bottom,
            backgroundColor: theme.palette[status].bottom.background,
            color: theme.palette[status].bottom.text,
        },
    }));

const BottomInfo = ({ icon, info }) => {
    return (
        <>
            {icon}
            <Typography style={{ fontWeight: "bold", margin: 4 }}>
                {info}
            </Typography>
        </>
    );
};

export const OfficeCard = ({ office: { name, online, lines } }) => {
    const [totalPeopleWaiting, setTotalPeopleWaiting] = useState(0);
    const [avgWaitingTime, setAvgWaitingTime] = useState(0);
    const status = online ? "online" : "offline";
    const classes = useStyles(status)();

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
        <Card>
            <CardActionArea>
                <CardContent className={classes.content}>
                    <Typography style={{ fontWeight: "bold" }} variant="h5">
                        {name}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.bottom}>
                <BottomInfo icon={<Person />} info={totalPeopleWaiting} />
                <BottomInfo icon={<Schedule />} info={avgWaitingTime} />
            </CardActions>
        </Card>
    );
};
