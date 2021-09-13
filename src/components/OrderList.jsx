import { React, useEffect, useState, useContext } from 'react';
import { makeStyles, Grid, Box } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import { AuthContext } from "../context/AuthContext";
import { query, where, collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/FirebaseClient';
import PreviousOrder from './PreviousOrder';


export default function OrderList(props) {

    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    const authContext = useContext(AuthContext);
    const userID = authContext.auth.currentUser == null? null : authContext.auth.currentUser.uid;


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

        const getOrders = async () => {
            const filterQuery = query(collection(db, "ordenes"), where("uid", '==', userID));
            const orderSnapshot = await getDocs(filterQuery);
            let count = 1; //Usado solo para mostrar un contador de orders -> orderNum
            const orderList = orderSnapshot.docs.map(doc => ({id: doc.id, orderNum: count++, ...doc.data()}));
            setOrders(orderList);
            setLoading(false);
        };

        setLoading(true);
        getOrders();

    }, []);


    if (loading) {
        return (
            
            <>
             <Grid className={classes.root} container spacing={3}>
                {new Array(12).fill(1).map((item) => (
                <>
                <Grid item xs={12} sm={12} md={12} >
                <Box boxShadow={3} item xs={12} sm={12} md={12}>
                <Skeleton variant="rect" height={200} />
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
                {props.children}
                <Grid className={classes.root} container spacing={3}>
                    {orders.map((order) => (<PreviousOrder order={order}/>) )}
                </Grid>
            </>
        )
    }
}
