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
}