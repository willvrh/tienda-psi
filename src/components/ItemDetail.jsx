import {React, useEffect, useState, useContext} from "react";
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext'
import { makeStyles, Box, Typography, Grid, Button, Divider, Chip, Avatar  } from "@material-ui/core";
import ItemCount from "./ItemCount";

const useStyles = makeStyles({
    root: {
        display: "flex",
    },
    content: {
        flex: "1 0 auto",
        flexDirection: "column"
    },
    media: {
        maxHeight: '300px',
        width: 'auto',
        transition: "transform 0.15s ease-in-out",
        "&:hover": { transform: "scale3d(1.08, 1.08, 1)" },
    },

    price: {
        fontSize: '1.2em',
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
    idText: {
        float: 'right',
        fontWeight: '500',
        color: 'rgba(0,0,0,.3)'
    },
    available: {
        color: 'green',
    },
    notAvailable: {
        color: 'red',
    }
});

export default function ItemDetail(props) {
    const classes = useStyles();
    const item = props.item;

    const cart = useContext(CartContext);

    const [itemQuantity, setQuantity] = useState(0);
    const [stockAvailable, setStockAvailable] = useState(item.stock>0);
    const [finish, setFinish] = useState(false);

    useEffect(() => {
        itemQuantity > 0 ? setFinish(true) : setFinish(false);
    }, [itemQuantity]);

    const onAdd = (qty) => {
        if (qty<=item.stock) {
            setQuantity(qty)
            cart.addItem(item, qty);
        }
    }

    return (
        <Grid container spacing={3}  className={classes.root}>
            <Grid item lg={8} md={8} xs={12} style={{textAlign: "center"}}>
                <img className={classes.media} src={item.pictureUrl}></img>
            </Grid>
            <Grid item lg={4} md={4} xs={12}>
                <div className={classes.content}>
                                    
                    <Typography gutterBottom variant="h5" >
                        {item.title}
                    </Typography>

                    
                    <Link to={`/category/${item.category}`} style={{ textDecoration: 'none', color: 'black', }}>
                        <Box
                            component="div"
                            className={classes.category}>
                            
                            <Chip
                                    variant="outlined"
                                    size="small"
                                    style={{marginBottom: '15px',}}
                                    color="primary"
                                    avatar={<Avatar>{((item.category || "").charAt(0) || "").toUpperCase()}</Avatar>}
                                    label={item.category}
                                />
                            <Divider />
                        </Box>    
                    </Link>
                    
                    

                    
                    <Typography className={classes.price} noWrap gutterBottom variant="body2">
                        $ {Number(item.price).toLocaleString('es-AR')}
                    </Typography>

                    <Box
                        component="div"
                        className={classes.description}>
                            <Typography className={classes.description} gutterBottom variant="body2">
                            {item.description}
                            </Typography>
                            <Divider/>
                            <Typography className={classes.stock} gutterBottom variant="body2">
                                { stockAvailable ? (
                                        <><b className={classes.available}>Stock disponible:</b> <b>{item.stock}</b> unidades</>        
                                    ) : (
                                        <><b className={classes.notAvailable}>Stock no disponible</b></> 
                                )}    
                            </Typography>
                            <Divider />
                    </Box>    
                    <br/>
                    
                    { !finish && stockAvailable && ( <ItemCount mt={3} initial='1' stock={item.stock} onAdd={onAdd}/> ) }
                    
                    { finish && (
                    <Link to={`/cart`} style={{ textDecoration: 'none', color: 'black', }}>
                        <Button style={{marginTop: '8px'}} fullWidth variant="outlined">
                         Terminar compra
                        </Button>
                    </Link>)
                    }
                </div>
            </Grid>
            </Grid>

    );
}