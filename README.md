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
let accessToken = await authorize(
			process.env.REACT_APP_NUME_CLIENT_ID,
			process.env.REACT_APP_NUME_CLIENT_SECRET
		);
		const payload = {
			accessToken: accessToken,
			referenceId: 'ref',
			amountUsd: 20.5,
			products: [
				{
					skuId: 'he',
					count: 4,
				},
			],
		};
const res = await checkoutWithNume(payload);
```
