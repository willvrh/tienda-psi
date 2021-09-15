import { React, useContext } from "react";
import { Link } from 'react-router-dom';
import { Container, makeStyles, Box, List, Grid, Divider, Button } from "@material-ui/core";
import { useState, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { WishlistContext } from "../context/WishlistContext";
import WishlistItem from "./WishlistItem";
import Alert from "@material-ui/lab/Alert";
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import ErrorOutlineOutlinedIcon from '@material-ui/icons/ErrorOutlineOutlined';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

import { collection, addDoc, Timestamp, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase/FirebaseClient';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    paddingLeft: "15px",
    paddingRight: "15px",
    margin: "0",
    clear: 'both'
  },
  gridParent: {
    maxWidth: "100%",
    paddingLeft: "15px",
    paddingRight: "15px",
    margin: "0",
  },
  price: {
    fontSize: '0.9em',
    fontWeight: '600',
  },
  description: {
    display: "-webkit-box",
    boxOrient: "vertical",
    wordBreak: "normal",
    overflow: "hidden",
    fontWeight: '500',
    color: 'rgba(0,0,0,.6)',
    paddingBottom: '10px',
    paddingTop: '10px',

  },
  stock: {
    display: "-webkit-box",
    boxOrient: "vertical",
    lineClamp: 2,
    wordBreak: "normal",
    overflow: "hidden",
    fontWeight: '500',
    paddingTop: '10px',
    color: 'rgba(0,0,0,.6)',
    paddingBottom: '10px',
  },
  category: {
    display: "-webkit-box",
    boxOrient: "vertical",
    wordBreak: "normal",
    overflow: "hidden",
    textTransform: 'uppercase',
    fontWeight: '700',
    paddingBottom: '15px',
    color: 'rgba(0,0,0,.4)'
  },
}));

export default function Wishlist(props) {
  const classes = useStyles();
  const authContext = useContext(AuthContext);
  const wishlistContext = useContext(WishlistContext);

  const userID = authContext.auth.currentUser == null? null : authContext.auth.currentUser.uid;

  const [items, setItems] = useState([]);

  const onDelete = (wishItemID) => {
    wishlistContext.deleteItem(wishItemID).then(value => {
      getWishlistItems();
    });
    
  }

  const onClear = () => {
    wishlistContext.clearWishlist().then(value => {
      getWishlistItems();
    });
  }

  const getWishlistItems = async () => {
    const filterQuery = query(collection(db, "wishlist"), where("uid", '==', userID));
    const orderSnapshot = await getDocs(filterQuery);
    let count = 1; //Usado solo para mostrar un contador de orders -> orderNum
    const itemList = orderSnapshot.docs.map(doc => ({id: doc.id, orderNum: count++, ...doc.data()}));
    setItems(itemList);
};

  useEffect(() => {
    
    getWishlistItems();
}, []);

  return (
    <>
      {items.length > 0 ?
        <Alert icon={<CheckCircleOutlineOutlinedIcon fontSize="inherit" className="pulsatingIcon" />} severity="success">
          Tenés {items.length} {items.length > 1 ? "items" : "item"} en tu lista de favoritos.
        </Alert>
        :
        <Alert icon={<ErrorOutlineOutlinedIcon fontSize="inherit" className="pulsatingIcon" />} severity="error">
          No tenés items en tu lista de favoritos.
          <Link style={{marginLeft: '20px'}} to={`/`}>
            Volvé al listado de productos.
          </Link>

        </Alert>}

      {props.children}

      {items.length > 0 ?

        <Container className={classes.root}>


          <Grid container spacing={3} className={classes.gridParent}>
            <Grid item lg={12} md={12} xs={12}>
            <Box boxShadow={3} item lg={8} md={8} xs={12} style={{padding: '15px'}}>
              <List>
                {items.map((item) => (<><WishlistItem item={item} onDelete={onDelete} /><Divider variant="inset" component="li" /></>))}
              </List>

                <Button style={{ marginTop: '12px' }} onClick={onClear} fullWidth variant="outlined">
                  <HighlightOffIcon style={{color: 'red', marginRight: '15px'}}/> Vaciar lista de favoritos
                </Button>
              </Box>

            </Grid>

          </Grid>


        </Container>
        
        :
        <></>}
    </>
  );
}
