import { React } from "react";
import { Link } from 'react-router-dom';
import { IconButton, ListItem, ListItemSecondaryAction, ListItemAvatar, Typography, ListItemText, Avatar, Chip} from '@material-ui/core';
import DeleteIcon from "@material-ui/icons/Delete";

export default function CartItem(props) {

    const cartItem = props.cartItem;

    return (
      
        <ListItem key={cartItem.item.id} button='true' style={{border: '1px'}}> 
            <ListItemAvatar>
              <Avatar alt={cartItem.item.title} src={cartItem.item.pictureUrl}/>
            </ListItemAvatar>
            <Link to={`/item/${cartItem.item.id}/${cartItem.item.category}`} style={{ textDecoration: 'none', color: 'black', }}>
            <ListItemText
              primary={<>{cartItem.item.title} 
              <Typography variant="button" style={{marginLeft: '10px'}} >
                ${Number(cartItem.item.price*cartItem.quantity).toLocaleString('es-AR')} (${Number(cartItem.item.price).toLocaleString('es-AR')} c/u)
              </Typography>  <Chip
                variant="outlined"
                size="small"
                color="primary"
                style={{borderColor:'green', marginLeft: '15px'}}
                avatar={<Avatar style={{backgroundColor:'green'}}>X</Avatar>}
                label={cartItem.quantity}
            /></>}
              secondary={cartItem.item.description}
            />
            </Link>
           
           {props.type == "cart"?
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="eliminar" onClick={ () => {props.onDelete(cartItem.item.id)}}>
                <DeleteIcon style={{color: 'red',}}/>
              </IconButton>
            </ListItemSecondaryAction> : <></>
           }
            
            
          </ListItem>
    );
}