<<<<<<< HEAD
let result = [];

function getCircle(x, n) {
	if(n === undefined) return x * x * Math.PI;

	let sum = 0;
	for(let i = x; i <= n; i++) {
		sum += i * i * Math.PI;
	}

	return sum;
}

function getArea(shape) {
	let area;
	switch (shape) {
		case 'circle': 
			area = getCircle(arguments[1], arguments[2]);
			break;
		case 'rect': 
			area = arguments[1] * arguments[2];
			break;
		case 'trapezoid': 
			area = (arguments[1] + arguments[2]) * arguments[3] / 2;
			break;
	}
		
	result.push(`${shape} - ${area}`);
}

function printExecutionSequence() {
	console.log(result.join(", "));
=======
let result = {
	'funArr': [],
	'shapeArr': [],
	'areaArr': []
};

function getCircle(x, n) {
	result.funArr.push(arguments.callee.name);
	// result.funArr.push(getCircle.name);

	if(n === undefined) return Math.pow(x, 2) * Math.PI;

	let sum = 0;
	for(let i = x; i <= n; i++) {
		sum += Math.pow(i, 2) * Math.PI;
	}
	return sum;
}

function getArea(shape, x1, x2, x3) {
	let area;
	result.funArr.push(arguments.callee.name);
	result.shapeArr.push(shape);
	
	switch (shape) {
		case 'circle': 
			area = getCircle(x1, x2);
			break;
		case 'rect': 
			area = x1 * x2;
			break;
		case 'trapezoid': 
			area = (x1 + x2) * x3 / 2;
			break;
		}
		
		result.areaArr.push(area);
}

function printExecutionSequence() {
	result.funArr.push(arguments.callee.name);
	result.funArr.forEach(el => console.log(el + "()"));
	console.log(`계산수행순서 : ${result.shapeArr.join(", ")}`);
	console.log(`함수의 결과 : ${result.areaArr.join(", ")}`);
>>>>>>> 2fd021e6544a22cf3bfa980f59b21e32e26fd390
}