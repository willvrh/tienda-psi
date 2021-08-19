import React from "react";
import { makeStyles, Box, Typography, Grid, CardMedia } from "@material-ui/core";
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
        width: '100%',
        paddingTop: '56.25%', // 16:9
    },

    price: {
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
    idText: {
        float: 'right',
        fontWeight: '500',
        color: 'rgba(0,0,0,.3)'
    }
});

export default function ItemDetail(props) {
    const classes = useStyles();
    const item = props.item;

    return (
        <Grid container spacing={3}  className={classes.root}>
            <Grid item lg={8} md={8} xs={12}>
                
                <CardMedia
                    className={classes.media}
                    image={item.pictureUrl}
                    title="Imagen del producto"
                />
            </Grid>
            <Grid item lg={4} md={4} xs={12}>
                <div className={classes.content}>
                                    
                    <Typography gutterBottom variant="h5" >
                        {item.title}
                        <Typography className={classes.idText}>#{item.id}</Typography>
                    </Typography>
                    
                    
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
                    <ItemCount mt={3} initial='1' stock={item.stock}/>
                     
                </div>
            </Grid>
            </Grid>

    );
}