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
			createPrint()
		} else {
			let p = document.createElement('p');
			p.textContent = '* Print Name and STL url are required';
			p.style.color = 'red';
			errDiv.appendChild(p);

		}
	});

	document.updatePrint.updateBtn.addEventListener('click', (e) => {
		e.preventDefault();
		updatePrint(document.updatePrint.id.value);
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

function createPrint() {

	let xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/prints', true);

	xhr.setRequestHeader("Content-type", "application/json"); // Specify JSON request body

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status == 200 || xhr.status == 201) { // Ok or Created
				let print = JSON.parse(xhr.responseText);
				console.log(print);
			}
			else {
				console.log('Print was not created');
			}
		}
	};

	// JavaScript data (object)
	let userPrint = {
		name: document.createPrint.printName.value,
        stlFileUrl: document.createPrint.stlUrl.value,
        customGcodeUrl: document.createPrint.gcodeUrl.value,
        printerName: document.createPrint.printerName.value,
        filamentType: document.createPrint.filamentType.value,
        filamentBrand: document.createPrint.filamentBrand.value,
        printTemp: document.createPrint.printTemp.value,
        printSpeed: document.createPrint.printSpeed.value,
        adhesionLayer: document.createPrint.adhesionLayer.value,
        printQuality: document.createPrint.printQuality.value,
        supports: document.createPrint.supports.value,
        printImgUrl: document.createPrint.imageUrl.value,
        creates: document.createPrint.creates.value,
        lastDateCreated: document.createPrint.createDate.value,

	};

	let userPrintJson = JSON.stringify(userPrint); // Convert JS object to JSON string
	

	// Pass JSON as request body
	xhr.send(userPrintJson);
}

function updatePrint(id) {

	let xhr = new XMLHttpRequest();
	xhr.open('PUT', 'api/prints/' + id, true);

	xhr.setRequestHeader("Content-type", "application/json"); // Specify JSON request body

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status == 200 || xhr.status == 201) { // Ok or Created
				let print = JSON.parse(xhr.responseText);
				console.log(print);
			}
			else {
				console.log('Print was not created');
			}
		}
	};

	// JavaScript data (object)
	let userPrint = {
		name: document.updatePrint.printName.value,
        stlFileUrl: document.updatePrint.stlUrl.value,
        customGcodeUrl: document.updatePrint.gcodeUrl.value,
        printerName: document.updatePrint.printerName.value,
        filamentType: document.updatePrint.filamentType.value,
        filamentBrand: document.updatePrint.filamentBrand.value,
        printTemp: document.updatePrint.printTemp.value,
        printSpeed: document.updatePrint.printSpeed.value,
        adhesionLayer: document.updatePrint.adhesionLayer.value,
        printQuality: document.updatePrint.printQuality.value,
        supports: document.updatePrint.supports.value,
        printImgUrl: document.updatePrint.imageUrl.value,
        creates: document.updatePrint.creates.value,
        lastDateCreated: document.updatePrint.createDate.value,

	};

	let userPrintJson = JSON.stringify(userPrint); // Convert JS object to JSON string
	

	// Pass JSON as request body
	xhr.send(userPrintJson);
}

