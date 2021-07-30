import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';

export default function CartWidget() {

    const cartItems = [];

    return (
        <MenuItem>
            <IconButton aria-label="ver contenido del carrito" color="inherit">
            <Badge badgeContent={cartItems.length} color="secondary">
                <ShoppingCartIcon />
            </Badge>
            </IconButton>
        </MenuItem>
    );
  }