import React from "react";
import { Link, withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

class Research extends React.Component {
  constructor(props) {
    super(props);
    this.quarterly = this.quarterly.bind(this)
  }

  componentWillReceiveProps(nextProps) {}

  componentDidMount() {
    this.props.fetchStats(this.props.match.params.companyTik);
    this.props.fetchFinancials(this.props.match.params.companyTik);
  }

  marketCap(n) {
    if (n === undefined) return null;
    if (n >= 1000) {
      let units = ["k", "M", "B", "T"];

      let unit = Math.floor((n.toFixed(0).length - 1) / 3) * 3;
      let num = (n / ("1e" + unit)).toFixed(2);
      let unitname = units[Math.floor(unit / 3) - 1];

      return num + unitname;
    }

    return n.toLocaleString();
  }

  quarterlyRow() {
    let accumulate = [];
    let keys = ['totalRevenue', 'grossProfit', 'operatingIncome', 'netIncome'];
    for (k of keys) {
      // row label
      accumulate.push(<TableCell>{ k }</TableCell>)
      let label = k;
      for (let i = 0; i < 4; i++) {
        // row value
        let value = this.props.financials[k][i];
        accumulate.push(<TableCell>{ value }</TableCell>)
      }
    }
    return accumulate;
  }

  render() {
    if (this.props.stats === undefined) return null;
    if (this.props.financials == undefined) return null;

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
        <div className="research-detail">
          <Paper>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Key Statistics</TableCell>
                  <TableCell numeric>Value</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Market Cap
                  </TableCell>
                  <TableCell numeric>{ this.marketCap(this.props.stats.marketcap) }</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    EPS
                  </TableCell>
                  <TableCell numeric>{ this.props.stats.latestEPS }</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    PE Ratio
                  </TableCell>
                  <TableCell numeric>{ this.props.stats.peRatioHigh }</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Short Ratio
                  </TableCell>
                  <TableCell numeric>{ this.props.stats.shortRatio.toFixed(2) }</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Paper>
          <Paper>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Historical Financial</TableCell>
                  <TableCell>Q1</TableCell>
                  <TableCell>Q2</TableCell>
                  <TableCell>Q3</TableCell>
                  <TableCell>Q4</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                /* this.props.financials */
                { this.quarterly() }
              </TableBody>
            </Table>
          </Paper>
        </div>
      </div>
    );
  }
}

export default withRouter(Research);
