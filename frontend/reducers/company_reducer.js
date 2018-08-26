import merge from "lodash/merge";
import {
    RECEIVE_CHART
} from "../actions/company_actions";

const companyReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = merge({}, state);
    switch (action.type) {
        case RECEIVE_CHART:
            return Object.assign(newState, { chart: action.chart });

        default:
            return state;
    }
};

export default companyReducer;