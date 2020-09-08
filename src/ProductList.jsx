// Componente de App similar a MercadoLibre
import React, { useState } from 'react';
import { Product } from './Product';

export const ProductList = () => {

    const state = [
        {
            nameProduct: "Zapatos",
            priceProduct: 277.5,
            colorProduct: "",
            imageProduct: "/image/"
        },
        {
            nameProduct: "Franela",
            priceProduct: 28,
            colorProduct: "",
            imageProduct: "/image/"
        },
        {
            nameProduct: "Celular",
            priceProduct: 290,
            colorProduct: "",
            imageProduct: "/image/"
        }
    ];

    const [product, setProduct] = useState(state);

    return (
        <>
        {
            state.map( (prod,index)=> (
                <Product
                    nameProduct={prod.nameProduct}
                    priceProduct={prod.priceProduct}
                    colorProduct={prod.colorProduct}
                    imageProduct={prod.imageProduct}
                    sufixIdProduct={index}
                    // handle={handleProduct1}
                />
            ) )
        }
        </>
    );
}