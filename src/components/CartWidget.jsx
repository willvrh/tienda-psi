import { useContext } from 'react';
import { CartContext } from '../context/CartContext'
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';

export default function CartWidget() {

    const cart = useContext(CartContext);
    
    return (
        <>
            <IconButton aria-label="ver contenido del carrito" color="inherit">
            <Badge badgeContent={cart.items.length} color="secondary">
                <ShoppingCartIcon />
            </Badge>
            </IconButton>
        </>
    );
  }