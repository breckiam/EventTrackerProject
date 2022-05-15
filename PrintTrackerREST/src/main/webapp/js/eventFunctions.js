window.addEventListener('load', (e) => {
	console.log('document loaded');
	init();
	
})


function init() {
	
	getAllPrints();
	let createPrintToggle = document.getElementById('createToggleBtn');
	
	document.searchPrints.searchBtn.addEventListener('click', (e) => {
		e.preventDefault();
		var search = document.searchPrints.search.value;
		var printDiv = document.getElementById('printDiv').firstElementChild;
		printDiv.textContent = '';
		createPrintToggle.style.display = "block";
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

	let showmoreBtn = document.getElementsByClassName('readmoreBtn');
	for (let btn of showmoreBtn) {
	btn.addEventListener('click', (e) => {
		e.preventDefault();
		let hiddenDiv = btn.parentElement.previousElementSibling;
		console.log(hiddenDiv.style.display.value);
		if (hiddenDiv.style.display === 'none') {
			hiddenDiv.style.display = 'block';
		} else {
			hiddenDiv.style.display = 'none';
		}
	})
	}

	let showAllButton = document.getElementById('findAllBtn');
	showAllButton.addEventListener('click', (e) => {
		e.preventDefault();
		var updateFormToggle = document.getElementById('updateFormToggle');
		updateFormToggle.style.display = 'none';
		var createToggleDiv = document.getElementById('createToggleDiv');
		createToggleDiv.style.display = 'none';
		var printDiv = document.getElementById('printDiv').firstElementChild;
		printDiv.textContent = '';
		createPrintToggle.style.display = "block";
		getAllPrints();
	});

	let createToggleDiv = document.getElementById('createToggleDiv');
	var printDiv = document.getElementById('printDiv').firstElementChild;
	createPrintToggle.addEventListener('click', (e) => {
		var updateFormToggle = document.getElementById('updateFormToggle');
		updateFormToggle.style.display = 'none';

		if (createToggleDiv.style.display == 'none' || createToggleDiv.style.display == '') {
			createToggleDiv.style.display = 'block';
			createPrintToggle.style.display = "none";
		} else {
			createToggleDiv.style.display = 'none'
			createPrintToggle.style.display = "block";
		}
		printDiv.textContent = '';
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
				showSinglePrint(print);
				
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
				displayAllPrints(prints);
			} else {
				console.log('No print found');
			}
		}
	};

	xhr.send();
}

function getAllPrints() {
	let titleDiv = document.getElementById('home-title');  
	let xhr = new XMLHttpRequest();

	xhr.open('GET', 'api/prints', true);

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let prints = JSON.parse(xhr.responseText);
				while (titleDiv.firstElementChild) {
					titleDiv.removeChild(titleDiv.firstElementChild);
				}
				let h1 = document.createElement('h1');
				h1.textContent = '3D Prints';
				let h5 = document.createElement('h5');
				h5.textContent = 'Total stored: ' + prints.length;
				titleDiv.appendChild(h1);
				titleDiv.appendChild(h5); 
				displayAllPrints(prints);
			} else {
				let h5 = document.createElement('h5');
				h5.textContent = 'No prints Stored... Create a new print :)';
				titleDiv.appendChild(h5);
			}
		}
	};

	xhr.send();
}

function createPrint() {

	let otherDiv = document.getElementById('everthingElseDiv');
	let text = document.createElement('h2');

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
				text.textContent = "Failed to update print"
				text.style.color = 'red';
				otherDiv.appendChild(text);
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
	let printDiv = document.getElementById('printDiv').firstElementChild;
	printDiv.textContent = "";
	let upFormDiv = document.getElementById('createToggleDiv');
	upFormDiv.style.display = 'none';
	let otherDiv = document.getElementById('everthingElseDiv');
	let text = document.createElement('h2');
	let xhr = new XMLHttpRequest();
	xhr.open('PUT', 'api/prints/' + id, true);

	xhr.setRequestHeader("Content-type", "application/json"); // Specify JSON request body

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status == 200 || xhr.status == 201) { // Ok or Created
				let print = JSON.parse(xhr.responseText);
				text.textContent = 'Print Succesfully updated';
				text.style.color = 'green';
				text.style.textAlign = 'center';
				text.style.paddingTop = '10vh;'
				otherDiv.appendChild(text);
				setTimeout(function(){
					showSinglePrint(print);
					otherDiv.textContent = '';
				}, 2000); 
				
			}
			else {
				text.textContent = "Failed to update print"
				text.style.color = 'red';
				otherDiv.appendChild(text);
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

function deletePrint(id) {
	let printDiv = document.getElementById('printDiv').firstElementChild;
	printDiv.textContent = "";
	let titleDiv = document.getElementById('home-title');
	titleDiv.textContent = '';
	let otherDiv = document.getElementById('everthingElseDiv');
	let text = document.createElement('h2');
	let xhr = new XMLHttpRequest();

	xhr.open('DELETE', 'api/prints/' + id, true);

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				text.textContent = 'Print Succesfully Deleted';
				text.style.color = 'green';
				text.style.textAlign = 'center';
				text.style.paddingTop = '10vh;'
				otherDiv.appendChild(text);
				setTimeout(function(){
					getAllPrints();
					otherDiv.textContent = '';
				}, 2000); 
			} else {
				let otherDiv = document.getElementById('everthingElseDiv');
				let h3 = document.createElement('h3');
				h3.textContent = 'Print failed to delete :(';
				text.style.color = 'green';
				text.style.textAlign = 'center';
				otherDiv.appendChild(h3);
				setTimeout(function(){
					getAllPrints();
					otherDiv.textContent = '';
				}, 2000); 
			}
		}
	};

	xhr.send();
}

