import { combineReducers } from 'redux';
import HomeReducer from './homereducer';
import authReducer from './authreducer';
import surveyReducer from './surveyreducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
	post: HomeReducer,
	form: formReducer,
	movie: HomeReducer,
	auth: authReducer,
	surveys: surveyReducer,
});

export default rootReducer;
