
const API_URL = 'https://dev.api.numecrypto.com/api/';
const CHECKOUT_URL = 'https://dev.checkout.numecrypto.com/';

const authorize = async (clientId, clientSecret) => {
	let url = `${API_URL}merchant/oauth/token`;
	let options = {
		method: 'POST',
		headers: {
			Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
	};
	console.log(options);
	const response = await (await fetch(url, options)).json();
	return response.message.AccessToken;
};
const checkoutWithNume = (payload) => {
	let authorizeUrl = `${API_URL}merchant/oauth/token`;
	let authorizeOptions = {
		method: 'POST',
		headers: {
			Authorization: `Basic ${btoa(`${payload.clientId}:${payload.clientSecret}`)}`,
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
	};
	delete payload.clientId
	delete payload.clientSecret
	let txUrl = `${API_URL}merchant/create-transaction`;
	let txOptions = {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(payload),
	};
	const height = 750
	const width = 750
	const top = window.top.outerHeight / 2 + window.top.screenY - height / 2;
	const left = window.top.outerWidth / 2 + window.top.screenX - width / 2;
	let newWindow = window.open('', '', `height=${height},width=${width},top=${top}, left=${left}`);
	if (window.focus) {
		newWindow.focus();
	}
	let accessToken = ""
	return fetch(authorizeUrl, authorizeOptions)
		.then((res) => {
			return res.json();
		})
		.then((authData) => {
			accessToken = authData.message.AccessToken;
			txOptions.headers.Authorization = `Bearer ${accessToken}`;
			fetch(txUrl, txOptions)
				.then((res) => {
					return res.json();
				})
				.then((data) => {
					if (!newWindow) {
						return new Promise((accept, reject) => {
							reject('Window closed');
						});
					}
					newWindow.location.assign(`${CHECKOUT_URL}${data.message.OrderId}`);
					if (window.focus) {
						newWindow.focus();
					}
					return new Promise(async (accept, reject) => {
						const handler = async (e) => {
							if (CHECKOUT_URL.includes(e.origin)) {
								try {
									let url = `${API_URL}merchant/order-details/${data.message.OrderId}`;
									let options = {
										method: 'GET',
										headers: {
											Authorization: `Bearer ${accessToken}`,
											Accept: 'application/json',
											'Content-Type': 'application/json',
										},
									};

									let response = await (await fetch(url, options)).json();
									let res = {
										orderId: response.message.Order.OrderId,
										orderStatus: response.message.Order.Status,
										amount: response.message.Order.Amount,
										currency: response.message.Order.CurrencyId,
										payee: response.message.Order.UserId,
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
				})
		})
		.catch((error) => {
			console.error(error);
			return new Promise((accept, reject) => {
				reject(error);
			});
		});
};

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
	module.exports = { authorize, checkoutWithNume };
} else {
	if (typeof define === 'function' && define.amd) {
		define([], function () {
			return { authorize, checkoutWithNume };
		});
	} else {
		window['authorize'] = authorize;
		window['checkoutWithNume'] = checkoutWithNume;
	}
}