function showSinglePrint(print) {
	let printDiv = document.getElementById('printDiv');
	
	// let divRow = document.createElement('div');
	// divRow.class = 'row';
	// printDiv.appendChild(divRow);
	let div2 = document.createElement('div');
	div2.className = 'col-lg-4 col-md-6 col-12 mt-4 pt-2';
	printDiv.firstElementChild.appendChild(div2);

	// Div container for main content divs 
	// div3 ==> Main Content DIV 
	let div3 = document.createElement('div');
	div3.className = 'card service-wrapper rounded border-0 shadow p-4';
	div2.appendChild(div3);

	// Span for upper Image Icon
	let div4 = document.createElement('div');
	div4.className = 'icon text-center text-custom h1 shadow rounded bg-white';
	div3.appendChild(div4);
	let span1 = document.createElement('span');
	span1.className = "uim-svg";
	div4.appendChild(span1);
	// First SVG 
	let svg1 = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
	svg1.setAttribute('viewBox','0 0 24 24');
	svg1.setAttribute('width', '0.90em');
	svg1.setAttribute('class', 'bi bi-boxes');
	// First SVG path
	let path1 = document.createElementNS('http://www.w3.org/2000/svg','path');
	path1.setAttribute('class', 'uim-quaternary');
	path1.setAttribute('d', 'M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434L7.752.066ZM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567L4.25 7.504ZM7.5 9.933l-2.75 1.571v3.134l2.75-1.571V9.933Zm1 3.134 2.75 1.571v-3.134L8.5 9.933v3.134Zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567-2.742 1.567Zm2.242-2.433V3.504L8.5 5.076V8.21l2.75-1.572ZM7.5 8.21V5.076L4.75 3.504v3.134L7.5 8.21ZM5.258 2.643 8 4.21l2.742-1.567L8 1.076 5.258 2.643ZM15 9.933l-2.75 1.571v3.134L15 13.067V9.933ZM3.75 14.638v-3.134L1 9.933v3.134l2.75 1.571Z');

	// Add SVG with path to span
	svg1.appendChild(path1);
	span1.appendChild(svg1);


	// Main Text Content Div 
	let div5 = document.createElement('div');
	div5.className = 'content mt-4';
	div3.appendChild(div5);

	//Title
	let title = document.createElement('h5');
	title.className = 'title';
	title.textContent = print.name;
	div5.appendChild(title);

	// Hidden info
	let div6 = document.createElement('div');
	div6.className = 'allPrintInfo';
	div5.appendChild(div6);



	let h3 = document.createElement('h3');
	h3.textContent = "Printer Settings:"
	h3.style.textDecoration = 'underline'
	div6.appendChild(h3);
	let p1 = document.createElement('p');
	p1.textContent = "Print Temp: " + print.printTemp;
	div6.appendChild(p1);
	let p2 = document.createElement('p');
	p2.textContent = "Print speed: " + print.printSpeed;
	div6.appendChild(p2);
	let p3 = document.createElement('p');
	p3.textContent = "Print quality: " + print.printQuality;
	div6.appendChild(p3);
	let p4 = document.createElement('p');
	p4.textContent = "Adhesion Layer: " + print.adhesionLayer;
	div6.appendChild(p4);
	let p5 = document.createElement('p');
	p5.textContent = "Supports: " + print.supports;
	div6.appendChild(p5);
	let p6 = document.createElement('p');
	p6.textContent = "Creates: " + print.creates;
	div6.appendChild(p6);
	let h4 = document.createElement('h4');
	h4.textContent = 'Print files: ';
	h4.style.textDecoration = 'underline'
	div6.appendChild(h4);

	// STL Link
	let link = document.createElement('a');
	link.href = print.stlFileUrl;
	link.className = 'btn btn-outline-primary';
	link.target = '_blank';
	link.textContent = 'STL files...';
	div6.appendChild(link);
	// Gcode Link
	if (print.customGcodeUrl != '' || print.customGcodeUrl != null){
	let link2 = document.createElement('a');
	link.href2 = print.customGcodeUrl;
	link.className = 'btn btn-outline-primary';
	link.target = '_blank';
	link.textContent = 'STL files...';
	div6.appendChild(link);
	}
	//Update btn
	let upButton = document.createElement('button');
	upButton.className = 'btn btn-outline-success';
	upButton.textContent = 'Update';
	upButton.addEventListener('click',(e) => {
		e.preventDefault();
		updateMe(print);
	});
	div6.appendChild(upButton);
	//Update btn
	let delButton = document.createElement('button');
	delButton.className = 'btn btn-outline-danger';

	delButton.textContent = 'Delete';
	delButton.addEventListener('click', (e) => {
		e.preventDefault(e);
		deletePrint(print.id);
	});		
	div6.appendChild(delButton);

	// Button Div
	let div7 = document.createElement('div');
	div7.className = 'mt-3';
	div5.appendChild(div7);
	// Button
	let button = document.createElement('button');
	button.className = 'btn btn-primary readmoreBtn';
	button.textContent = 'All info';
	button.addEventListener('click', (e) =>{
		if (div6.style.display == 'none') {
			div6.style.display = 'block';
		} else {
			div6.style.display = 'none';
		}
	})
	div7.appendChild(button);

	// SVG Big icon
	// Span for upper Image Icon
	let div8 = document.createElement('div');
	div8.className = 'big-icon h1 text-custom';
	div3.appendChild(div8);
	let span2 = document.createElement('span');
	span2.className = "uim-svg";
	span2.style = "";
	div8.appendChild(span2);
	
	// Second SVG 
	let svg2 = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
	svg2.setAttribute('xmlns','http://www.w3.org/2000/svg');
	svg2.setAttribute('viewBox','0 0 24 24');
	svg2.setAttribute('width', '1em');
	svg2.setAttribute('class', 'bi bi-boxes');
	svg2.setAttribute('enable-background', 'new 0 0 24 24');
	svg2.setAttribute('style', '');
	// Second SVG path
	let path2 = document.createElementNS('http://www.w3.org/2000/svg','path');
	path2.setAttribute('class', 'uim-quaternary');
	path2.setAttribute('d', 'M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434L7.752.066ZM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567L4.25 7.504ZM7.5 9.933l-2.75 1.571v3.134l2.75-1.571V9.933Zm1 3.134 2.75 1.571v-3.134L8.5 9.933v3.134Zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567-2.742 1.567Zm2.242-2.433V3.504L8.5 5.076V8.21l2.75-1.572ZM7.5 8.21V5.076L4.75 3.504v3.134L7.5 8.21ZM5.258 2.643 8 4.21l2.742-1.567L8 1.076 5.258 2.643ZM15 9.933l-2.75 1.571v3.134L15 13.067V9.933ZM3.75 14.638v-3.134L1 9.933v3.134l2.75 1.571Z');


	// Add SVG with path to span
	svg2.appendChild(path2);
	span2.appendChild(svg2);

}

function displayAllPrints(prints) {
	for (let print of prints) {
		showSinglePrint(print);
	}
}

function updateMe(print) {
	let printDiv = document.getElementById('printDiv').firstElementChild;
	printDiv.textContent = "";
	let updateToggle = document.getElementById('updateFormToggle');
	updateToggle.style.display = 'block';
	let upForm = document.getElementById('updateForm');
	let idInput = document.createElement('input');
	idInput.type = "hidden";
	idInput.value = print.id;
	idInput.name = "id";
	upForm.appendChild(idInput);
	console.log(print.stlFileUrl);
	upForm.printName.value = print.name;
	upForm.stlUrl.value = print.stlFileUrl;
	upForm.gcodeUrl.value = print.customGcodeUrl;
	upForm.printerName.value = print.printerName;
	upForm.printTemp.value = print.printTemp;
	upForm.printSpeed.value = print.printSpeed;
	upForm.printQuality.value = print.printQuality;
	upForm.adhesionLayer.value = print.adhesionLayer;
	upForm.supports.value = print.supports;
	upForm.imageUrl.value = print.imageUrl;
	upForm.creates.value = print.creates;
	upForm.createDate.value = print.lastDateCreated;

}
