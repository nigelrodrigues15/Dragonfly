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
    this.quarterlyRows = this.quarterlyRows.bind(this)
  }

  componentWillReceiveProps(nextProps) {}

  componentDidMount() {
    this.props.fetchLogo(this.props.match.params.companyTik);
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

  quarterlyRows() {
    let rows = [];
    let metrics = {
      'totalRevenue': 'Total Revenue',
      'grossProfit': 'Gross Profit',
      'operatingIncome': 'Operating Income',
      'netIncome': 'Net Income'
    };
    for (let k of Object.keys(metrics)) {
      // row label
      let cols = [];
      cols.push(<TableCell>{ metrics[k] }</TableCell>)
      let label = k;
      for (let i = 0; i < 4; i++) {
        // row value
        let value = this.marketCap(this.props.financials.financials[i][k]);
        cols.push(<TableCell>{ value }</TableCell>)
      }
      rows.push(<TableRow>{ cols }</TableRow>);
    }
    return rows;
  }

  render() {
    if (this.props.logo === undefined) return null;
    if (this.props.stats === undefined) return null;
    if (this.props.financials === undefined) return null;

    let filings = [
      {"datetime": "February 1, 2018", "filing": "10-K"},
      {"datetime": "July 25, 2018", "filing": "8-K"},
      {"datetime": "July 26, 2018", "filing": "10-Q"}
    ];

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
          <img src={ this.props.logo.url } />
          <br />
          <br />
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
          <br />
          <br />
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
                { this.quarterlyRows() }
              </TableBody>
            </Table>
          </Paper>
          <br />
          <br />
          <Paper>
            <Table className="filings-table">
              <TableHead>
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell>Filing</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filings.map((row, i) => {
                  return (
                    <TableRow key={ i }>
                      <TableCell>{ row.datetime }</TableCell>
                      <TableCell>{ row.filing }</TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </Paper>
        </div>
      </div>
    );
  }
}

export default withRouter(Research);
