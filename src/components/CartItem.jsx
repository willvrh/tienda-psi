import { React } from "react";
import { IconButton, ListItem, ListItemSecondaryAction, ListItemAvatar, Typography, ListItemText, Avatar, Chip} from '@material-ui/core';
import DeleteIcon from "@material-ui/icons/Delete";

export default function CartItem(props) {

    const cartItem = props.cartItem;

    return (
        <ListItem button key={cartItem.item.id}> 
            <ListItemAvatar>
              <Avatar alt={cartItem.item.title} src={cartItem.item.pictureUrl}/>
            </ListItemAvatar>
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
           
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="eliminar" onClick={ () => {props.onDelete(cartItem.item.id)}}>
                <DeleteIcon style={{color: 'red',}}/>
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
    );
}