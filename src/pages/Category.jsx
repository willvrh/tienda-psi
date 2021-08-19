import React from "react";
import ItemListContainer from "../components/ItemListContainer";
import ItemList from "../components/ItemList";
import { useParams } from "react-router";

export default function Category() {
    const { id } = useParams();
    
    return (
        <>
            <ItemListContainer>
                <ItemList category={id}/>
            </ItemListContainer>
        </>
    );
}