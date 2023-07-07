import React, { useState } from 'react';

function ProductCard(){
    const [products] = useState({
        productList: [
            {
                sno: 'AA101',
                items: 'Apple Watch',
                price: 450,
                qty: 15
            },
            {
                sno: 'AA201',
                items: 'MI Watch',
                price: 301,
                qty: 5
            },
            {
                sno: 'AA301',
                items: 'Samsung Watch',
                price: 222,
                qty: 0
            }
        ]
    })

    const {productList} = products;


    return(
        <>
            <div className='products'>
                <ul>
                    {
                        productList.map((product) => {
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
        </>
    )
};

export default ProductCard;