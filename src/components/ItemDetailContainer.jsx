import React from 'react'
import { Container, makeStyles, Box, Grid } from '@material-ui/core';
import ItemDetail from './ItemDetail';
import { useState, useEffect } from 'react';
import { mockDataProducts } from '../MockData';
import Skeleton from '@material-ui/lab/Skeleton';
import Alert from '@material-ui/lab/Alert';

import { getFirestore, query, where, collection, getDocs } from 'firebase/firestore';
import { getData } from '../firebase/client';

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
        

        const getItem = async () => {
           
            const filterQuery = query(collection(getData(), "productos"), where("__name__", "==", itemId));
            const itemSnapshot = await getDocs(filterQuery);
            setItem(itemSnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))[0]);
            setLoading(false);
        };

        setLoading(true);
        getItem();

    }, []);


    if (loading) {
        return (
            <>
            {props.children}
            <Container className={classes.containerBg}>
                
                <Box my={3}>
                <Grid container spacing={3}  className={classes.root}>
            <Grid item lg={8} md={8} xs={12} style={{textAlign: "center"}}>
            <Skeleton variant="rect" height={400} />
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
            </>
        )
    } else {
        return (
            <>
            
            { item.stock<1 && (<Alert severity="warning">El producto que estás viendo se encuentra sin stock.</Alert>)}
            {props.children}
            <Container className={classes.containerBg}>
                <Box my={3}>
                    <ItemDetail item={item}/>
                </Box>
            </Container>
            </>
        )
     }
    
}

