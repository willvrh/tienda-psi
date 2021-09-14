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

export default function Cart(props) {
  const classes = useStyles();
  const cart = useContext(CartContext);
  const authContext = useContext(AuthContext);
  const defaultUID = authContext.auth.currentUser == null? null : authContext.auth.currentUser.uid;

  const [cartItems, setCartItems] = useState(cart.cart);
  const [formOpen, setFormOpen] = useState(false);
  const [creatingOrder, setCreatingOrder] = useState(false);
  const [buyStatus, setBuyStatus] = useState({isFinished: false, orderId: ''});

  useEffect(() => {
    setCartItems(cart.cart);
  }, [cart.cart])

  const onDelete = (id) => {
    cart.removeItem(id);
    setCartItems(cart.cart);
  }

  const onBuyFinish = async (buyerData) => {
    setCreatingOrder(true);

    delete buyerData.repeatEmail;
    const order = {
      buyer: buyerData,
      items: cartItems,
      uid: defaultUID,
      date: Timestamp.fromDate(new Date()),
      total: cart.getCartAmount()
    };

    const orderReference = await addDoc(collection(db, "ordenes"), order);
    const orderId = orderReference._key.path.segments[1];
    
    setBuyStatus({isFinished: true, orderId: orderId})
  };

  return (
    <>
      {cart.getItemCount() > 0 ?
        <Alert icon={<CheckCircleOutlineOutlinedIcon fontSize="inherit" className="pulsatingIcon" />} severity="success">
          Tenés {cart.getItemCount()} {cart.getItemCount() > 1 ? "items" : "item"} en el carrito.
        </Alert>
        :
        <Alert icon={<ErrorOutlineOutlinedIcon fontSize="inherit" className="pulsatingIcon" />} severity="error">
          No tenés items en el carrito.
          <Link style={{marginLeft: '20px'}} to={`/`}>
            Volvé al listado de productos.
          </Link>

        </Alert>}

      {props.children}

      {cart.getItemCount() > 0 ?

        <Container className={classes.root}>


          <Grid container spacing={3} className={classes.gridParent}>
            <Grid item lg={8} md={8} xs={12}>
            <Box boxShadow={3} item lg={8} md={8} xs={12} style={{padding: '15px'}}>
              <List>
                {cartItems.map((cartItem) => (<><CartItem type='cart' cartItem={cartItem} onDelete={onDelete} /><Divider variant="inset" component="li" /></>))}
              </List>

                <Button style={{ marginTop: '12px' }} onClick={ ()=> cart.clear()}fullWidth variant="outlined">
                  <HighlightOffIcon style={{color: 'red', marginRight: '15px'}}/> Vaciar carrito
                </Button>
              </Box>

            </Grid>

            <Grid item lg={4} md={4} xs={12} >
            <Box boxShadow={3} item lg={4} md={4} xs={12} style={{padding: '15px'}}>

              <div className={classes.content}>

                <Typography gutterBottom variant="h5" >
                <ShoppingCartIcon style={{paddingRight: '15px'}}/>Detalle del carrito
                </Typography>

                <Divider />
                <br />
                <Box
                  component="div"
                  className={classes.description}>
                  <Typography className={classes.description} gutterBottom variant="body2">
                    <b>Comprando como:</b>  <br/>{authContext.isLoggedIn()? <>{authContext.getUserDisplayName()}<br/>{authContext.getEmail()}</>:<>Invitado</>}
                  </Typography>
                  
                  <Typography className={classes.description} gutterBottom variant="body2">
                    Tenés {cart.getItemCount()} {cart.getItemCount() > 1 ? "items" : "item"} en el carrito.
                  </Typography>
                </Box>

                <Typography className={classes.price} noWrap gutterBottom variant="button">
                  Total: $ {Number(cart.getCartAmount()).toLocaleString('es-AR')}
                </Typography>



                <Button style={{ marginTop: '12px', }} onClick={ ()=> setFormOpen(true)}fullWidth variant="outlined">
                <CheckCircleOutlineIcon style={{color: 'green', marginRight: '15px'}}/>Finalizar compra
                </Button>


              </div>
              </Box>
            </Grid>
          </Grid>


          <BuyerForm 
            open={formOpen}
            setFormOpen={setFormOpen}
            onBuyFinish={onBuyFinish}
            creatingOrder={creatingOrder}
            buyStatus={buyStatus}
            currentUser={authContext.auth.currentUser}
            />

          <Dialog 
            onClose={()=>cart.clear()}
            open={buyStatus.isFinished}>
            <DialogTitle id="simple-dialog-title">Órden de compra finalizada</DialogTitle>
            <DialogContent>
             <DialogContentText id="alert-dialog-description">
              Tu órden de compra fue registrada correctamente, podés consultar la misma con el siguiente ID: <br/><br/><b>{buyStatus.orderId}</b>
             </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={()=>cart.clear()} color="primary" autoFocus>
                Cerrar
              </Button>
            </DialogActions>
          </Dialog>

        </Container>
        
        :
        <></>}
    </>
  );
}
