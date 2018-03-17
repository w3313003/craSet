import { combineReducers } from 'redux';
import IndexReducer from './user/index'

const obj = {
	name: 123
}

const globalReducer = (state = obj, action) => {
	const { type, payload } = action;
	switch (type) {
		case 'ADD':
			return {...state, name: payload}
		default: 
			return state;
	}
};

export default combineReducers(
	{
		globalReducer, 
		IndexReducer
	}
);