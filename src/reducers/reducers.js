import { combineReducers } from 'redux';
import HomeReducer from './homereducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
	post: HomeReducer,
	form: formReducer,
});

export default rootReducer;
