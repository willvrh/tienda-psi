import React, { useState } from 'react';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, Grid, Box, makeStyles } from '@material-ui/core';

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
    },
});

export default function Item({id, title, description, price, pictureUrl}) {

    const classes = useStyles();
    
    const finalPictureUrl = '/resources/images/'+pictureUrl;

    return (
        <Grid item xs={12} sm={6} md={3} >
                <Box boxShadow={3} item xs={12} sm={6} md={3}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                component="img"
                                alt="No Image"
                                image={finalPictureUrl}
                                title="No Image"
                            />
                            <CardContent>
                                <div className={classes.cardContent}>
                                    <Typography gutterBottom variant="h6" >
                                        {title}
                                    </Typography>
           
                                    <Typography gutterBottom variant="button" >
                                        $ {price}
                                    </Typography>
                                </div>
                                <Typography dangerouslySetInnerHTML={{ __html: description }} variant="body2" color="textSecondary" component="p" />
                            </CardContent>
                        </CardActionArea>
                        <CardActions disableSpacing className={classes.cardActions}>
                            <Typography>#{id}</Typography>
                        </CardActions>
                    </Card>
                </Box>
            </Grid >
    );
}