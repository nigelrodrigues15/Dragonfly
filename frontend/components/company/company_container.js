import { connect } from "react-redux";
import Company from "./company";
import { fetchChart, fetchPrice, fetchNews, fetchLogo } from "../../actions/company_actions";

const mapStateToProps = (state, ownprops) => {
    return {
        chart: state.company.chart,
        price: state.company.price,
        logo: state.company.logo,
        news: state.company.news,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchChart: (sym) => dispatch(fetchChart(sym)),
        fetchLogo: (sym) => dispatch(fetchLogo(sym)),
        fetchNews: (sym) => dispatch(fetchNews(sym)),
        fetchPrice: (sym) => dispatch(fetchPrice(sym))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Company);