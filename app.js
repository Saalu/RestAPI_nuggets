const key = 'ea131d061d228469df6ac93db8071ab5';
//const access = 'https://cors-anywhere.herokuapp.com/';
const url = 'api.openweathermap.org/data/2.5/weather?q=London&appid=';
const API = 'https://docs.nomics.com/#operation/getCurrenciesTicker';
async function getPost() {
	const res = await fetch(API);

	const data = res.json();

	return data;
}

getPost().then((posts) => {
	console.log(posts);

	// let html = '<div> <h2>List of Posts</h2></div>';
	// for (i = 0; i < 5; i++) {
	// 	const post = posts[i];
	// 	html += `
	//         <h3>${post.title}</h3>
	//          <p>${post.body}</p>
	//             `;

	// 	document.getElementById('result').innerHTML = html;
	// }
});
// document.addEventListener('DOMContentLoaded', getPost);
