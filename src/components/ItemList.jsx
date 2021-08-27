import { React, useEffect, useState } from 'react';
import Item from './Item';
import { makeStyles, Grid, Box } from '@material-ui/core';
import { mockDataProducts } from '../MockData';
import { useLocation } from "react-router";
import Skeleton from '@material-ui/lab/Skeleton';

export default function ItemList({category}) {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const location = useLocation();


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
       
    });

    const classes = useStyles();
        
    useEffect(() => {
        new Promise((resolve, reject) => {
            setLoading(true);
            var data = mockDataProducts;

            if (category != "" && category != "todas") {
                data = mockDataProducts.filter(product => {
                    return product.category == category;
                })
            }

            setTimeout(() => resolve(data), 2000);
        })
        .then((dataResolve) => {
                setItems(dataResolve);
                setLoading(false);
        })
        .catch((error) => {
                console.log("err", error);
        });
    }, [location.pathname]);


    if (loading) {
        return (
            
            <>
             <Grid className={classes.root} container spacing={3}>
                {new Array(12).fill(1).map((item) => (
                <>
                <Grid item xs={12} sm={6} md={2} >
                <Box boxShadow={3} item xs={12} sm={6} md={2}>
                <Skeleton variant="rect" height={350} />
                </Box>
                </Grid>
                </>
                ) )}

                 
             </Grid>
            </>    
            
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
