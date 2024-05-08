import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';

const AllProductsPage = () => {
    // ... (State and useEffect for fetching products, filters, pagination - similar to previous response)

    return ( <
        div className = "product-filter-container" >
        <
        h2 > Filter Products < /h2> { /* ... (Filtering UI elements) */ } <
        button onClick = {
            () => handleFilterChange( /* update filters */ ) } > Apply Filters < /button>

        <
        h2 > Sort Products < /h2> <
        div className = "sort-section" >
        <
        label htmlFor = "sort-by" > Sort By: < /label> <
        select name = "sort-by"
        id = "sort-by" >
        <
        option value = "price-asc" > Price(Low to High) < /option> <
        option value = "price-desc" > Price(High to Low) < /option> <
        option value = "rating-desc" > Rating(High to Low) < /option> <
        option value = "rating-asc" > Rating(Low to High) < /option> <
        /select> <
        /div>

        <
        h2 > Products < /h2> {
            products.map((product) => ( <
                Link key = { product.id }
                to = { `/product/${product.id}` } >
                <
                div className = "product-card" > { /* Display product details: name, company, category, price, rating, discount, availability */ } <
                /div> <
                /Link>
            ))
        }

        { /* Pagination controls (buttons or indicators) */ } <
        /div>
    );
};

export default AllProductsPage;