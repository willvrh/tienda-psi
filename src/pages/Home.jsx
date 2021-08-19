import React from "react";
import ItemListContainer from "../components/ItemListContainer";
import ItemList from "../components/ItemList";

export default function Home() {
    return (
        <>
            <ItemListContainer>
                <ItemList category=""/>
            </ItemListContainer>
        </>
    );
}