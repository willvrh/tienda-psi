import React from "react";
import ItemListContainer from "../components/ItemListContainer";
import ItemList from "../components/ItemList";
import { useParams } from "react-router";
import Breadcrumb from '../components/Breadcrumb';

export default function Category() {
    const { id } = useParams();
    return (
        <>
            <ItemListContainer greetings={`Hacé clic sobre un producto para ver los detalles`}>
                <Breadcrumb/>
                <ItemList category={id}/>
            </ItemListContainer>
        </>
    );
}