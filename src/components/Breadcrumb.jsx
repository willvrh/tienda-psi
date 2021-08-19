import React from 'react';
import { Breadcrumbs, Link, Typography } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { useLocation } from 'react-router';
export default function Breadcrumb() {
    let location = useLocation().pathname;

    const pathArray = location.split("/");
    console.log(pathArray)
    if (location == "/") {
        return (
            <Breadcrumbs style={{float: 'right', paddingRight: '30px', paddingTop: '10px'}} separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                <Link color="inherit">
                    Inicio
                </Link>
            </Breadcrumbs>
            );
    } 
    

    if (pathArray[1]=="item") {
        return (
            <Breadcrumbs style={{float: 'right', paddingRight: '30px', paddingTop: '10px'}} separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                <Link color="inherit">
                    Categoría
                </Link>
            <Typography color="textPrimary">{pathArray[3]}</Typography>
            </Breadcrumbs>
        );
    }

    if (pathArray[1]=="category") {
        return (
            <Breadcrumbs style={{float: 'right', paddingRight: '30px', paddingTop: '10px'}} separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                <Link color="inherit">
                    Categoría
                </Link>
            <Typography color="textPrimary">{pathArray[2]}</Typography>
            </Breadcrumbs>
        );
    }

    
}   
