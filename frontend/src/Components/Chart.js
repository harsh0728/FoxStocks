import React from "react";
import Plot from "react-plotly.js";

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stockChartXValues: [],
      stockChartYValues: [],
    };
  }

  componentDidMount() {
    this.fetchStock();
  }

  fetchStock() {
    const pointerToThis = this;
    console.log(pointerToThis);
    const API_KEY = "6XQQ33YNHKGQDZY7";
    let StockSymbol = "FB";
    let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=${API_KEY}`;

    let stockChartXValuesFunction = [];
    let stockChartYValuesFunction = [];

    fetch(API_Call)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);

        for (var key in data["Time Series (Daily)"]) {
          stockChartXValuesFunction.push(key);
          stockChartYValuesFunction.push(
            data["Time Series (Daily)"][key]["1. open"]
          );
        }

        // console.log(stockChartXValuesFunction);
        pointerToThis.setState({
          stockChartXValues: stockChartXValuesFunction,
          stockChartYValues: stockChartYValuesFunction,
        });
      });
  }

  render() {
    return (
      <div>
        <h1>Stock Market</h1>
        <Plot
          data={[
            {
              x: this.state.stockChartXValues,
              y: this.state.stockChartYValues,
              type: "scatter",
              mode: "lines+markers",
              marker: { color: "red" },
            },
          ]}
          layout={{
            width: 585,
            height: 340,
            title: "A Fancy Plot",
            annotations: [
              // all "annotation" attributes: #layout-annotations
              {
                text: "simple annotation", // #layout-annotations-text
                x: 0, // #layout-annotations-x
                xref: "paper", // #layout-annotations-xref
                y: 0, // #layout-annotations-y
                yref: "paper", // #layout-annotations-yref
              },
            ],
          }}
        />
      </div>
    );
  }
}

export default Chart;
