import React from "react";
import { Link, withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";
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
    this.news = this.news.bind(this);
  }

  componentWillReceiveProps(nextProps) {}

  componentDidMount() {
    this.props.fetchChart(this.props.match.params.companyTik);
    this.props.fetchPrice(this.props.match.params.companyTik);
    this.props.fetchLogo(this.props.match.params.companyTik);
    this.props.fetchNews(this.props.match.params.companyTik);
  }

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

  news() {
    let news = this.props.news.map((article, i) => (
      <div className="news-div">
        <a key={i} href={article.url}>
          <img src={this.props.logo.url} alt="" />
          <p>{article.headline}</p>
        </a>
      </div>
    ));
    return <div>{news}</div>;
  }

  render() {
    if (this.props.chart === undefined) return null;
    if (this.props.price === undefined) return null;
    if (this.props.logo === undefined) return null;
    if (this.props.news === undefined) return null;
    let earnings = {
      'FB': 'November 7, 2018'
    };
    return (
      <div className="company-item">
        <div className="company-navbar">
          <div className="company-navbar-left">
            <div className="dragonfly">
              <div className="dfbl" />
              <div className="dfblk" />
              <div className="dfblk" />
              <div className="dfbl" />
            </div>
            <Link className="Link" to="/home">
              <Button variant="outlined" id="home">
                Home
              </Button>
            </Link>
            <Button variant="outlined" id="research-button">
              {this.props.match.params.companyTik}
            </Button>
          </div>
        </div>
        <div className="company-detail">
          <div className="company-info">
            <a
              className="analytics"
              href={`./analytics/${this.props.match.params.companyTik.toLowerCase()}_lda_viz.html`}
            >
              <Button
                variant="outlined"
                color="primary"
                className={this.props.button}
                id="transfer-button"
              >
                Analytics
              </Button>
            </a>
            <Link
              className="Link"
              to={`/research/${this.props.match.params.companyTik}`}
            >
              <Button
                variant="outlined"
                color="primary"
                className={this.props.button}
                id="transfer-button"
              >
                Research
              </Button>
            </Link>
          </div>
          <br />
          <div className="company-stats">
            <div>
              <img src={this.props.logo.url} alt="" />
            </div>
            <div>
              <h1 id="company-tik">{this.props.match.params.companyTik}</h1>
              <h2 id="price">${this.props.price}</h2>
            </div>
          </div>
          <div className="company-chart">
            <h2 id="ogprice">${this.props.price}</h2>
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
              <div>{ earnings[this.props.match.params.companyTik] || 'TBD' }</div>
            </Button>
          </div>
          <br />
          <div className="news">
            <h1>News</h1>
            {this.news()}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Company);
