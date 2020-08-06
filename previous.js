document.getElementById('button1').addEventListener('click', loadText);
document.getElementById('button2').addEventListener('click', loadJSON);
document.getElementById('button3').addEventListener('click', loadAPI);

function loadText() {
	fetch('data.txt')
		.then((res) => {
			return res.text();
		})
		.then((data) => {
			console.log(data);
			document.getElementById('result').innerHTML = data;
		});
}

function loadJSON() {
	fetch('employees.json')
		.then((res) => {
			return res.json();
		})
		.then((data) => {
			console.log(data);
			let html = '';
			data.forEach((employee) => {
				html += `
                    <li>Name: ${employee.name} - Job: ${employee.job}</li>
                   
                `;

				document.getElementById('result').innerHTML = html;
			});
		});
}

function loadAPI() {
	fetch('https://picsum.photos/list').then((res) => res.json()).then((images) => {
		// console.log(data);
		let html = '';
		for (i = 0; i < 10; i++) {
			console.log(images[i]);
			const { author, post_url, author_url } = images[i];
			console.log(author);
			html += `
                <li>Author: ${author}
                <a href="${post_url}" target="/">View Image</a>
                </li>
            `;

			document.getElementById('result').innerHTML = html;
		}
	});
}
