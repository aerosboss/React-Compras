import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types'

export const Product = (props) => {

    const [stateProd, setStateProd] = useState(props);
    const previousColorRef = useRef();

    // useEffect( () => {
    //     previousColorRef.current = stateProd.colorProduct;
    // });
    // const previousColor = previousColorRef.current;

    const handleProduct = (event) => {

        console.log("Fui presionado");
        console.log("event.target.value ==>",event.target.value);

        let keysState = Object.keys(stateProd);
        console.log("keysState ===> ", keysState);

        if (stateProd.imageProduct === "/image/"){
            let newSrcImg = stateProd.imageProduct.concat(
                stateProd.nameProduct, "/",
                event.target.value, ".png"
            );
            let newState = {
                nameProduct: stateProd.nameProduct,
                priceProduct: stateProd.priceProduct,
                colorProduct: event.target.value,
                imageProduct: newSrcImg
            };

            setStateProd(newState);
        }
        else {
            // console.log("Ya existe ruta de Img, el color previo es=", stateProd.colorProduct);
            let newSrcImg = stateProd.imageProduct.replace(stateProd.colorProduct, event.target.value);
            console.log("newSrcImg ==>", newSrcImg);

            let newState = {
                nameProduct: stateProd.nameProduct,
                priceProduct: stateProd.priceProduct,
                colorProduct: event.target.value,
                imageProduct: newSrcImg
            };

            setStateProd(newState);
        }
    }


    return (
        <form name={stateProd.nameProduct} className="product">
            <h1>{stateProd.nameProduct}</h1>
            <h2>Precio: ${stateProd.priceProduct}</h2>
            <span>Color: </span><br/>
            <input type="radio" id="blue" name="color" value="Azul" onClick={handleProduct}></input>
            <label htmlFor="blue">Azul</label><br/>
            <input type="radio" id="black" name="color" value="Negro" onClick={handleProduct}></input>
            <label htmlFor="black">Negro</label><br/>
            <input type="radio" id="white" name="color" value="Blanco" onClick={handleProduct}></input>
            <label htmlFor="green">Blanco</label><br/>
            <input type="submit" onClick="" value="Agregar a Carrito"/>
            <div> <img src={stateProd.imageProduct} alt={stateProd.nameProduct}/> 
            {/* URL: {stateProd.imageProduct}  */}
            </div>
        </form>
    );
}

Product.propTypes = {
    nameProduct: PropTypes.string.isRequired,
    priceProduct: PropTypes.number.isRequired,
    colorProduct: PropTypes.string
}

Product.defaultProps = {
    nameProduct: "No Asignado",
    priceProduct: 0,
    colorProduct: "No Asignado"
}