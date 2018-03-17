import Types from './types';

export default {
	[Types.ADD]: payload => ({
		payload,		
		type: Types.ADD,
	})
}