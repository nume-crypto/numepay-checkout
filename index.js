const API_URL = 'https://uat.api.numecrypto.com/api/';
const CHECKOUT_URL = 'https://uat.checkout.numecrypto.com/';

const helperIconSvg = `
	<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" style="pointer-events:none;cursor:pointer">
		<path
			pointer-events="none"
			d="M6.3 3.5H7.7V4.9H6.3V3.5ZM6.3 6.3H7.7V10.5H6.3V6.3ZM7 0C3.136 0 0 3.136 0 7C0 10.864 3.136 14 7 14C10.864 14 14 10.864 14 7C14 3.136 10.864 0 7 0ZM7 12.6C3.913 12.6 1.4 10.087 1.4 7C1.4 3.913 3.913 1.4 7 1.4C10.087 1.4 12.6 3.913 12.6 7C12.6 10.087 10.087 12.6 7 12.6Z"
			fill="black" />
	</svg>
	`;

const numeCheckoutLogoSvg = `
	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<g clip-path="url(#clip0_47_1721)">
			<path
				d="M15.7912 4.7586C16.2698 3.6628 17.5565 3.15795 18.6651 3.63094L21.8292 4.98086C22.9378 5.45386 23.4486 6.72559 22.9701 7.82139L18.4538 18.1623C17.5981 20.1216 15.2974 21.0244 13.315 20.1786C11.3326 19.3328 10.4192 17.0589 11.275 15.0995L15.7912 4.7586Z"
				fill="url(#paint0_linear_47_1721)" />
			<path
				d="M15.7912 4.7586C16.2698 3.6628 17.5565 3.15795 18.6651 3.63094L21.8292 4.98086C22.9378 5.45386 23.4486 6.72559 22.9701 7.82139L18.4538 18.1623C17.5981 20.1216 15.2974 21.0244 13.315 20.1786C11.3326 19.3328 10.4192 17.0589 11.275 15.0995L15.7912 4.7586Z"
				fill="#7940B0" />
			<path
				d="M15.7912 4.7586C16.2698 3.6628 17.5565 3.15795 18.6651 3.63094L21.8292 4.98086C22.9378 5.45386 23.4486 6.72559 22.9701 7.82139L18.4538 18.1623C17.5981 20.1216 15.2974 21.0244 13.315 20.1786C11.3326 19.3328 10.4192 17.0589 11.275 15.0995L15.7912 4.7586Z"
				fill="white" />
			<path
				d="M8.04557 20.8049C7.56701 21.9007 6.28031 22.4056 5.17163 21.9326L2.00763 20.5827C0.898958 20.1097 0.388163 18.838 0.866729 17.7422L5.38299 7.40127C6.23871 5.44191 8.53942 4.53919 10.5218 5.38496C12.5042 6.23073 13.4175 8.50469 12.5618 10.4641L8.04557 20.8049Z"
				fill="url(#paint1_linear_47_1721)" />
			<path
				d="M8.04557 20.8049C7.56701 21.9007 6.28031 22.4056 5.17163 21.9326L2.00763 20.5827C0.898958 20.1097 0.388163 18.838 0.866729 17.7422L5.38299 7.40127C6.23871 5.44191 8.53942 4.53919 10.5218 5.38496C12.5042 6.23073 13.4175 8.50469 12.5618 10.4641L8.04557 20.8049Z"
				fill="#7940B0" />
			<path
				d="M8.04557 20.8049C7.56701 21.9007 6.28031 22.4056 5.17163 21.9326L2.00763 20.5827C0.898958 20.1097 0.388163 18.838 0.866729 17.7422L5.38299 7.40127C6.23871 5.44191 8.53942 4.53919 10.5218 5.38496C12.5042 6.23073 13.4175 8.50469 12.5618 10.4641L8.04557 20.8049Z"
				fill="white" />
			<path
				d="M19.1737 7.90003C19.739 7.90003 20.1972 7.44712 20.1972 6.88843C20.1972 6.32973 19.739 5.87682 19.1737 5.87682C18.6084 5.87682 18.1502 6.32973 18.1502 6.88843C18.1502 7.44712 18.6084 7.90003 19.1737 7.90003Z"
				fill="#5155D4" />
			<g filter="url(#filter0_i_47_1721)">
				<path
					d="M5.91295 11.3366C4.60641 9.63753 4.9408 7.21334 6.65983 5.92199C8.37885 4.63065 10.8316 4.96116 12.1381 6.66021L17.991 14.2715C19.2975 15.9705 18.9631 18.3947 17.2441 19.686C15.5251 20.9774 13.0724 20.6469 11.7658 18.9478L5.91295 11.3366Z"
					fill="url(#paint2_linear_47_1721)" />
				<path
					d="M5.91295 11.3366C4.60641 9.63753 4.9408 7.21334 6.65983 5.92199C8.37885 4.63065 10.8316 4.96116 12.1381 6.66021L17.991 14.2715C19.2975 15.9705 18.9631 18.3947 17.2441 19.686C15.5251 20.9774 13.0724 20.6469 11.7658 18.9478L5.91295 11.3366Z"
					fill="#7940B0" />
				<path
					d="M5.91295 11.3366C4.60641 9.63753 4.9408 7.21334 6.65983 5.92199C8.37885 4.63065 10.8316 4.96116 12.1381 6.66021L17.991 14.2715C19.2975 15.9705 18.9631 18.3947 17.2441 19.686C15.5251 20.9774 13.0724 20.6469 11.7658 18.9478L5.91295 11.3366Z"
					fill="white" />
			</g>
		</g>
		<defs>
			<filter id="filter0_i_47_1721" x="5.11575" y="2.6147" width="13.6724" height="17.8593"
				filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
				<feFlood flood-opacity="0" result="BackgroundImageFix" />
				<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
				<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
					result="hardAlpha" />
				<feOffset dy="-2.51938" />
				<feGaussianBlur stdDeviation="6.29846" />
				<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
				<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0" />
				<feBlend mode="normal" in2="shape" result="effect1_innerShadow_47_1721" />
			</filter>
			<linearGradient id="paint0_linear_47_1721" x1="21.8443" y1="4.9873" x2="15.0477" y2="20.9178"
				gradientUnits="userSpaceOnUse">
				<stop stop-color="white" />
				<stop offset="1" stop-color="#C1C0FC" />
			</linearGradient>
			<linearGradient id="paint1_linear_47_1721" x1="1.9925" y1="20.5762" x2="8.78912" y2="4.64572"
				gradientUnits="userSpaceOnUse">
				<stop stop-color="white" />
				<stop offset="1" stop-color="#C1C0FC" />
			</linearGradient>
			<linearGradient id="paint2_linear_47_1721" x1="5.27487" y1="6.96239" x2="15.7028" y2="20.8439"
				gradientUnits="userSpaceOnUse">
				<stop stop-color="white" />
				<stop offset="1" stop-color="#C1C0FC" />
			</linearGradient>
			<clipPath id="clip0_47_1721">
				<rect width="24" height="23.4545" fill="white" transform="translate(0 0.272728)" />
			</clipPath>
		</defs>
	</svg>
	`;

