import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import Button from '@material-ui/core/Button';

const styles = {
    card: {
        maxWidth: 555,
        width: 300,
        margin: 10,
        flexGrow: 1,
    },
    media: {
        width: 300,
        height: 160,
        hover: {
            width: 320,
        }
    },
};

class CardInfo extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <Card className={classes.card}>
                <CardActionArea>
                    <a href={this.props.href} target={"_blank"}>
                        <CardMedia
                            className={classes.media}
                            image={this.props.src}
                            title={this.props.title}
                        />
                    </a>
                </CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="title" component="p">
                        {this.props.title}
                    </Typography>
                </CardContent>
                <CardActions>
                    <a href={this.props.href} target={"_blank"}>
                        <Button size="small" color="primary">
                            {this.props.button}
                        </Button>
                    </a>
                </CardActions>
            </Card>
        );
    }
}

CardInfo.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardInfo);