import { connect } from "react-redux";
import Company from "./company";
import { fetchChart } from "../../actions/company_actions";

const mapStateToProps = (state, ownprops) => {
    return {
        chart: state.company.chart
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchChart: (sym) => dispatch(fetchChart(sym))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Company);