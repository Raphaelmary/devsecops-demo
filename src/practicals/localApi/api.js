class Api {

    static apiList = [
        {
            sno: 'AA101',
            items: 'Apple Watch',
            price: 12,
            qty: 0
        },
        {
            sno: 'AA201',
            items: 'MI Watch',
            price: 31,
            qty: 0
        },
        {
            sno: 'AA301',
            items: 'Samsung Watch',
            price: 22,
            qty: 0
        }
    ];

    static getApiList(){
        return this.apiList
    }
};

export default Api;