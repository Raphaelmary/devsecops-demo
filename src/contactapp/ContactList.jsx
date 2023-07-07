import React, { useState } from 'react';
import ContactServices from './services/ContactServices';

const ContactList = function(props) {
    const [productData] = useState({
        products: ContactServices.getAllContactList(),
    });

    console.log(productData.products);

    const { products } = productData;

    const clickContact = (item) => {
        console.log(item)
        // alert(JSON.stringify(contact))
        props.sendContact(item)
    }

    return(
        <>
            {/* <pre>{JSON.stringify(productData)}</pre> */}
            <div className="contact__box">               
                <table className='table'>
                    <thead>
                        <tr>
                            <th>S/N</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Country</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.length > 0 && products.map((product) => {
                                return (
                                    <tr key={product.login.uuid} onClick={() => clickContact(product)}>
                                        <td>{product.login.uuid.substr(product.login.uuid.length - 5)}</td>
                                        <td>{product.name.first} {product.name.last}</td>
                                        <td>{product.email}</td>
                                        <td>{product.phone}</td>
                                        <td>{product.location.country}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
};

export default ContactList;