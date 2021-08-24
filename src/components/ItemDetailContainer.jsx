import React from 'react'
import { Container, makeStyles, Box, Typography, CircularProgress } from '@material-ui/core';
import ItemDetail from './ItemDetail';
import { useState, useEffect } from 'react';
import { mockDataProducts } from '../MockData';

const useStyles = makeStyles((theme) => ({
    containerBg: {
      background : '#fff',
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
            <div className={classes.loader}>
                <Typography variant="h4" component="h4">
                    Cargando detalles ...
                </Typography>
                <CircularProgress style={{ marginTop: '40px'}} />
            </div>
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

