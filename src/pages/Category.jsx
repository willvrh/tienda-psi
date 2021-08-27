import React from "react";
import ItemListContainer from "../components/ItemListContainer";
import ItemList from "../components/ItemList";
import { useParams } from "react-router";

export default function Category() {
    const { id } = useParams();
    
    return (
        <>
            <ItemListContainer greetings={`Hacé clic sobre un producto para ver los detalles`}>
                <ItemList category={id}/>
            </ItemListContainer>
        </>
    );
}