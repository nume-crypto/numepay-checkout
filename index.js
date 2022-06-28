const axios = require('axios');
const API_URL = 'https://dev.api.numecrypto.com/api';
const CHECKOUT_URL = "https://dev.checkout.numecrypto.com/"

const authorize = async (clientId, clientSecret) => {
	const response = await axios({
		method: 'post',
		url: `${API_URL}merchant/oauth/token`,
		data: {},
		auth: {
			username: clientId,
			password: clientSecret,
		},
	});
	return response.data.message.AccessToken;
};

const checkoutWithNume = async (payload) => {
	try {
		let accessToken = payload.accessToken;
		delete payload.accessToken;
		const response = await axios({
			method: 'post',
			url: `${API_URL}merchant//create-transaction`,
			data: payload,
			headers: { Authorization: `Bearer ${accessToken}` },
		});

		const top = window.top.outerHeight / 2 + window.top.screenY - 750 / 2;
		const left = window.top.outerWidth / 2 + window.top.screenX - 750 / 2;

		let newWindow = window.open(
			`${CHECKOUT_URL}${response.data.message.OrderId}`,
			'nume',
			`height=750,width=750,top=${top}, left=${left}`
		);
		if (window.focus) {
			newWindow.focus();
		}
		return new Promise(async (accept, reject) => {
			const handler = async (e) => {
				if (e.origin === CHECKOUT_URL) {
					try {
						let { data } = await axios({
							method: 'get',
							url: `${API_URL}merchant/order-details/${response.data.message.OrderId}`,
							data: {},
							headers: { Authorization: `Bearer ${accessToken}` },
						});
						// console.log(e.data)
						let res = {
							orderId: data.message.Order.OrderId,
							orderStatus: data.message.Order.Status,
							amount: data.message.Order.Amount,
							currency: data.message.Order.CurrencyId,
							payee: data.message.Order.userId,
						};
						if (res.orderStatus !== 'APPROVED') {
							reject(res);
						} else {
							accept(res);
						}
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

module.exports = { authorize, checkoutWithNume };
