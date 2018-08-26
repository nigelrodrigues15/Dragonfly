import { connect } from "react-redux";
import Research from "./research";
import { fetchStats, fetchFinancials } from "../../actions/company_actions";

const mapStateToProps = (state, ownprops) => {
    return {
        stats: state.company.stats,
        financials: state.company.financials.financials
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchStats: (sym) => dispatch(fetchStats(sym)),
        fetchFinancials: (sym) => dispatch(fetchFinancials(sym))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Research);