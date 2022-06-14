const axios = require('axios');

const authorize = async (clientId, clientSecret) => {
    let backendAPI = "http://44.201.174.127:3000/api/merchant/oauth/token";
    const response = await axios({
        method: "post",
        url: backendAPI,
        data: {},
        auth: {
            username: clientId,
            password: clientSecret,
        },
    });
    return response.data.message.AccessToken
};

const checkoutWithNume = async (payload) => {
    try {
        let backendAPI = "http://44.201.174.127:3000/api/create-transaction"
        let accessToken = payload.accessToken
        delete payload.accessToken
        const response = await axios({
            method: 'post',
            url: backendAPI,
            data: payload,
            headers: {"Authorization" : `Bearer ${accessToken}`}
        });

        const top = window.top.outerHeight / 2 + window.top.screenY - 750 / 2;
        const left = window.top.outerWidth / 2 + window.top.screenX - 750 / 2;
        let numeCheckoutUrl = "https://charming-bunny-9c79df.netlify.app"
        let newWindow = window.open(
            `${numeCheckoutUrl}/${response.data.message.OrderId}`,
            'nume',
            `height=750,width=750,top=${top}, left=${left}`
        );
        if (window.focus) {
            newWindow.focus();
        }
        console.log(newWindow)
        return new Promise((accept, reject) => {
            const handler = (e) => {
                if (e.origin === numeCheckoutUrl) {
                    try {
                        accept(e.data);
                    } catch (error) {
                        reject(error);
                    }
                    window.removeEventListener('message', handler);
                }
            };

            window.addEventListener('message', handler);
        });
    } catch (error) {
        console.error(error);
        return new Promise((accept, reject) => {
            reject(error);
        });
    }
};

module.exports = {authorize, checkoutWithNume}
