function isNumeric(str) {
	if (typeof str != "string") return false; // we only process strings!
	return (
		!isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
		!isNaN(parseFloat(str))
	); // ...and ensure strings of whitespace fail
}

exports.cleanRow = function (triangleArray) {
	let triangle = [];

	let verticalCount = 0;
	triangleArray.forEach((row) => {
		const cleanRow = [];
		let horizontalPosition = 0;
		const parsedRow = row.split(" ");
		parsedRow.forEach((integer) => {
			if (isNumeric(integer)) {
				cleanRow.push({
					value: parseInt(integer),
					verticalPosition: verticalCount,
					horizontalPosition: horizontalPosition,
				});
				horizontalPosition++;
			}
		});
		triangle.push(cleanRow);
		verticalCount++;
	});

	return triangle;
}

exports.generateSum = function generateSum(triangle) {
	let sum = triangle[0][0].value;
	let lastRow = triangle[0][0];
	let count = 0;
	triangle.forEach((row) => {
		if (count >= 1) {
         leftNode = row[lastRow.horizontalPosition]
         rightNode = row[lastRow.horizontalPosition + 1]

			if (leftNode.value > rightNode.value) {
				sum += leftNode.value;
				lastRow = leftNode;
			} else {
				sum += rightNode.value;
				lastRow = rightNode;
			}
		}

		count++;
	})
	return sum;
}
