import React from "react";
import ItemListContainer from "../components/ItemListContainer";
import ItemList from "../components/ItemList";

export default function Home() {
    return (
        <>
            <ItemListContainer greetings={`Hacé clic sobre un producto para ver los detalles`}>
                <ItemList category=""/>
            </ItemListContainer>
        </>
    );
}