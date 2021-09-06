import { React } from "react";
import { Link } from 'react-router-dom';
import { Card, CardActionArea, CardContent, CardMedia, Typography, Grid, Box, makeStyles } from '@material-ui/core';

import { getFirestore, query, where, collection, getDocs } from 'firebase/firestore';
import { getData, app } from '../firebase/Client';

const useStyles = makeStyles({
    root: {
        // maxWidth: 345, original width style
        maxWidth: '100%',
        transition: "transform 0.15s ease-in-out",
        "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
    },
    media: {
        height: '100%',
        paddingTop: '0', // 16:9
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
    },
    cardTitle: {
        fontSize: '1em',
        fontWeight: '550',
    },
    descriptionBox: {
        display: "-webkit-box",
        boxOrient: "vertical",
        lineClamp: 2,
        wordBreak: "normal",
        overflow: "hidden",
        fontWeight: '500',
        color: 'rgba(0,0,0,.6)'
    },
    categoryBox: {
        display: "-webkit-box",
        boxOrient: "vertical",
        wordBreak: "normal",
        overflow: "hidden",
        fontWeight: '700',
        textTransform: 'uppercase',
        paddingBottom: '10px',
        fontSize: '0.7em',
        color: 'rgba(0,0,0,.4)'
    },
    stockBox: {
        display: "-webkit-box",
        boxOrient: "vertical",
        wordBreak: "normal",
        overflow: "hidden",
        fontWeight: '700',
        textTransform: 'uppercase',
        paddingTop: '10px',
        fontSize: '0.7em',
    },
    idText: {
        float: 'right',
        fontSize: '0.8em',
        fontWeight: '500',
        color: 'rgba(0,0,0,.3)'
    },
    priceText: {
        fontWeight: '700',
        fontSize: '1.2em',
    },
    available: {
        color: 'green',
    },
    notAvailable: {
        color: 'red',
    },
    low: {
        color: 'orange',
    }
});

export default function Item({id, orderNum, title, description, stock, price, pictureUrl, category}) {

    const classes = useStyles();
    

    return (
        <Grid item xs={12} sm={6} md={2} >
                <Box boxShadow={3} item xs={12} sm={6} md={2}>
                    <Card className={classes.root}>
                        <Link title={title} to={`/item/${id}/${category}`} style={{ textDecoration: 'none', color: 'black', }}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                component="img"
                                alt={title} 
                                image={pictureUrl}
                                title={title} 
                            />
                            <CardContent>
                                <div className={classes.cardContent}>
                                    
                                    <Typography className={classes.priceText} gutterBottom variant="h5" >
                                        $ {Number(price).toLocaleString('es-AR')}
                                        <Typography className={classes.idText}>#{orderNum}</Typography>
                                    </Typography>
                                    
                                    
                                    <Typography className={classes.cardTitle} noWrap gutterBottom variant="body2">
                                        {title}
                                    </Typography>
           
                                    
                                </div>

                                <Box
                                    component="div"
                                    className={classes.categoryBox}>
                                    ~ {category}
                                </Box>

                                <Box
                                    component="div"
                                    className={classes.descriptionBox}>
                                    {description}
                                </Box>

                                <Box
                                    component="div"
                                    className={classes.stockBox}>
                                    { stock>0 ? (
                                        <><b className={stock>10 ? classes.available : classes.low}>en stock: </b> <b>{stock}</b> unidades</>        
                                    ) : (
                                        <><b className={classes.notAvailable}>sin stock</b></> 
                                    )} 
                                </Box>
                                
                            </CardContent>
                        </CardActionArea>
                        </Link>

                        

                            
                    </Card>
                </Box>
                
            </Grid >
    );
}