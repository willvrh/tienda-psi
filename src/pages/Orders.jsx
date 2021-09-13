import React from "react";

import OrderList from "../components/OrderList";
import Breadcrumb from '../components/Breadcrumb';

export default function ViewCart() {
    
    return (
        <>
            
            <OrderList>
            <Breadcrumb/>
            </OrderList>
        </>
    );
}