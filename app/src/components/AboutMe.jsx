import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
        marginTop: 5,
        marginLeft: 25,
        width: 500,
        float: "left",
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 15,
    },
    pos: {
        marginBottom: 12,
    },
};

function AboutMe(props) {
    const {classes} = props;

    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography variant="h5" component="h5">
                    My name is Sean Reeise.
                </Typography>
                <Typography variant="p" component="h5">
                    <br/>
                    Hobbies and Work:
                </Typography>
                <Typography variant="p" component="p">
                    <br/>
                    Some of my favorite hobbies are programming and development. I huge
                    supporter of open source and a regular contributor to several
                    projects from Mozilla including the Firefox browser.
                    <br/>
                    <br/>
                    I enjoy learning pretty much anything that has to do with technology
                    and development.
                    <br/>
                    <br/>
                    I hold an Associate of Arts in Religion and will graduate with a Bachelors of Science
                    in Information Technology in May 2019 from Liberty University.
                </Typography>
                <Typography variant="p" component="h5">
                    <br/>
                    What I Believe:
                </Typography>
                <Typography variant="p" component="p">
                    <br/>
                    I live by faith in my savior Jesus Christ.
                </Typography>
                <Typography component="p">
                    <br/>
                    {'"For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord."'}
                    <br/>
                    - Romans 8:38-39 (NIV)
                    <br/>
                    <br/>
                    {'"For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life."'}
                    <br/>
                    - John 3:16 (NIV)
                    <br/>
                    <br/>
                    {'"Be devoted to one another in love. Honor one another above yourselves."'}
                    <br/>
                    - Romans 12:10
                </Typography>
                <Typography variant="p" component="p">
                    <br/>
                    Feel free to check out some of my work.
                </Typography>
            </CardContent>
        </Card>
    );
}

AboutMe.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AboutMe);
