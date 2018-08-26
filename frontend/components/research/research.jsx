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
          <h1>table</h1>
          <Paper>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Dessert (100g serving)</TableCell>
                  <TableCell numeric>Calories</TableCell>
                  <TableCell numeric>Fat (g)</TableCell>
                  <TableCell numeric>Carbs (g)</TableCell>
                  <TableCell numeric>Protein (g)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <CustomTableCell component="th" scope="row">
                    info
                  </CustomTableCell>
                  <CustomTableCell numeric>4</CustomTableCell>
                  <CustomTableCell numeric>4</CustomTableCell>
                  <CustomTableCell numeric>4</CustomTableCell>
                  <CustomTableCell numeric>4</CustomTableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Paper>
        </div>
      </div>
    );
  }
}

export default withRouter(Research);
