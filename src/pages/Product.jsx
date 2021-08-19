import React from "react";
import ItemDetailContainer from "../components/ItemDetailContainer";

import { useParams } from "react-router";

export default function Product() {
    const { id } = useParams();
    
    return (
        <>
            <ItemDetailContainer id={id}/>
        </>
    );
}