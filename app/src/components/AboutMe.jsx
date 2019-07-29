import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import config from '../config';
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        margin: 10,
    },
    card: {
        maxWidth: 455,
        width: 300,
    },
    title: {
        fontSize: 14,
    },
    divider: {
        marginBottom: theme.spacing(1)
    }
}));

export default function AboutMeCards() {
    const about = config.get("aboutMe");
    const classes = useStyles();

    return(
        <section className={classes.root}>
            <Card className={classes.card}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h1">
                        My name is Sean Reeise
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Software Engineer
                    </Typography>
                    <Divider className={classes.divider} />
                    <Typography gutterBottom variant="h5" component="h2">
                        {about.hobbies.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {about.hobbies.content}
                    </Typography>

                </CardContent>
            </Card>
            <Card className={classes.card}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {about.education.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {about.education.content}
                    </Typography>
                </CardContent>
            </Card>
            <Card className={classes.card}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {about.faith.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {about.faith.content}
                    </Typography>
                </CardContent>
            </Card>
        </section>
    )
}
