import React, { useState } from 'react';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography, Paper, Grid, IconButton, makeStyles } from '@material-ui/core';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles ((theme) => ({
    root: {
     maxWidth: 345,
     },
    buttonsDiv: {
      flexGrow: 1,
    },
    paper: {
        //padding: theme.spacing(2),
        padding: '2px',
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minHeight: '30px',
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },

  
}));

export default function ItemCount(props) {

    const classes = useStyles();

    const [stock, setStock] = useState(Number(props.stock));
    const getValidInitial = (value) => {
        let validInitial = 0;
        return value < stock ? validInitial = value : validInitial = stock;
    }

    const [initial, setInitial] = useState(getValidInitial(Number(props.initial)));

    const addToCart = () => {
        if (initial <= stock) {
            props.onAdd(initial);
        }
    }    

    const addOne = () => {
        if (initial < stock) {setInitial(initial+1)};
    }

    const substractOne = () => {
        if (initial > 1) {setInitial(initial-1)};
    } 

    return (
        <Card className={classes.root}>
        <CardActionArea>
            <CardMedia
            component="img"
            alt="Imagen del producto"
            height="140"
            image={require('../assets/img/not_available.jpg').default}
            title="Imagen del producto"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                Producto
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                Descripción
            </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Grid container spacing={3}>
                <Grid item xs>
                    <Paper className={classes.paper}>
                        <IconButton onClick={substractOne} size="small" aria-label="restar 1" color="inherit">
                            <RemoveIcon />
                        </IconButton>                        
                    </Paper>
                </Grid>
                <Grid item xs>
                    <Paper className={classes.paper}>
                        <Typography variant="button" >
                            {initial}
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs>
                    <Paper className={classes.paper}>
                        <IconButton onClick={addOne} size="small" aria-label="agregar 1" color="inherit">
                            <AddIcon />
                        </IconButton>  
                    </Paper>
                </Grid>
            </Grid>
        </CardActions>

        <CardActions>
            <Button fullWidth={true} size="small" color="primary" onClick={addToCart}>
            Agregar al carrito
            </Button>
        </CardActions>

        </Card>
    );
  }