import { React, useContext } from "react";
import { Link } from 'react-router-dom';
import { Container, makeStyles, Box, List, Typography } from "@material-ui/core";
import { useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";
import Alert from "@material-ui/lab/Alert";
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import ErrorOutlineOutlinedIcon from '@material-ui/icons/ErrorOutlineOutlined';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    paddingLeft: "15px",
    paddingRight: "15px",
    margin: "0",
    clear: 'both'
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
    {   cart.getItemCount() > 0 ?
        <Alert icon={<CheckCircleOutlineOutlinedIcon fontSize="inherit" className="pulsatingIcon" />} severity="success">
            Tenés {cart.getItemCount()} items en el carrito.
        </Alert>
        :
        <Alert icon={<ErrorOutlineOutlinedIcon fontSize="inherit" className="pulsatingIcon" />} severity="error">
            No tenés items en el carrito.
            <Link to={`/`}>
              Volvé al listado de productos.
            </Link>

        </Alert>   }

      {props.children}

      {   cart.getItemCount() > 0 ?

      <Container className={classes.root}>
        <Box borderColor="text.primary" border={1} style={{width: 'auto', height: '2rem', padding: '7px 5px 0px 5px' }}>
        <Typography variant="button" >
            Total: $ {Number(cart.getCartAmount()).toLocaleString('es-AR')}
         </Typography>
        </Box>

        <List>
            {cartItems.map((cartItem) => (<CartItem cartItem={cartItem} onDelete={onDelete}/>) )}
        </List>
      </Container>

      :
      <></>}
    </>
  );
}
