async function getClients() {
	const clients = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('Client list downloaded...');
		}, 1000);
	});

	const error = false;

	if (!error) {
		const res = await clients;
		return res;
	} else {
		await Promise.reject('There was an error');
	}
}

getClients().then((res) => console.log(res)).catch((err) => console.log(err));
