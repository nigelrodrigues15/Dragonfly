import React from "react";
import { Link, withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";

class Research extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {}

  componentDidMount() {
      this.props.fetchStats(this.props.match.params.companyTik);
  }

  render() {
    if (this.props.stats === undefined) return null;
    return (
      <div className="research-item">
        <div className="research-navbar">
          <div className="research-navbar-left">
            <div className="dragonfly">
              <div className="dfbl" />
              <div className="dfblk" />
              <div className="dfblk" />
              <div className="dfbl" />
            </div>
            <Link className="Link" to="/home">
              <Button variant="outlined" id="home-research">
                Home
              </Button>
            </Link>
            <Button variant="outlined" id="research-button">
              {this.props.match.params.companyTik}
            </Button>
          </div>
        </div>
        <div className="company-detail"> 
        
        </div>
      </div>
    );
  }
}

export default withRouter(Research);
