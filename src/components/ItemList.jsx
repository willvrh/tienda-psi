import { React, useEffect, useState } from 'react';
import Item from './Item';
import { makeStyles, CircularProgress, Typography, Grid } from '@material-ui/core';
import { mockData } from '../MockData';

export default function ItemList(props) {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);

    const useStyles = makeStyles({
        root: {
            // maxWidth: 345, original width style
            maxWidth: '100%',
            paddingLeft: '15px',
            paddingRight: '15px',
            display: 'flex',
            alignItems: 'flex-start',
            margin: '0',
        },
        loader: { 
            paddingTop: '40px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }
       
    });

    const classes = useStyles();
        
    useEffect(() => {
        new Promise((resolve, reject) => {
            setLoading(true);
            const data = mockData;
            setTimeout(() => resolve(data), 2000);
        })
        .then((dataResolve) => {
                setItems(dataResolve);
                setLoading(false);
        })
        .catch((error) => {
                console.log("err", error);
        });
    }, []);


    if (loading) {
        return (
            <div className={classes.loader}>
                <Typography variant="h4" component="h4">
                    Cargando ...
                </Typography>
                <CircularProgress style={{ marginTop: '40px'}} />
            </div>
        )
    } else {
        return (
            <>
                <Grid className={classes.root} container spacing={3}>
                    {items.map((item) => (<Item {...item} />) )}
                </Grid>
            </>
        )
    }
}
