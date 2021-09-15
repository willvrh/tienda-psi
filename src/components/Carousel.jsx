import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Typography } from '@material-ui/core'

import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/FirebaseClient';


export default function CarouselContainer() {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const getCategories = async () => {
          const categoriesCollection = collection(db, 'categorias');
          const categoriesSnapshot = await getDocs(categoriesCollection);
          setCategories(categoriesSnapshot.docs.map(doc => ({...doc.data()})));
        };
        getCategories();
    }, []);

    return (
        <Carousel className="carousel"
        indicators={false}>
            {
                categories.map( (cat, i) => <Item key={i} cat={cat} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <Paper  className="item"
        style={{
            backgroundColor: 'GhostWhite',
            color: 'black',
        }}
        >
            <Typography gutterBottom variant="h5" >
                        {props.cat.name}
                    </Typography>
                    <Typography noWrap gutterBottom variant="body2">
                    {props.cat.description}
                    </Typography>

            <Link to={`/category/${props.cat.shortname}`} style={{ textDecoration: 'none', color: 'black', }}>
                <Button className="button">
                    EXPLORAR CATEGORÍA
                </Button>
            </Link>
        </Paper>
    )
}