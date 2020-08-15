// A dictoniary is an array where all of its values are of the same type.
export type Dict<T> = {
	[k: string]: T | undefined;
};

// Array.prototype.map, but for Dict
export function mapDict<T, S>(dict: Dict<T>, fn: (arg: T, idx: number) => S): Dict<S> {
	const out: Dict<S> = {};
	Object.keys(dict).forEach((dKey, idx) => {
		const thisItem = dict[dKey];
		if (typeof thisItem !== "undefined") {
			out[dKey] = fn(thisItem, idx);
		}
	});
	return out;
}

// Array.prototype.reduce, but for Dict
export function reduceDict<T, R>(
	dict: Dict<T>,
	reducer: (acc: R, item: T, idx: number) => R,
	initialValue: R
): R {
	// start with 0
	let currentSum: R = initialValue;
	// iterate
	Object.keys(dict).forEach((key, idx) => {
		// get current value of item
		const val = dict[key];
		if (typeof val !== "undefined") {
			// add item to the "running total"
			currentSum = reducer(currentSum, val, idx);
		}
	});
	return currentSum; // return the final total
}
