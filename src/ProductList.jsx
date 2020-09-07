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

    // const handleProduct1 = (e) => {
    //     console.log("Fui prseionado");
    //     console.log("e.target es", e.target);

    //     const modifyProduct = state.filter( (element) => {
    //         console.log("element = ", element);
    //         console.log("e.target.value = ", e.target.value);
    //         return element.colorProduct === e.target.value;
    //     } )
    //     console.log("modify product is ", modifyProduct);
    // }


    return (
        <>
        {
            state.map( (prod)=> (
                <Product
                    nameProduct={prod.nameProduct}
                    priceProduct={prod.priceProduct}
                    colorProduct={prod.colorProduct}
                    imageProduct={prod.imageProduct}
                    // handle={handleProduct1}
                />
            ) )
        }
        </>
    );
}