
import { React, useState } from 'react';
import { ButtonGroup, Button, Typography, Paper, makeStyles } from '@material-ui/core';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles({
    root: {
    },
    buttons: {
        justifyContent: 'center',
        display: 'flex'
    },
});

export default function ItemCount(props) {

    const classes = useStyles();

    const [stock, setStock] = useState(Number(props.stock));

    const getValidInitial = (value) => {
        let validInitial = 0;
        return value < stock ? validInitial = value : validInitial = stock;
    }

    const [initial, setInitial] = useState(getValidInitial(Number(props.initial)));

    const addOne = () => {
        if (initial < stock) {setInitial(initial+1)};
    }

    const substractOne = () => {
        if (initial > 1) {setInitial(initial-1)};
    } 

    
  return (
        <>
            <ButtonGroup className={classes.buttons} fullWidth size="small" aria-label="large outlined primary button group">
                <Button
                    aria-label="reduce"
                    color="primary"
                    onClick={() => {
                        substractOne();
                    }}
                >
                    <RemoveIcon fontSize="small" />
                </Button>
                <Paper className={classes.buttons}>
                    <Typography variant="button" >
                        {initial}
                    </Typography>
                </Paper>
                <Button
                    aria-label="increase"
                    color="primary"
                    onClick={() => {
                        addOne();
                    }}
                >
                    <AddIcon fontSize="small" />
                </Button>
            </ButtonGroup>
            <Button style={{marginTop: '8px'}} fullWidth variant="outlined" onClick={() => props.onAdd(initial)}>
                Agregar al Carrito
            </Button>
         </>
);
}