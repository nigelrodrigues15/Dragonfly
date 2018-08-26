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

  componentDidMount() {

  }

  render() {
    return (
      <div className="home-item">
        <div className="home-navbar">
          <div className="home-navbar-left">
            <Link className="Link" to="/">
              <div className="dragonfly">
                <div className="dfbl"  />
                <div/>
                <div/>
                <div className="dfbl" />
              </div>
            </Link>
            <Link className="Link" to="/home">
              <Button variant="outlined" id="home">
                Home
              </Button>
            </Link>
          </div>
            <div className="home-navbar-center">
            <Link className="Link" to="/home">
              <Button variant="outlined" id="home-navbar-center-box1">
                Research
              </Button>
            </Link>

            </div>
            <div className="home-navbar-center">
            <Link className="Link" to="/home">
              <Button variant="outlined" id="home-navbar-center-box2">
                Education
              </Button>
            </Link>

            </div>



        </div>
        <div className="home-detail">
          <div className="watchlist">

            <Link className="Link" to="/company/FB">
  <div class="my-3 my-md-5">
          {/*<div class="container">*/}

            <div class="row row-cards">
              <div class="col-6 col-sm-4 col-lg-3">
                <div class="card">
                  <div class="card-body p-3 text-center">
                    <div class="text-right">
                      NASDAQ:FB
                    </div>
                    <div class="h1 m-0">FB</div>
                    <div class="text-muted mb-4">Ticker</div>
                  </div>
                </div>
              </div>
              <div class="col-6 col-sm-4 col-lg-3">
                <div class="card">
                  <div class="card-body p-3 text-center">
                    <div class="text-right text-green">
                      1.75%
                      <i class="fe fe-chevron-down"></i>
                    </div>
                    <div class="h1 m-0">$504.24B</div>
                    <div class="text-muted mb-4">MarketCap</div>
                  </div>
                </div>
              </div>
              <div class="col-6 col-sm-4 col-lg-3">
                <div class="card">
                  <div class="card-body p-3 text-center">
                    <div class="text-right text-green">
                      1.75%
                      <i class="fe fe-chevron-down"></i>
                    </div>
                    <div class="h1 m-0">$174.64</div>
                    <div class="text-muted mb-4">Stock Price</div>
                  </div>
                </div>
              </div>

              <div class="col-6 col-sm-4 col-lg-3">
                <div class="card">
                  <div class="card-body p-3 text-center">
                    <div class="text-right text-red">
                      -
                    </div>
                    <div class="h1 m-0">-10%</div>
                    <div class="text-muted mb-4">YOY % Change</div>
                  </div>
                </div>
              </div>


            </div>
          {/*</div>*/}
        </div>

            </Link>

            <Link className="Link" to="/company/AMZN">
  <div class="my-3 my-md-5">
          {/*<div class="container">*/}

            <div class="row row-cards">
              <div class="col-6 col-sm-4 col-lg-3">
                <div class="card">
                  <div class="card-body p-3 text-center">
                    <div class="text-right">
                      NASDAQ:AMZN
                    </div>
                    <div class="h1 m-0">AMZN</div>
                    <div class="text-muted mb-4">Ticker</div>
                  </div>
                </div>
              </div>
              <div class="col-6 col-sm-4 col-lg-3">
                <div class="card">
                  <div class="card-body p-3 text-center">
                    <div class="text-right text-green">
                      2.49%
                      <i class="fe fe-chevron-down"></i>
                    </div>
                    <div class="h1 m-0">$929.34B</div>
                    <div class="text-muted mb-4">MarketCap</div>
                  </div>
                </div>
              </div>
              <div class="col-6 col-sm-4 col-lg-3">
                <div class="card">
                  <div class="card-body p-3 text-center">
                    <div class="text-right text-green">
                      2.49%
                      <i class="fe fe-chevron-down"></i>
                    </div>
                    <div class="h1 m-0">$1,905.39</div>
                    <div class="text-muted mb-4">Stock Price</div>
                  </div>
                </div>
              </div>

              <div class="col-6 col-sm-4 col-lg-3">
                <div class="card">
                  <div class="card-body p-3 text-center">
                    <div class="text-right text-green">
                      -
                    </div>
                    <div class="h1 m-0">+20%</div>
                    <div class="text-muted mb-4">YOY % Change</div>
                  </div>
                </div>
              </div>


            </div>
          {/*</div>*/}
        </div>

            </Link>

            <Link className="Link" to="/company/TTWO">
  <div class="my-3 my-md-5">
          {/*<div class="container">*/}

            <div class="row row-cards">
              <div class="col-6 col-sm-4 col-lg-3">
                <div class="card">
                  <div class="card-body p-3 text-center">
                    <div class="text-right">
                      NASDAQ:TTWO
                    </div>
                    <div class="h1 m-0">TTWO</div>
                    <div class="text-muted mb-4">Ticker</div>
                  </div>
                </div>
              </div>
              <div class="col-6 col-sm-4 col-lg-3">
                <div class="card">
                  <div class="card-body p-3 text-center">
                    <div class="text-right text-green">
                      3.33%
                      <i class="fe fe-chevron-down"></i>
                    </div>
                    <div class="h1 m-0">$15.25B</div>
                    <div class="text-muted mb-4">MarketCap</div>
                  </div>
                </div>
              </div>
              <div class="col-6 col-sm-4 col-lg-3">
                <div class="card">
                  <div class="card-body p-3 text-center">
                    <div class="text-right text-green">
                      3.33%
                      <i class="fe fe-chevron-down"></i>
                    </div>
                    <div class="h1 m-0">$134.01</div>
                    <div class="text-muted mb-4">Stock Price</div>
                  </div>
                </div>
              </div>

              <div class="col-6 col-sm-4 col-lg-3">
                <div class="card">
                  <div class="card-body p-3 text-center">
                    <div class="text-right text-red">
                      -
                    </div>
                    <div class="h1 m-0">-10%</div>
                    <div class="text-muted mb-4">YOY % Change</div>
                  </div>
                </div>
              </div>


            </div>
          {/*</div>*/}
        </div>

            </Link>

                <Link className="Link" to="/company/CRM">
<div class="my-3 my-md-5">
  {/*<div class="container">*/}

    <div class="row row-cards">
      <div class="col-6 col-sm-4 col-lg-3">
        <div class="card">
          <div class="card-body p-3 text-center">
            <div class="text-right">
              NYSE:CRM
            </div>
            <div class="h1 m-0">CRM</div>
            <div class="text-muted mb-4">Ticker</div>
          </div>
        </div>
      </div>
      <div class="col-6 col-sm-4 col-lg-3">
        <div class="card">
          <div class="card-body p-3 text-center">
            <div class="text-right text-green">
              4.49%
              <i class="fe fe-chevron-down"></i>
            </div>
            <div class="h1 m-0">$504.24B</div>
            <div class="text-muted mb-4">MarketCap</div>
          </div>
        </div>
      </div>
      <div class="col-6 col-sm-4 col-lg-3">
        <div class="card">
          <div class="card-body p-3 text-center">
            <div class="text-right text-green">
              4.49%
              <i class="fe fe-chevron-down"></i>
            </div>
            <div class="h1 m-0">$152.30</div>
            <div class="text-muted mb-4">Stock Price</div>
          </div>
        </div>
      </div>

      <div class="col-6 col-sm-4 col-lg-3">
        <div class="card">
          <div class="card-body p-3 text-center">
            <div class="text-right text-green">
              -
            </div>
            <div class="h1 m-0">21.4%</div>
            <div class="text-muted mb-4">YOY % Change</div>
          </div>
        </div>
      </div>


    </div>
  {/*</div>*/}
</div>

    </Link>

            <Link className="Link" to="/company/TWTR">
  <div class="my-3 my-md-5">
          {/*<div class="container">*/}

            <div class="row row-cards">
              <div class="col-6 col-sm-4 col-lg-3">
                <div class="card">
                  <div class="card-body p-3 text-center">
                    <div class="text-right">
                      NYSE:TWTR
                    </div>
                    <div class="h1 m-0">TWTR</div>
                    <div class="text-muted mb-4">Ticker</div>
                  </div>
                </div>
              </div>
              <div class="col-6 col-sm-4 col-lg-3">
                <div class="card">
                  <div class="card-body p-3 text-center">
                    <div class="text-right text-green">
                      0.40%
                      <i class="fe fe-chevron-down"></i>
                    </div>
                    <div class="h1 m-0">$25.98B</div>
                    <div class="text-muted mb-4">MarketCap</div>
                  </div>
                </div>
              </div>
              <div class="col-6 col-sm-4 col-lg-3">
                <div class="card">
                  <div class="card-body p-3 text-center">
                    <div class="text-right text-green">
                      0.40%
                      <i class="fe fe-chevron-down"></i>
                    </div>
                    <div class="h1 m-0">$34.28</div>
                    <div class="text-muted mb-4">Stock Price</div>
                  </div>
                </div>
              </div>

              <div class="col-6 col-sm-4 col-lg-3">
                <div class="card">
                  <div class="card-body p-3 text-center">
                    <div class="text-right text-red">
                      -
                    </div>
                    <div class="h1 m-0">-15.8%</div>
                    <div class="text-muted mb-4">YOY % Change</div>
                  </div>
                </div>
              </div>


            </div>
          {/*</div>*/}
        </div>

            </Link>


          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Home);
