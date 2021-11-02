function getCircle(x, n) {
	if(n === undefined) return x * x * Math.PI;

	let sum = 0;
	for(let i = x; i <= n; i++) sum += i * i * Math.PI;

	return sum;
}

function getRect(x1, x2) {
	return x1 * x2;
}

function getTrapezoid(x1, x2, x3) {
	return (x1 + x2) * x3 / 2;
}

function getArea(shape) {
	let area;
	switch (shape) {
		case 'circle': 
			area = getCircle(arguments[1], arguments[2]);
			break;
		case 'rect': 
			area = getRect(arguments[1], arguments[2]);
			break;
		case 'trapezoid': 
			area = getRect(arguments[1], arguments[2], arguments[3]);
			break;
	}

	return `${shape} - ${area}`;
}

function printExecutionSequence() {
	let results = [];
	results.push(getArea('circle', 10));
	results.push(getArea('circle', 10));
	console.log(results.join(", "));
}