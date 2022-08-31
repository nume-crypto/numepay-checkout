# NumePay Checkout

## Installing
Using npm 
```sh
npm install nume-pay
```
Using jsDelivr CDN:
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/nume-pay/index.css"/>
<script src="https://cdn.jsdelivr.net/npm/nume-pay"></script>
```
### Usage
```js
import 'nume-pay/index.css'
const { checkoutWithNume, renderBtn } = require('nume-pay');

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
renderBtn('#nume-pay-checkout', {full: true, onSubmit: handleSubmit})

```
#### Checkout button options
|Property|Description|
|--------|---------|
|onSubmit `function`|Required: `true`. Function to call on button click|
|full `boolean`|Default: `false`. Button full text|
|helperText `boolean`|Default: `false`. Bottom helper text|