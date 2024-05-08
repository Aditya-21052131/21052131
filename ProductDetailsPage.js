import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProductDetailsPage = () => {
        const { productId } = useParams();
        const [product, setProduct] = useState(null);

        useEffect(() => {
            const fetchProduct = async() => {
                const response = await axios.get(`/api/products/${productId}`);
                setProduct(response.data);
            };
            fetchProduct();
        }, [productId]);

        return ( <
                div > {
                    product ? ( <
                        div className = "product-details" >
                        <
                        h2 > { product.name } < /h2> <
                        p > Company: { product.company } < /p> <
                        p > Category: { product.category } < /p> <
                        p > Price: $ { product.price } < /p> <
                        p > Rating: { product.rating }(out of 5) < /p> {
                            product.discount && < p > Discount: { product.discount } % < /p>} <
                                p > Availability: { product.availability ? 'In Stock' : 'Out of Stock' } < /p> { /* Add image element if available: */ } {
                                    product.image && < img src = { product.image }
                                    alt = { product.name }
                                    />} { /* ... (Additional product details) */ } <
                                    /div>
                                ): ( <
                                    p > Loading product details... < /p>
                                )
                        } <
                        /div>
                    );
                };

                export default ProductDetailsPage;