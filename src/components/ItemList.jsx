import React from 'react';
import { useEffect, useState } from 'react';

import Grid from '@material-ui/core/Grid';
import Item from './Item';
import { makeStyles } from '@material-ui/core/styles';

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
                    name: "Gestión de flotas",
                    description: "Sistema de gestión para mantenimiento de vehículos",
                    price: "10500",
                    image: 'mant.jpg',
                },
                {
                    id: "3",
                    name: "Gestión de mensajerías",
                    description: "Sistema de gestión para motomensajerías y logística",
                    price: "10500",
                    image: 'mens.jpg',
                },
                {
                    id: "4",
                    name: "Gestión de peluquerías",
                    description: "Sistema de gestión para peluquerías y salones de belleza",
                    price: "10500",
                    image: 'pelu.jpg',
                },
                {
                    id: "5",
                    name: "Gestión de PetShop",
                    description: "Sistema de gestión para petshop y peluquería canina",
                    price: "10500",
                    image: 'pet.jpg',
                },
                {
                    id: "6",
                    name: "Gestión de gestorías",
                    description: "Sistema de gestión para gestorías",
                    price: "10500",
                    image: 'pgestion.jpg',
                },
                {
                    id: "7",
                    name: "Gestión de préstamos",
                    description: "Sistema de gestión para prestamistas y financieras",
                    price: "10500",
                    image: 'prest.jpg',
                },
                {
                    id: "8",
                    name: "Presupuestos y remitos",
                    description: "Sistema simple para generar presupuestos y remitos personalizados",
                    price: "3600",
                    image: 'presu.jpg',
                },
                {
                    id: "9",
                    name: "Prontas Ventas",
                    description: "Punto de venta multi rubro para gestionar comercios",
                    price: "5900",
                    image: 'pventas.jpg',
                },
            ];
            setTimeout(() => resolve(data), 2000);
        })
            .then((dataResolve) => {
                setItems(dataResolve);
                setLoading(false);
            })
            .catch((error) => {
                console.log("err", error);
            });
    }, []);



    return (
        <>
            <Grid className={classes.root} container spacing={3}>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
            </Grid>
        </>
        
    )

}
