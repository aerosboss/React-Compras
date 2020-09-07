// Archivo pruebas de App similar a MercadoLibre
import React from 'react';
import ReactDOM from 'react-dom';
import { ProductList } from './ProductList';
import './style.css';

const divRoot = document.getElementById('root');

ReactDOM.render(
    <ProductList />, 
    divRoot
);