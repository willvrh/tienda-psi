import { React, useContext } from "react";
import { Link } from 'react-router-dom';
import { Container, makeStyles, Box, List, Typography, Grid, Divider, Chip, Avatar, Button } from "@material-ui/core";
import { useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";
import Alert from "@material-ui/lab/Alert";
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import ErrorOutlineOutlinedIcon from '@material-ui/icons/ErrorOutlineOutlined';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

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
    lineClamp: 2,
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

  const [cartItems, setCartItems] = useState(cart.cart);

  useEffect(() => {
    setCartItems(cart.cart);
  }, [cart.cart])

  const onDelete = (id) => {
    cart.removeItem(id);
    setCartItems(cart.cart);
  }

  return (
    <>
      {cart.getItemCount() > 0 ?
        <Alert icon={<CheckCircleOutlineOutlinedIcon fontSize="inherit" className="pulsatingIcon" />} severity="success">
          Tenés {cart.getItemCount()} {cart.getItemCount() > 1 ? "items" : "item"} en el carrito.
        </Alert>
        :
        <Alert icon={<ErrorOutlineOutlinedIcon fontSize="inherit" className="pulsatingIcon" />} severity="error">
          No tenés items en el carrito.
          <Link to={`/`}>
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
                {cartItems.map((cartItem) => (<><CartItem cartItem={cartItem} onDelete={onDelete} /><Divider variant="inset" component="li" /></>))}
              </List>
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
                    Tenés {cart.getItemCount()} {cart.getItemCount() > 1 ? "items" : "item"} en el carrito.
                  </Typography>
                </Box>

                <Typography className={classes.price} noWrap gutterBottom variant="button">
                  Total: $ {Number(cart.getCartAmount()).toLocaleString('es-AR')}
                </Typography>



                <Button style={{ marginTop: '12px' }} fullWidth variant="outlined">
                  Finalizar compra
                </Button>


              </div>
              </Box>
            </Grid>
          </Grid>



        </Container>

        :
        <></>}
    </>
  );
}
