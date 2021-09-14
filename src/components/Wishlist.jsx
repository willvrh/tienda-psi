import { React, useContext } from "react";
import { Link } from 'react-router-dom';
import { Container, makeStyles, Box, List, Typography, Grid, Divider, Button } from "@material-ui/core";
import { useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";
import CartItem from "./CartItem";
import BuyerForm from "./BuyerForm";
import Alert from "@material-ui/lab/Alert";
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import ErrorOutlineOutlinedIcon from '@material-ui/icons/ErrorOutlineOutlined';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { collection, addDoc, Timestamp } from 'firebase/firestore';
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
  const [wishlistItems, setWishlistItems] = useState([]);
  

  

  return (
    <>
      {wishlistItems.length > 0 ?
        <Alert icon={<CheckCircleOutlineOutlinedIcon fontSize="inherit" className="pulsatingIcon" />} severity="success">
          Tenés {wishlistItems.length} {wishlistItems.length > 1 ? "items" : "item"} en tu lista de favoritos.
        </Alert>
        :
        <Alert icon={<ErrorOutlineOutlinedIcon fontSize="inherit" className="pulsatingIcon" />} severity="error">
          No tenés items en tu lista de favoritos.
          <Link style={{marginLeft: '20px'}} to={`/`}>
            Volvé al listado de productos.
          </Link>

        </Alert>}

      {props.children}

      {wishlistItems.length > 0 ?

        <Container className={classes.root}>


          <Grid container spacing={3} className={classes.gridParent}>
            <Grid item lg={8} md={8} xs={12}>
            <Box boxShadow={3} item lg={8} md={8} xs={12} style={{padding: '15px'}}>
              <List>
                {wishlistItems.map((favItem) => (<><CartItem type='cart' cartItem={favItem} /><Divider variant="inset" component="li" /></>))}
              </List>

                <Button style={{ marginTop: '12px' }} fullWidth variant="outlined">
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
