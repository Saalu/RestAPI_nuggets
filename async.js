const applyDiscount = new Promise(function(resolve, reject) {
	const discount = false;
	if (discount) {
		resolve('Discount Applied');
	} else {
		reject('Discount failed...');
	}
});

applyDiscount
	.then((result) => {
		console.log(result);
	})
	.catch((result) => console.log(result));
// console.log(applyDiscount);
