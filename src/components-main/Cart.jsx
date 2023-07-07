import React, { useState } from 'react'

function Cart() {
    const [items, setItems] = useState({
        products: {
            sno: 'AA010',
            product: 'Smart watch',
            price: 1200,
            qty: 0,
            total: 0 
        }
    })

    //increase item
    const incr = () => {
        setItems(() => ({
            products: {
                ...items.products, 
                qty: items.products.qty + 1
            }
        }))
    }

    const dec = () => {
        setItems(() => ({
            products: {
                ...items.products,
                qty: items.products.qty - 1 > 0 ? items.products.qty - 1 : 0
            }
        }))
    }
    
    return (
   <>
   <h1>Shopping Cart</h1>
    <table>
        <thead>
            <tr>
                <th>SNO</th>
                <th>Product</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Total</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{items.products.sno}</td>
                <td>{items.products.product}</td>
                <td>{items.products.price}</td>
                <td>
                    <i className='fa fa-plus-square' onClick={incr} style={{paddingRight: '.3rem'}} />
                    {items.products.qty}
                    <i className='fa fa-minus-square' onClick={dec} style={{paddingLeft: '.3rem'}} />
                </td>
                <td>{items.products.qty * items.products.price}</td>
            </tr>
        </tbody>
    </table>
   </>
  )
}

export default Cart
