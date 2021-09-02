import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext'
import {Badge, IconButton} from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export default function CartWidget() {

    const cart = useContext(CartContext);
   
    if (cart.getItemCount()>0) {
        return (
            <>
                <Link to={`/cart`} style={{ textDecoration: 'none', color: 'white'}}>
                    <IconButton aria-label="ver contenido del carrito" color="inherit">
                    <Badge badgeContent={cart.getItemCount()} color="secondary">
                        <ShoppingCartIcon />
                    </Badge>
                    </IconButton>
                </Link>
            </>
        );
    } else {
        return (<></>);
    }
    
  }