const handlePopover = (e) => {
	let popover = document.querySelector('.nume-checkout-popover');
	const isClosestIcon = e.target.closest('.nume-checkout-helper-icon');
	const isClosestPopover = e.target.closest('.nume-checkout-popover');
	if (isClosestIcon && !isClosestPopover) {
		if (!popover.style.display || popover.style.display === 'none') {
			popover.style.display = 'block';
		} else {
			popover.style.display = 'none';
		}
	} else if (isClosestPopover) {
		popover.style.display = 'block';
	} else {
		popover.style.display = 'none';
	}
};

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
	delete payload.clientId;
	delete payload.clientSecret;
	let txUrl = `${API_URL}merchant/create-transaction`;
	let txOptions = {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(payload),
	};
	const height = 750;
	const width = 750;
	const top = window.top.outerHeight / 2 + window.top.screenY - height / 2;
	const left = window.top.outerWidth / 2 + window.top.screenX - width / 2;
	let newWindow = window.open('', '', `height=${height},width=${width},top=${top}, left=${left}`);
	if (window.focus) {
		newWindow.focus();
	}
	let accessToken = '';
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
				});
		})
		.catch((error) => {
			console.error(error);
			return new Promise((accept, reject) => {
				reject(error);
			});
		});
};
const renderBtn = (query, options = {}) => {
	let numeCheckoutDiv = document.querySelector(query);
	numeCheckoutDiv.style.position = 'relative';
	numeCheckoutDiv.innerHTML = `
    <button class="nume-checkout-btn">
        ${numeCheckoutLogoSvg}
        <span class="nume-checkout-btn-txt-main"> NumePay </span>
        ${options.full ? '<span class="nume-checkout-btn-txt-side">Checkout</span>' : ''}
    </button>
    <p class="nume-checkout-helper-txt">Shop with crypto - Zero fees <span class="nume-checkout-helper-icon">${helperIconSvg}</span></p>
    <div class="nume-checkout-popover">
        Make crypto purchases without any transaction fees. Get the NumePay wallet, load in some funds and pay
        gas-free wherever NumePay is accepted at checkout. <span class="nume-checkout-learn-more">Learn More</span>
        <div class="nume-popover-arrow"></div>
    </div>`;
	document.addEventListener('click', handlePopover);
};

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
	module.exports = { authorize, checkoutWithNume, renderBtn };
} else {
	if (typeof define === 'function' && define.amd) {
		define([], function () {
			return { authorize, checkoutWithNume, renderBtn };
		});
	} else {
		window['authorize'] = authorize;
		window['checkoutWithNume'] = checkoutWithNume;
		window['renderBtn'] = renderBtn;
	}
}
