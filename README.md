# nume-npm

## Installing
Using npm 
```sh
npm install nume-pay
```
Using jsDelivr CDN:
```html
<script src="https://cdn.jsdelivr.net/npm/nume-pay"></script>	
```
### Usage
```js
import 'nume-pay-uat/index.css'
const { checkoutWithNume, renderBtn } = require('nume-pay-uat');

const handleSubmit = () => {
	const payload = {
		referenceId: 'ref',
		amountUsd: 1.5,
		products: [
			{
				skuId: 'he',
				count: 4,
			},
		],
		clientId: process.env.REACT_APP_NUME_CLIENT_ID,
		clientSecret: process.env.REACT_APP_NUME_CLIENT_SECRET
	};
	checkoutWithNume(payload).then((res) => {
		console.log(res);
		if (res.orderStatus === 'APPROVED') {
			window.location.href = 'success';
		}
	}).catch((err) => {
		console.log(err);
	});
};

// Render NumePay Checkout button
<div id="nume-pay-checkout"></div>
renderBtn('#nume-pay-checkout')

```
