# nume-npm

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
