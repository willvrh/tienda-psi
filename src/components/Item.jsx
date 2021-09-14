import { React, useContext } from "react";
import { Link } from 'react-router-dom';
import { Card, CardActionArea, CardContent, CardMedia, Typography, Grid, Box, makeStyles, IconButton } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { AuthContext } from "../context/AuthContext";

const useStyles = makeStyles({
    root: {
        // maxWidth: 345, original width style
        maxWidth: '100%',
        transition: "transform 0.15s ease-in-out",
        "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
    },
    addFav: {
        transition: "transform 0.15s ease-in-out",
        "&:hover": { transform: "scale3d(1.3, 1.3, 1)" },
        color: 'red'
    },
    addFavDisabled: {
        transition: "transform 0.15s ease-in-out",
        "&:hover": { transform: "scale3d(1.3, 1.3, 1)" },
        color: 'gray'
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
    const authContext = useContext(AuthContext);

    return (
        <Grid item xs={12} sm={6} md={2} >
                <Box boxShadow={3} item xs={12} sm={6} md={2}>
                    <Card className={classes.root}>
                        
                        <CardActionArea>
                            <Link title={title} to={`/item/${id}/${category}`} style={{ textDecoration: 'none', color: 'black', }}>
                            <CardMedia
                                className={classes.media}
                                component="img"
                                alt={title} 
                                image={pictureUrl}
                                title={title} 
                            />
                            </Link>
                            <CardContent>
                                <div className={classes.cardContent}>
                                    
                                    <Typography className={classes.priceText} gutterBottom variant="h5" >
                                        $ {Number(price).toLocaleString('es-AR')}
                                        <Typography className={classes.idText}>
                                                {authContext.isLoggedIn()?
                                                    <FavoriteBorderIcon className={classes.addFav} onClick={() => alert("asd")}/>
                                                    :
                                                    <FavoriteBorderIcon className={classes.addFavDisabled} onClick={() => authContext.loginWithGoogle()}/>
                                                }
                                                
                                        </Typography>
                                    </Typography>
                                    
                                    <Link title={title} to={`/item/${id}/${category}`} style={{ textDecoration: 'none', color: 'black', }}> 
                                    <Typography className={classes.cardTitle} noWrap gutterBottom variant="body2">
                                        {title}
                                    </Typography>
                                    </Link>
           
                                    
                                </div>

                                <Link title={title} to={`/item/${id}/${category}`} style={{ textDecoration: 'none', color: 'black', }}> 
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
                                        <><b className={stock>10 ? classes.available : classes.low}>en stock: </b> <b>{stock}</b> unidades <div style={{float: 'right'}}>#{orderNum}</div></>        
                                    ) : (
                                        <><b className={classes.notAvailable}>sin stock</b><div style={{float: 'right'}}>#{orderNum}</div></> 
                                    )} 
                                </Box>
                                </Link>
                            </CardContent>
                        </CardActionArea>
                        

                        

                            
                    </Card>
                </Box>
                
            </Grid >
    );
}