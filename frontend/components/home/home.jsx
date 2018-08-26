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

  // marketCap(n) {
  //     // got from https://gist.github.com/MartinMuzatko/1060fe584d17c7b9ca6e

  //     if (n >= 1000) {
  //         var units = ["k", "M", "B", "T"];

  //         let unit = Math.floor((n.toFixed(0).length - 1) / 3) * 3;
  //         let num = (n / ("1e" + unit)).toFixed(2);
  //         let unitname = units[Math.floor(unit / 3) - 1];

  //         return num + unitname;
  //     }

  //     return n.toLocaleString();
  // }

  render() {
    return (
      <div className="home-item">
        <div className="home-navbar">
          <div className="home-navbar-left">
            <h1>Dragonfly</h1>
          </div>
          <div className="home-navbar-right">
            <form className="company-search" action="">
              <input id="search-input" type="text" name="company" value="Company" />
              <input type="submit" value="Search" />
            </form>
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
          <br/>
          <br/>
          <br/>
          <Link className="Link" to="/company">
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
          <Link className="Link" to="/company">
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
          <Link className="Link" to="/company">
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
          <br/>
          <br/>
          <br/>
          <Link className="Link" to="/company">
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
          <Link className="Link" to="/company">
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
          <Link className="Link" to="/company">
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
          <Link className="Link" to="/company">
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
          <Link className="Link" to="/company">
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
          <Link className="Link" to="/company">
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
