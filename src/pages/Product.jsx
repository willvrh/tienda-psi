import React from "react";
import { useParams } from "react-router";

import ItemDetailContainer from "../components/ItemDetailContainer";
import Breadcrumb from '../components/Breadcrumb';

export default function Product() {
    const { id } = useParams();
    
    return (
        <>
            <ItemDetailContainer id={id}>
            <Breadcrumb/>
            </ItemDetailContainer>
        </>
    );
}