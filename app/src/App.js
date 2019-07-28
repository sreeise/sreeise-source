import React, {Component} from 'react';
import './css/index.css';
import './css/normalize.css';
import CardInfo from "./components/card.jsx";
import CardFlex from "./components/CardFlex";
import PageHeader from "./components/PageHeader";
import AboutMeCards from "./components/AboutMe";
import config from "./config";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
}));

let portfolio = config.get("portfolio");

let work = [
    <CardInfo
        href={portfolio.mozilla.link}
        src={portfolio.mozilla.imgSrc}
        title={portfolio.mozilla.title}
        button={"See More"}
    />,
    <CardInfo href={portfolio.github.link}
              src={portfolio.github.imgSrc}
              title={portfolio.github.title}
              button={"See More"}
    />,
    <CardInfo href={portfolio.srSource.link}
              src={portfolio.srSource.imgSrc}
              title={portfolio.srSource.title}
              button={"Lets Go!"}
    />,
];

function GridLayout() {
    const classes = useStyles();
    return(
        <Grid container
              direction="row"
              justify="center"
              alignItems="center"
              className={classes.root}>
            <Grid item xs={8}>
                <CardFlex cards={work}/>
            </Grid>
            <Grid item xs={3}>
                <AboutMeCards />
            </Grid>
        </Grid>
    );
}

class App extends Component {
    render() {
        return (
            <div>
                <PageHeader/>
                <GridLayout/>
            </div>
        );
    }
}

export default App;
