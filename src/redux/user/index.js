const initState = {
	userName: '',
	status: '',
};

export default (state = initState, action) => {
	const { type, payload } = action;
	switch(type) {
		case 'A':
			return {...state, status: payload};
		default:
			return state;
	}
} 