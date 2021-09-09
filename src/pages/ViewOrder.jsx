import React from "react";
import { useParams } from "react-router";
import Order from "../components/Order";
import Breadcrumb from '../components/Breadcrumb';

export default function Product() {
    
    const { id } = useParams();

    return (
        <>
            <Order id={id}>
            <Breadcrumb/>
            </Order>
        </>
    );
}