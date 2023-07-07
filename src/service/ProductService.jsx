class ProductService {

    static productList = [
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
    ];

    static getAllProducts(){
        return this.productList;
    }

}

export default ProductService;