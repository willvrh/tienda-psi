import { React, useEffect, useState } from 'react';
import { makeStyles, Grid, Box } from '@material-ui/core';
import { mockDataProducts } from '../MockData';
import { useLocation } from "react-router";
import Item from './Item';
import Skeleton from '@material-ui/lab/Skeleton';


import { query, where, collection, getDocs } from 'firebase/firestore';
import { getData } from '../firebase/client';


export default function ItemList({category}) {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
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
        

        const getItems = async () => {
            let operator = "==";
            let searchCat = category;
            if (!(category != "todas" && category != "")) {
                operator = "!=";
                searchCat = "";
            }
            const filterQuery = query(collection(getData(), "productos"), where("category", operator, searchCat));
            const itemSnapshot = await getDocs(filterQuery);

            let count = 1; //Usado solo para mostrar un contador de items -> orderNum
            const itemList = itemSnapshot.docs.map(doc => ({id: doc.id, orderNum: count++, ...doc.data()}));

            setItems(itemList);
            setLoading(false);
        };

        setLoading(true);
        getItems();

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
