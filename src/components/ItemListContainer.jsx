import React from 'react'
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    containerBg: {
      background : '#2E3B55',
    },
    title: {
      paddingTop: "15px",
      },
    }
));


export default function ItemListContainer (props) {
    const classes = useStyles();

    return (
        <div>
            <Typography 
                className={classes.title}
                align="center"
                variant="h5"
                color="primary"
                gutterBottom>
                {props.greetings}
            </Typography>
            {props.children}
        </div>
    )
}

