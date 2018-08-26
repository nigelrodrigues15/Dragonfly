import React from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {}

  componentDidMount() {}

  render() {
    return (
      <div className="home-item">
        <div className="home-navbar">
          <div className="home-navbar-left">
            <Link className="Link" to="/">
              <div className="dragonfly">
                <div className="dfbl" />
                <div className="dfblk" />
                <div className="dfblk" />
                <div className="dfbl" />
              </div>
            </Link>
            <Link className="Link" to="/home">
              <Button variant="outlined" id="home">
                Home
              </Button>
            </Link>
          </div>
        </div>
        <div className="home-detail">
          <div className="watchlist">
            <Link className="Link" to="/company/FB">
              <Button
                variant="outlined"
                color="secondary"
                className={this.props.button}
                id="company-button"
              >
                <div>FB</div>
                <div>Price Change</div>
                <div>Percent Change</div>
                <div>Market Cap</div>
              </Button>
            </Link>
            <Link className="Link" to="/company/TWTR">
              <Button
                variant="outlined"
                color="secondary"
                className={this.props.button}
                id="company-button"
              >
                <div>TWTR</div>
                <div>Price Change</div>
                <div>Percent Change</div>
                <div>Market Cap</div>
              </Button>
            </Link>
            <Link className="Link" to="/company/SNAP">
              <Button
                variant="outlined"
                color="secondary"
                className={this.props.button}
                id="company-button"
              >
                <div>SNAP</div>
                <div>Price Change</div>
                <div>Percent Change</div>
                <div>Market Cap</div>
              </Button>
            </Link>
            <br />
            <br />
            <br />
            <Link className="Link" to="/company/EA">
              <Button
                variant="outlined"
                color="secondary"
                className={this.props.button}
                id="company-button"
              >
                <div>EA</div>
                <div>Price Change</div>
                <div>Percent Change</div>
                <div>Market Cap</div>
              </Button>
            </Link>
            <Link className="Link" to="/company/ATVI">
              <Button
                variant="outlined"
                color="secondary"
                className={this.props.button}
                id="company-button"
              >
                <div>ATVI</div>
                <div>Price Change</div>
                <div>Percent Change</div>
                <div>Market Cap</div>
              </Button>
            </Link>
            <Link className="Link" to="/company/TTWO">
              <Button
                variant="outlined"
                color="secondary"
                className={this.props.button}
                id="company-button"
              >
                <div>TTWO</div>
                <div>Price Change</div>
                <div>Percent Change</div>
                <div>Market Cap</div>
              </Button>
            </Link>
            <br />
            <br />
            <br />
            <Link className="Link" to="/company/MSFT">
              <Button
                variant="outlined"
                color="secondary"
                className={this.props.button}
                id="company-button"
              >
                <div>MSFT</div>
                <div>Price Change</div>
                <div>Percent Change</div>
                <div>Market Cap</div>
              </Button>
            </Link>
            <Link className="Link" to="/company/ORCL">
              <Button
                variant="outlined"
                color="secondary"
                className={this.props.button}
                id="company-button"
              >
                <div>ORCL</div>
                <div>Price Change</div>
                <div>Percent Change</div>
                <div>Market Cap</div>
              </Button>
            </Link>
            <Link className="Link" to="/company/SAP">
              <Button
                variant="outlined"
                color="secondary"
                className={this.props.button}
                id="company-button"
              >
                <div>SAP</div>
                <div>Price Change</div>
                <div>Percent Change</div>
                <div>Market Cap</div>
              </Button>
            </Link>
            <Link className="Link" to="/company/ADBE">
              <Button
                variant="outlined"
                color="secondary"
                className={this.props.button}
                id="company-button"
              >
                <div>ADBE</div>
                <div>Price Change</div>
                <div>Percent Change</div>
                <div>Market Cap</div>
              </Button>
            </Link>
            <Link className="Link" to="/company/CRM">
              <Button
                variant="outlined"
                color="secondary"
                className={this.props.button}
                id="company-button"
              >
                <div>CRM</div>
                <div>Price Change</div>
                <div>Percent Change</div>
                <div>Market Cap</div>
              </Button>
            </Link>
            <Link className="Link" to="/company/WDAY">
              <Button
                variant="outlined"
                color="secondary"
                className={this.props.button}
                id="company-button"
              >
                <div>WDAY</div>
                <div>Price Change</div>
                <div>Percent Change</div>
                <div>Market Cap</div>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Home);
