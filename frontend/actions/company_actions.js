import * as CompanyAPIUtil from "../util/company_api_util";

export const RECEIVE_CHART = "RECEIVE_CHART";
export const fetchChart = (sym) => dispatch =>
    CompanyAPIUtil.fetchChart(sym).then(chart =>
        dispatch(receiveChart(chart))
    );
export const receiveChart = chart => {
    return {
        type: RECEIVE_CHART,
        chart
    };
};