window.addEventListener('load', (e) => {
	console.log('document loaded');
	init();
})

function init() {
	console.log("in init()");
	getAllPrints();
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

	document.createPrint.createBtn.addEventListener('click', (e) => {
		e.preventDefault();
		let errDiv = document.getElementById('errorDiv');
		while(errDiv.firstChild) {
			errDiv.removeChild(errDiv.firstElementChild);
		}
		let name = document.createPrint.printName.value;
		let stlUrl = document.createPrint.stlUrl.value;
		if (name != "" && stlUrl != "") {
			console.log("not null reqirements met");
		} else {
			let p = document.createElement('p');
			p.textContent = '* Print Name and STL url are required';
			p.style.color = 'red';
			errDiv.appendChild(p);

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

function getAllPrints() { 
	let xhr = new XMLHttpRequest();

	xhr.open('GET', 'api/prints', true);

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let prints = JSON.parse(xhr.responseText);
				for (let print of prints) {
					console.log(print);
				}
			} else {
				console.log('No prints found');
			}
		}
	};

	xhr.send();
}