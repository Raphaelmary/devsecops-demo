import React, {useState} from 'react';
import Api from './localApi/api';

const Cart = function(){
    const [items, setItems] = useState({
        itemList: Api.getApiList()
    })

    const increase = function(productId){
        let singleItem = items.itemList.map((itemz) => {
            if(itemz.sno === productId){
              return {
                ...itemz,
                qty: itemz.qty + 1
              }
            }
            
            return itemz
        })

        setItems(() => ({
            itemList: [...singleItem]
        }))
    }

const decrease = (productId) => {
    let iteobj = items.itemList.map((i) => {
        if(i.sno === productId){
            return {
                ...i,
                qty: i.qty - 1 > 0 ? i.qty - 1 : 0
            }
        }

        return i
    })

    setItems(() => ({
        itemList: [...iteobj]
    }))
}

    // console.log(items.itemList)

    return(
        <>
            <table>
                <thead>
                    <tr>
                        <th>S/N</th>
                        <th>Items</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Total</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.itemList.length > 0 && items.itemList.map((i) => {
                            return(
                                <tr key={i.sno}>
                                    <td>{i.sno}</td>
                                    <td>{i.items
                                    }</td>
                                    <td>{i.price}</td>
                                    <td>
                                        <span onClick={() => increase(i.sno)}>+</span>
                                        {i.qty}
                                        <span onClick={() => decrease(i.sno)}>-</span>
                                    </td>
                                    <td>{i.qty * i.price}</td>
                                    <td>
                                        {
                                            i.qty >= 5 && <span>Coupon Activated</span>
                                        }
                                        {
                                            i.qty <= 4 && i.qty >= 1 && <span><i>keep adding</i></span>
                                        }
                                        {
                                            i.qty === 0 && <span>No Qty Selected</span>
                                        }
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
};

export default Cart;