const axios = require('axios');
const checkoutWithNume = async (payload) => {
    try {
        const response = await axios({
            method: 'post',
            url: 'http://localhost:3000/api/create-transaction',
            data: payload,
        });

        const top = window.top.outerHeight / 2 + window.top.screenY - 750 / 2;
        const left = window.top.outerWidth / 2 + window.top.screenX - 750 / 2;
        let newWindow = window.open(
            `http://localhost:5000/${response.data.message.OrderId}`,
            'nume',
            `height=750,width=750,top=${top}, left=${left}`
        );
        if (window.focus) {
            newWindow.focus();
        }
        return new Promise((accept, reject) => {
            const handler = (e) => {
                if (e.origin !== 'http://localhost:5001') {
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

module.exports = checkoutWithNume