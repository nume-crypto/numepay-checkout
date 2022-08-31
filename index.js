const API_URL = 'https://uat.api.numecrypto.com/api/';
const CHECKOUT_URL = 'https://uat.checkout.numecrypto.com/';

const helperIconSvg = `
	<svg width="14" height="14" viewBox="0 0 14 14" fill="inherit" xmlns="http://www.w3.org/2000/svg" style="pointer-events:none;cursor:pointer">
		<path
			pointer-events="none"
			d="M6.3 3.5H7.7V4.9H6.3V3.5ZM6.3 6.3H7.7V10.5H6.3V6.3ZM7 0C3.136 0 0 3.136 0 7C0 10.864 3.136 14 7 14C10.864 14 14 10.864 14 7C14 3.136 10.864 0 7 0ZM7 12.6C3.913 12.6 1.4 10.087 1.4 7C1.4 3.913 3.913 1.4 7 1.4C10.087 1.4 12.6 3.913 12.6 7C12.6 10.087 10.087 12.6 7 12.6Z"
			fill="inherit" />
	</svg>
	`;

const numeCheckoutLogoSvg = `
    <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M15.791 1.75853C16.2696 0.662736 17.5563 0.157878 18.6649 0.630869L21.829 1.98079C22.9376 2.45379 23.4484 3.72552 22.9698 4.82132L18.4536 15.1622C17.5979 17.1216 15.2971 18.0243 13.3148 17.1785C11.3324 16.3327 10.419 14.0588 11.2747 12.0994L15.791 1.75853Z"
            fill="white" />
        <path
            d="M8.04569 17.8049C7.56713 18.9007 6.28044 19.4056 5.17175 18.9326L2.00775 17.5826C0.89908 17.1096 0.388285 15.8379 0.866851 14.7421L5.38311 4.40121C6.23883 2.44185 8.53954 1.53913 10.5219 2.38491C12.5043 3.23068 13.4177 5.50464 12.5619 7.464L8.04569 17.8049Z"
            fill="white" />
        <path
            d="M19.1739 4.90004C19.7392 4.90004 20.1974 4.44713 20.1974 3.88843C20.1974 3.32974 19.7392 2.87683 19.1739 2.87683C18.6086 2.87683 18.1504 3.32974 18.1504 3.88843C18.1504 4.44713 18.6086 4.90004 19.1739 4.90004Z"
            fill="#5155D4" />
        <g filter="url(#filter0_i_58_1790)">
            <path
                d="M5.91301 8.33652C4.60647 6.63746 4.94086 4.21327 6.65989 2.92193C8.37891 1.63058 10.8316 1.96109 12.1382 3.66014L17.991 11.2714C19.2976 12.9704 18.9632 15.3946 17.2442 16.686C15.5251 17.9773 13.0724 17.6468 11.7659 15.9478L5.91301 8.33652Z"
                fill="url(#paint0_linear_58_1790)" />
            <path
                d="M5.91301 8.33652C4.60647 6.63746 4.94086 4.21327 6.65989 2.92193C8.37891 1.63058 10.8316 1.96109 12.1382 3.66014L17.991 11.2714C19.2976 12.9704 18.9632 15.3946 17.2442 16.686C15.5251 17.9773 13.0724 17.6468 11.7659 15.9478L5.91301 8.33652Z"
                fill="#7940B0" />
            <path
                d="M5.91301 8.33652C4.60647 6.63746 4.94086 4.21327 6.65989 2.92193C8.37891 1.63058 10.8316 1.96109 12.1382 3.66014L17.991 11.2714C19.2976 12.9704 18.9632 15.3946 17.2442 16.686C15.5251 17.9773 13.0724 17.6468 11.7659 15.9478L5.91301 8.33652Z"
                fill="white" />
        </g>
        <defs>
            <filter id="filter0_i_58_1790" x="5.11572" y="-0.385347" width="13.6724" height="17.8592"
                filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha" />
                <feOffset dy="-2.51938" />
                <feGaussianBlur stdDeviation="6.29846" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0" />
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_58_1790" />
            </filter>
            <linearGradient id="paint0_linear_58_1790" x1="5.27493" y1="3.96232" x2="15.7028" y2="17.8438"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="white" />
                <stop offset="1" stop-color="#C1C0FC" />
            </linearGradient>
        </defs>
    </svg>
`

const handlePopover = (e) => {
	let popover = document.querySelector('.nume-checkout-popover');
	let helperIcon = document.querySelector('.nume-checkout-helper-icon');
	const isClosestPopover = e.target.closest('.nume-checkout-popover');
	console.log(e.target)
	if (!isClosestPopover) {
		setTimeout(function () {
			popover.style.display = 'none';
			helperIcon.style.fill = "inherit"
		}, 250);
	}
};

const showPopOver = () => {
	let popover = document.querySelector('.nume-checkout-popover');
	let helperIcon = document.querySelector('.nume-checkout-helper-icon');
	if (!popover.style.display || popover.style.display === 'none') {
		popover.style.display = 'block';
		helperIcon.style.fill = "#5155D4"
	} else {
		popover.style.display = 'none';
		helperIcon.style.fill = "inherit"
	}
}


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
			return fetch(txUrl, txOptions)
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
        <div class="nume-checkout-container">
			<button class="nume-checkout-btn">
				${numeCheckoutLogoSvg}
				<span class="nume-checkout-btn-txt-main"> NumePay </span>
				${options.full ? '<span class="nume-checkout-btn-txt-side">Checkout</span>' : ''}
			</button>
			${options.helperText ? (
			`<p class="nume-checkout-helper-txt">Shop with crypto - Zero fees <span class="nume-checkout-helper-icon">${helperIconSvg}</span></p>
			<div class="nume-checkout-popover">
				<!-- HACKY FIX FOR POPOVER -->
				<div style="padding:20px;width: 305px;position: absolute;z-index: 2;top: -30px;"></div>
				Make crypto purchases without any transaction fees. Get the NumePay wallet, load in some funds and pay
				gas-free wherever NumePay is accepted at checkout. <span class="nume-checkout-learn-more">Learn More</span>
				<div class="nume-popover-arrow"></div>
			</div>`
		) : ''}
		</div>`;
	document.querySelector('.nume-checkout-btn').onclick = options.onSubmit
	if (options.helperText) {
		document.querySelector('.nume-checkout-helper-icon').onclick = showPopOver
		document.addEventListener('mouseover', handlePopover);
	}
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
