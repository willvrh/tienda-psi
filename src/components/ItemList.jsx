import React from 'react';
import { useEffect, useState } from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Item from './Item';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

export default function ItemList(props) {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);

    const useStyles = makeStyles({
        root: {
            // maxWidth: 345, original width style
            maxWidth: '100%',
            paddingLeft: '15px',
            paddingRight: '15px',
            display: 'flex',
            alignItems: 'flex-start',
            margin: '0',
        },
        loader: { 
            paddingTop: '40px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }
       
    });

    const classes = useStyles();
        
    useEffect(() => {
        new Promise((resolve, reject) => {
            setLoading(true);

            const data = [
                {
                    id: "1",
                    title: "Gestión de remiserías",
                    description: "Sistema de gestión para remiserías",
                    price: "10500",
                    pictureUrl: 'agencia.jpg'
                },
                {
                    id: "2",
                    title: "Gestión de flotas",
                    description: "Sistema de gestión para mantenimiento de vehículos",
                    price: "10500",
                    pictureUrl: 'mant.jpg',
                },
                {
                    id: "3",
                    title: "Gestión de mensajerías",
                    description: "Sistema de gestión para motomensajerías y logística",
                    price: "10500",
                    pictureUrl: 'mens.jpg',
                },
                {
                    id: "4",
                    title: "Gestión de peluquerías",
                    description: "Sistema de gestión para peluquerías y salones de belleza",
                    price: "10500",
                    pictureUrl: 'pelu.jpg',
                },
                {
                    id: "5",
                    title: "Gestión de PetShop",
                    description: "Sistema de gestión para petshop y peluquería canina",
                    price: "10500",
                    pictureUrl: 'pet.jpg',
                },
                {
                    id: "6",
                    title: "Gestión de gestorías",
                    description: "Sistema de gestión para gestorías",
                    price: "10500",
                    pictureUrl: 'pgestion.jpg',
                },
                {
                    id: "7",
                    title: "Gestión de préstamos",
                    description: "Sistema de gestión para prestamistas y financieras",
                    price: "10500",
                    pictureUrl: 'prest.jpg',
                },
                {
                    id: "8",
                    title: "Presupuestos y remitos",
                    description: "Sistema simple para generar presupuestos y remitos personalizados",
                    price: "3600",
                    pictureUrl: 'presu.jpg',
                },
                {
                    id: "9",
                    title: "Prontas Ventas",
                    description: "Punto de venta multi rubro para gestionar comercios",
                    price: "5900",
                    pictureUrl: 'pventas.jpg',
                },
            ];
            setTimeout(() => resolve(data), 0);
        })
            .then((dataResolve) => {
                setItems(dataResolve);
                setLoading(false);
            })
            .catch((error) => {
                console.log("err", error);
            });
    }, []);


    if (loading) {
        return (
            <div className={classes.loader}>
                <Typography variant="h4" component="h4">
                    Cargando ...
                </Typography>
                <CircularProgress style={{ marginTop: '40px'}} />
            </div>
        )
    } else {
        return (
            <>
                <Grid className={classes.root} container spacing={3}>
                    {items.map((item) => (<Item {...item} />) )}
                </Grid>
            </>
            
        )
    }
}
