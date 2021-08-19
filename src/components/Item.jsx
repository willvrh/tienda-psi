import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography, Grid, Box, makeStyles } from '@material-ui/core';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        // maxWidth: 345, original width style
        maxWidth: '100%',
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
        fontWeight: '600',
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
    idText: {
        float: 'right',
        fontWeight: '500',
        color: 'rgba(0,0,0,.3)'
    }
});

export default function Item({id, title, description, price, pictureUrl, category}) {

    const classes = useStyles();
    

    return (
        <Grid item xs={12} sm={6} md={2} >
                <Box boxShadow={3} item xs={12} sm={6} md={2}>
                    
                    <Card className={classes.root}>
                        <Link to={`/item/${id}/${category}`} style={{ textDecoration: 'none', color: 'black', }}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                component="img"
                                alt="No Image"
                                image={pictureUrl}
                                title="No Image"
                            />
                            <CardContent>
                                <div className={classes.cardContent}>
                                    
                                    <Typography gutterBottom variant="h5" >
                                        $ {Number(price).toLocaleString('es-AR')}
                                        <Typography className={classes.idText}>#{id}</Typography>
                                    </Typography>
                                    
                                    
                                    <Typography className={classes.cardTitle} noWrap gutterBottom variant="body2">
                                        {title}
                                    </Typography>
           
                                    
                                </div>

                                <Box
                                    component="div"
                                    className={classes.descriptionBox}>
                                    {description}
                                </Box>
                                
                            </CardContent>
                        </CardActionArea>
                        </Link>

                        <Card className={classes.root}>
                            <CardContent>
                                <ItemCount initial='1' stock='5'/>
                            </CardContent>
                        </Card>



                            
                    </Card>
                    
                </Box>
            </Grid >
    );
}