import React from "react";
import ItemListContainer from "../components/ItemListContainer";
import ItemList from "../components/ItemList";
import Breadcrumb from '../components/Breadcrumb';

export default function Home() {
    return (
        <>
            <ItemListContainer greetings={`Hacé clic sobre un producto para ver los detalles`}>
                <Breadcrumb/>
                <ItemList category="todas"/>
            </ItemListContainer>
        </>
    );
}