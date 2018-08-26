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

export const RECEIVE_PRICE = "RECEIVE_PRICE";
export const fetchPrice = sym => dispatch =>
    CompanyAPIUtil.fetchPrice(sym).then(price => dispatch(receivePrice(price)));
export const receivePrice = price => {
    return {
        type: RECEIVE_PRICE,
        price
    };
};

export const RECEIVE_LOGO = "RECEIVE_LOGO";
export const fetchLogo = sym => dispatch =>
    CompanyAPIUtil.fetchlogo(sym).then(logo => dispatch(receiveLogo(logo)));
export const receiveLogo = logo => {
    return {
        type: RECEIVE_LOGO,
        logo
    };
};

export const RECEIVE_NEWS = "RECEIVE_NEWS";
export const fetchNews = (sym) => dispatch =>
    CompanyAPIUtil.fetchNews(sym).then(news => dispatch(receiveNews(news)));
export const receiveNews = news => {
    return {
        type: RECEIVE_NEWS,
        news
    };
};