import React from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import WorkIcon from "@material-ui/icons/Work";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import {
  LineChart,
  Line,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer
} from "recharts";
import CustomTooltip from "./custom_tooltip";

class Company extends React.Component {
  constructor(props) {
    super(props);
    this.chartData = this.chartData.bind(this);
  }

  componentWillReceiveProps(nextProps) {}

  componentDidMount() {
    this.props.fetchChart(this.props.match.params.companyTik);
  }

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

  chartData() {
    let data = [];
    this.props.chart.forEach((el, i) => {
      if (!(el.high === -1)) {
        data.push({ x: i, y: el.high });
      }
    });
    return data;
  }

  chart() {
    return (
      <ResponsiveContainer width="100%" aspect={7.0 / 3.0}>
        <LineChart
          data={this.chartData()}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <Line
            type="monotone"
            dataKey="y"
            stroke="#4bb4ff"
            strokeWidth={2}
            dot={false}
          />
          <XAxis dataKey="x" stroke="none" />
          <YAxis domain={["auto", "auto"]} stroke="none" />
          <Tooltip
            wrapperStyle={{
              background: "transparent",
              border: "none",
              color: "lightgray"
            }}
            cursor={{ strokeWidth: 1 }}
            offset={-90}
            isAnimationActive={false}
            position={{ x: 0, y: 0 }}
            content={<CustomTooltip />}
          />
        </LineChart>
      </ResponsiveContainer>
    );
  }

  render() {
      if (this.props.chart === undefined) return null;
    return (
      <div className="company-item">
        <div className="company-navbar">
          <div className="company-navbar-left">
            <h1>{this.props.match.params.companyTik}</h1>
          </div>
          <div className="company-navbar-right">
            <form className="company-search" action="">
              <input
                id="search-input"
                type="text"
                name="company"
                value="Company"
              />
              <input type="submit" value="Search" />
            </form>
          </div>
        </div>
        <div className="company-detail">
          <div className="company-info">
            <Button
              variant="outlined"
              color="primary"
              className={this.props.button}
              id="something-button"
            >
              Something
            </Button>
            <Button
              variant="outlined"
              color="primary"
              className={this.props.button}
              id="something-button"
            >
              Something
            </Button>
            <Button
              variant="outlined"
              color="primary"
              className={this.props.button}
              id="something-button"
            >
              Something
            </Button>
          </div>
          <br />
          <div className="company-chart">
            {this.chart()}
          </div>
          <br />
          <div>
            <Button
              variant="outlined"
              color="secondary"
              className={this.props.button}
              id="quarter-button"
            >
              <div>Next Quarter Date</div>
              <div>December 5th, 2018</div>
            </Button>
          </div>
          <br />
          <div>
            <h1>News</h1>
            <List>
              <ListItem>
                <Avatar>
                  <ImageIcon />
                </Avatar>
                <ListItemText primary="News Article 1" />
              </ListItem>
              <ListItem>
                <Avatar>
                  <WorkIcon />
                </Avatar>
                <ListItemText primary="News Article 2" />
              </ListItem>
              <ListItem>
                <Avatar>
                  <BeachAccessIcon />
                </Avatar>
                <ListItemText primary="News Article 3" />
              </ListItem>
            </List>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Company);
