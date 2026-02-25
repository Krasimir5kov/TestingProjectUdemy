class APIUtils {
    constructor(apiContext,loginPayLoad) {
        this.apiContext = apiContext;
        this.loginPayLoad = loginPayLoad;
    }

    async getToken(){
        const loginResponse =  await this.apiContext.post('https://rahulshettyacademy.com/api/ecom/auth/login',
                 { 
                    data: this.loginPayLoad
        
                })
                const loginResponseJson = await loginResponse.json();
                const  token = loginResponseJson.token;
                console.log(token);
                return token;
    }
    async createOrder(orderPyload){
        const response = {};
        response.token = await this.getToken();
         const orderReponse = await this.apiContext.post('https://rahulshettyacademy.com/api/ecom/order/create-order',{
            data: orderPyload,
            headers: {
                'Authorization' : response.token,
                'Content-Type' : 'application/json'
            }
        })
        const orderReponseOrderJson =  await orderReponse.json();
        const  orderId = await orderReponseOrderJson.orders[0];
       response.orderId = orderId;
        console.log(orderReponseOrderJson);
        console.log(orderId);
        return response;
}
}
        module.exports = {APIUtils};
