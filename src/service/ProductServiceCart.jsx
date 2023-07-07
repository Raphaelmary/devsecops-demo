import React from 'react';
import { useState } from 'react';
import ProductService from './ProductService';

const ProductServiceCart = function(){
    const [products] = useState({
        product: ProductService.productList
    })

    const {product} = products;

    return(
        <div className='products'>
                <ul>
                    {
                        product.map((product) => {
                            return (
                                <div className='items__list' key={product.sno}>
                                    <h3>Shopping List</h3>
                                    <li>SNO: &nbsp;{product.sno}</li>
                                    <li>Item: &nbsp;{product.items}</li>
                                    <li>&#36;{(product.price).toFixed(2)}</li>
                                    <li>Qty: &nbsp;
                                        {
                                            product.qty >= 10 && <span style={{color: 'green'}}>Available</span>
                                        }
                                        {
                                            product.qty <= 10 && product.qty >= 1 && <span style={{color: 'orange'}}>Low in Stock</span>
                                        }
                                        {
                                            product.qty === 0 && <span style={{color: 'red'}}>Out of Stock</span>
                                        }
                                    </li>
                                </div>
                            )
                        })
                    }
                </ul>
            </div>
    )
}

export default ProductServiceCart;