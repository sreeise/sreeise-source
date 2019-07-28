import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardFlex from "./CardFlex";
import config from '../config';

const useStyles = makeStyles({
    card: {
        flexGrow: 1,
    },
    title: {
        fontSize: 14,
    },
});


export default function AboutMeCards() {
    const about = config.get("aboutMe");
    const classes = useStyles();

    let cards = [
        <Card className={classes.card}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {about.hobbies.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {about.hobbies.content}
                </Typography>

            </CardContent>
        </Card>,
        <Card className={classes.card}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {about.education.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {about.education.content}
                </Typography>
            </CardContent>
        </Card>,
        <Card className={classes.card}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {about.faith.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {about.faith.content}
                </Typography>
            </CardContent>
        </Card>,
    ];

    return <CardFlex cards={cards}/>;
}


