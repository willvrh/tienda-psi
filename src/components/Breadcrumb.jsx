import React from 'react';
import { useLocation } from 'react-router';
import { Breadcrumbs, Link, Typography, capitalize } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';


export default function Breadcrumb() {
    let location = useLocation().pathname;

    const pathArray = location.split("/");

    if (location == "/") {
        return (
            <Breadcrumbs style={{float: 'right', position: 'relative', right: '32px', paddingTop: '10px'}} separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                <Link color="inherit">
                    Categoría
                </Link>
                <Link href={`/category/todas`}>
                    <Typography color="textPrimary">Todas</Typography>
                </Link>
            </Breadcrumbs>
            );
    } 
    

    if (pathArray[1]=="item") {
        return (<>
            <Breadcrumbs style={{float: 'right', position: 'relative', right: '32px', paddingTop: '10px'}} separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                <Link color="inherit">
                    Categoría
                </Link>
                <Link href={`/category/${pathArray[3]}`}>
                    <Typography color="textPrimary">{capitalize(pathArray[3])}</Typography>
                </Link>
            </Breadcrumbs>
            </>
        );
    }

    if (pathArray[1]=="category") {
        return (
            <Breadcrumbs style={{float: 'right', position: 'relative', right: '32px', paddingTop: '10px'}} separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                <Link color="inherit">
                    Categoría
                </Link>
                <Link href={`/category/${pathArray[2]}`}>
                    <Typography color="textPrimary">{capitalize(pathArray[2])}</Typography>
                </Link>
            </Breadcrumbs>
        );
    }

    
}   
