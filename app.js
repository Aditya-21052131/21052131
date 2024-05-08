import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllProductsPage from './src/AllProductsPage';
import ProductDetailsPage from './src/ProductDetailsPage';

function App() {
    return ( <
        Router >
        <
        Routes >
        <
        Route path = "/"
        element = { < AllProductsPage / > }
        /> <
        Route path = "/product/:productId"
        element = { < ProductDetailsPage / > }
        /> <
        /Routes> <
        /Router>
    );
}

export default App;