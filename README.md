# nume-npm

```js
const payload = {
	merchantId: 4,
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
