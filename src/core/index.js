export const initialState = {
	filterText: '',
	titles: [
		'Star Wars: The Force Awakens',
		'Star Trek',
		'The Hobbit',
		'The Lord of the Rings',
	],
};

export function changeFilterText(state, filterText) {
	return Object.assign({}, state, {
		filterText,
	});
};

export function changeTitles(state, titles) {
	return Object.assign({}, state, {
		titles
	});
};
