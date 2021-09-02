import React from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { Breadcrumbs, Typography, capitalize, makeStyles } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';


export default function Breadcrumb() {
    let location = useLocation().pathname;
    const pathArray = location.split("/");


    const useStyles = makeStyles({
        breadcrumb: {
            float: 'right',
            position: 'relative',
            right: '32px',
            paddingTop: '10px'
        },
        breadLink: {
            textDecoration: 'none',
            color: 'black'
        },
    });
    const classes = useStyles();

    if (location === "/") {
        return (
            <Breadcrumbs className={classes.breadcrumb} separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                <Link color="inherit" className={classes.breadLink}>
                    Categoría
                </Link>
                <Link to={`/category/todas`} className={classes.breadLink}>
                    <Typography color="textPrimary">Todas</Typography>
                </Link>
            </Breadcrumbs>
            );
    } 

    if (pathArray[1] === "item") {
        return (<>
            
            <Breadcrumbs className={classes.breadcrumb} separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                <Link color="inherit" className={classes.breadLink}>
                    Categoría
                </Link>
                <Link to={`/category/${pathArray[3]}`} className={classes.breadLink}>
                    <Typography color="textPrimary">{capitalize(pathArray[3])}</Typography>
                </Link>
            </Breadcrumbs>
            </>
        );
    }

    if (pathArray[1] === "category") {
        return (
            <Breadcrumbs className={classes.breadcrumb} separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                <Link color="inherit" className={classes.breadLink}>
                    Categoría
                </Link>
                <Link to={`/category/${pathArray[2]}`} className={classes.breadLink}>
                    <Typography color="textPrimary">{capitalize(pathArray[2])}</Typography>
                </Link>
            </Breadcrumbs>
        );
    }

    if (location === "/cart") {
        return (
            <Breadcrumbs className={classes.breadcrumb} separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                <Link color="inherit" className={classes.breadLink}>
                    Carrito
                </Link>
            </Breadcrumbs>
            );
    }    
    

    
}   
