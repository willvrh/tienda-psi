import React from 'react'
import { Container, makeStyles, Box, Typography, Grid } from '@material-ui/core';
import ItemDetail from './ItemDetail';
import { useState, useEffect } from 'react';
import { mockDataProducts } from '../MockData';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles((theme) => ({
    containerBg: {
      background : '#fff',
    },
    root: {
        display: "flex",
    },
    title: {
      paddingTop: "15px",
    },
    loader: { 
        paddingTop: '40px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
}));


export default function ItemDetailContainer (props) {
    const classes = useStyles();
    
    const itemId = props.id;
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getItems();
    }, []);

    const getItems = () => {
        new Promise((resolve, reject) => {
            setLoading(true);
            setTimeout(() => resolve(mockDataProducts.find(product => product.id === itemId)), 2000);
        })
        .then((itemResponse) => {
            setItem(itemResponse);
            setLoading(false);
        })
        .catch((error) => {
            console.log("err", error);
        });
    }

    if (loading) {
        return (
            <Container className={classes.containerBg}>
                <Box my={3}>
                <Grid container spacing={3}  className={classes.root}>
            <Grid item lg={8} md={8} xs={12} style={{textAlign: "center"}}>
            <Skeleton variant="rect" width={400} height={400} />
            </Grid>
            <Grid item lg={4} md={4} xs={12}>
                <div className={classes.content}>
                    <Skeleton height='40px' width="60%" />
                    <Skeleton height='25px' width="30%" />
                    <Skeleton style={{marginTop: '20px'}}height='35px' width="25%" />
                    <Skeleton style={{marginTop: '10px'}}height='25px' width="100%" />
                    <Skeleton style={{marginTop: '25px'}}height='25px' width="100%" />

                    <Skeleton style={{marginTop: '8px'}}height='80px' width="100%" />
                </div>
            </Grid>
            </Grid>
                </Box>
            </Container>
        )
    } else {
        return (
            <Container className={classes.containerBg}>
                <Box my={3}>
                    <ItemDetail item={item}/>
                </Box>
            </Container>
        )
     }
    
}

