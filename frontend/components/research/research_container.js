import { connect } from "react-redux";
import Research from "./research";
import { fetchStats } from "../../actions/company_actions";

const mapStateToProps = (state, ownprops) => {
    return {
        stats: state.company.stats
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchStats: (sym) => dispatch(fetchStats(sym))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Research);