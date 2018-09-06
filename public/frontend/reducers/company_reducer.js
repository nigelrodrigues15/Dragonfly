import merge from "lodash/merge";
import {
    RECEIVE_CHART,
    RECEIVE_PRICE,
    RECEIVE_LOGO,
    RECEIVE_NEWS,
    RECEIVE_STATS,
    RECEIVE_FINANCIALS
} from "../actions/company_actions";

const companyReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = merge({}, state);
    switch (action.type) {
        case RECEIVE_CHART:
            return Object.assign(newState, { chart: action.chart });

        case RECEIVE_PRICE:
            return Object.assign(newState, { price: action.price });

        case RECEIVE_LOGO:
            return Object.assign(newState, { logo: action.logo });

        case RECEIVE_NEWS:
            return Object.assign(newState, { news: action.news });

        case RECEIVE_STATS:
            return Object.assign(newState, { stats: action.stats });

        case RECEIVE_FINANCIALS:
            return Object.assign(newState, { financials: action.financials });

        default:
            return state;
    }
};

export default companyReducer;