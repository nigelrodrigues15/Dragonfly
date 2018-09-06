import { combineReducers } from 'redux';
import companyReducer from './company_reducer';

const rootReducer = combineReducers({

    company: companyReducer,

});

export default rootReducer;