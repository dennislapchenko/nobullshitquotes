// Array.prototype.random = () => {
// 	const 	arr = this,
// 			len = arr.length;

// 	console.log(arr);

// 	const random = max => {
// 		return Math.floor(Math.random() * max);
// 	};

// 	return arr[random(len-1)];
// };

class ArrayUtils {

	getRandom(array) {
		const len = array.length;

		const random = max => {
			return Math.floor(Math.random() * max);
		};

		return array[random(len-1)];
	}
}


module.exports = new ArrayUtils();