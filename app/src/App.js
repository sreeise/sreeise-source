import React from 'react';
import './css/index.css';
import './css/normalize.css';
import CardInfo from "./components/card.jsx";
import CardFlex from "./components/CardFlex";
import PageHeader from "./components/PageHeader";
import AboutMeCards from "./components/AboutMe";
import config from "./config";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles(({
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

function App() {
    const classes = useStyles();
    return(
        <div>
            <PageHeader/>
            <Grid container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  className={classes.root}>
                <Hidden only={['xs', 'sm']}>
                    <Grid item xs={3}>
                        <AboutMeCards />
                    </Grid>
                    <Grid item xs={8}>
                        <CardFlex cards={work}/>
                    </Grid>
                </Hidden>

                <Hidden only={['md', 'xl', 'lg']}>
                    <Grid item xs={12}>
                        <CardFlex cards={work}/>
                        <AboutMeCards/>
                    </Grid>
                </Hidden>
            </Grid>
        </div>
    );
}

export default App;
