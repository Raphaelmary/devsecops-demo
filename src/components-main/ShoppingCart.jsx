import React, {useState} from 'react';

const ShoppingCart = function(){
    const [items, setItems] = useState({
        products: [
                {
                    sno: 'AA101',
                    product: 'MI Watch',
                    price: 73,
                    qty: 0,
                    total: 0
                },
                {
                    sno: 'AA202',
                    product: 'Apple Watch',
                    price: 45,
                    qty: 0,
                    total: 0
                },
                {
                    sno: 'AA303',
                    product: 'Microsoft',
                    price: 88,
                    qty: 0,
                    total: 0
                }
            ]
        }
    )

    const { products } = items;

    const incrementQty = (productId) => {
        
        //filter the data to update quantity
        let itemList = products.map((productItem) => {
            if(productItem.sno === productId){
                return{
                    ...productItem,
                    qty: productItem.qty + 1
                }
            }
            return productItem;
        })

        //update the state with new data
        setItems(() => ({
            products: [...itemList]
        }))
    }

    const decrementQty = (productId) => {
        let itemList = products.map((productItem) => {
            if(productItem.sno === productId){
                return {
                    ...productItem,
                    qty: productItem.qty - 1 > 0 ? productItem.qty - 1 : 0
                }
            }

            return productItem;
        })

        setItems(() => ({
            products: [...itemList]
        }))
    }

    const grandTotal = () => {
        let total = 0;
        for(let product of products){
            total += product.qty * product.price;
        }
        return total;
    }

    return(
        <>
            <h1>List of products</h1>
            <table>
                <thead>
                    <tr>
                        <th>S/N</th>
                        <th>Product</th>
                        <th>($)Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                   {
                    products.map((product) => {
                        return(
                            <tr key={product.sno}>
                                <td>{product.sno}</td>
                                <td>{product.product}</td>
                                <td>&#36;{product.price.toFixed(2)}</td>
                                <td>
                                    <i className='fa fa-plus-square' onClick={() => incrementQty(product.sno)}></i>
                                    {product.qty}
                                    <i className='fa fa-minus-square' onClick={() => decrementQty(product.sno)}></i>
                                </td>
                                <td>&#36;{(product.qty * product.price).toFixed(2)}</td>
                            </tr>
                        )
                    })
                   }
                   <tr>
                        <td colSpan={3}></td>
                        <td style={{fontSize: '1.1rem', color: 'green', fontWeight: '700'}}>Grand Total</td>
                        <td>&#36;{grandTotal().toFixed(2)}</td>
                   </tr>
                </tbody>
            </table>
        </>
    )
};

export default ShoppingCart;