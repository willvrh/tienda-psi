import {ReactChild, useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import { makeStyles, Box, Typography, Grid, Button} from "@material-ui/core";
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
        color: 'rgba(0,0,0,.6)'
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
    }
});

export default function ItemDetail(props) {
    const classes = useStyles();
    const item = props.item;

    const [itemQuantity, setQuantity] = useState(0);
    const [finish, setFinish] = useState(false);

    useEffect(() => {
        itemQuantity > 0 ? setFinish(true) : setFinish(false);
    }, [itemQuantity]);

    const onAdd = (qty) => {
        if (qty<=item.stock) {
            setQuantity(qty)
        }
    }

    return (
        <Grid container spacing={3}  className={classes.root}>
            <Grid item lg={8} md={8} xs={12} style={{textAlign: "center"}}>
                <img style={{maxHeight: '300px', width: 'auto'}} src={item.pictureUrl}></img>
            </Grid>
            <Grid item lg={4} md={4} xs={12}>
                <div className={classes.content}>
                                    
                    <Typography gutterBottom variant="h5" >
                        {item.title}
                        <Typography className={classes.idText}>#{item.id}</Typography>
                    </Typography>
                    <Box
                        component="div"
                        className={classes.category}>
                            <Typography className={classes.category} noWrap gutterBottom variant="body2">
                            ~ {item.category}
                    </Typography>
                        
                    </Box>    

                    
                    <Typography className={classes.price} noWrap gutterBottom variant="body2">
                        $ {Number(item.price).toLocaleString('es-AR')}
                    </Typography>

                    <Box
                        component="div"
                        className={classes.description}>
                            <Typography className={classes.description} noWrap gutterBottom variant="body2">
                            {item.description}
                    </Typography>
                        
                    </Box>    
                    <br/>
                    
                    { !finish && ( <ItemCount mt={3} initial='1' stock={item.stock} onAdd={onAdd}/> ) }
                    
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