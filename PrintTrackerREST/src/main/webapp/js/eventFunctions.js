window.addEventListener('load', (e) => {
	console.log('document loaded');
	init();
})

function init() {
	console.log("in init()");
	document.searchPrints.searchBtn.addEventListener('click', (e) => {
		e.preventDefault();
		let search = document.searchPrints.search.value;
		if (isNaN(search)){
			console.log(search);
			getPrintsByKeyword(search);
		} else {
			console.log(search);
			getPrintById(search);
		}
	});
}

function getPrintById(search) {
	console.log("in getPrintById");
	let xhr = new XMLHttpRequest();

	xhr.open('GET', 'api/prints/' + search, true);

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let print = JSON.parse(xhr.responseText);
				console.log(print);
			} else {
				console.log('no print found');
			}
		}
	};

	xhr.send();

}

function getPrintsByKeyword(search) {
	let xhr = new XMLHttpRequest();

	xhr.open('GET', 'api/prints/search/' + search, true);

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let prints = JSON.parse(xhr.responseText);
				for (let print of prints) {
					console.log(print);
				}
			} else {
				console.log('No print found');
			}
		}
	};

	xhr.send();
}