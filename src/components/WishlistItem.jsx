import { React, useContext } from "react";
import { Link } from 'react-router-dom';
import { IconButton, ListItem, ListItemSecondaryAction, ListItemAvatar, Typography, ListItemText, Avatar, Chip} from '@material-ui/core';
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from '@material-ui/icons/Add';
import { CartContext } from '../context/CartContext'

export default function WishlistItem(props) {

    const item = props.item;
    const cart = useContext(CartContext);
    
    const onAdd = () => {
      cart.addItem(item.item, 1);
      props.onDelete(item.id);
  }

    return (
      
        <ListItem key={item.item.id} button='true' style={{border: '1px'}}> 
            <ListItemAvatar>
              <Avatar alt={item.item.title} src={item.item.pictureUrl}/>
            </ListItemAvatar>
            <Link to={`/item/${item.item.id}/${item.item.category}`} style={{ textDecoration: 'none', color: 'black'}}>
            <ListItemText
              primary={<>{item.item.title} 
              <Typography variant="button" style={{marginLeft: '10px'}} >
                ${Number(item.item.price*item.quantity).toLocaleString('es-AR')} (${Number(item.item.price).toLocaleString('es-AR')} c/u)
              </Typography>  <itemChip
                variant="outlined"
                size="small"
                color="primary"
                style={{borderColor:'green', marginLeft: '15px'}}
                avatar={<Avatar style={{backgroundColor:'green'}}>X</Avatar>}
                label={item.quantity}
            /></>}
              secondary={item.item.description}
            />
            </Link>
           
            <ListItemSecondaryAction>
              <IconButton style={{marginRight: '15px'}} edge="end" aria-label="agregar al carrito" onClick={onAdd}>
                <AddIcon style={{color: 'green'}}/>
              </IconButton>
              <IconButton edge="end" aria-label="eliminar" onClick={ () => {props.onDelete(item.id)}}>
                <DeleteIcon style={{color: 'red'}}/>
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
    );
}