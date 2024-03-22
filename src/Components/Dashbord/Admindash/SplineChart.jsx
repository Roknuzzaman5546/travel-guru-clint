//component added by Roknuzzaman Sojib

import { Component } from "react";
import ReactApexChart from "react-apexcharts";

class SplineChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "No. of Items",
          data: [31, 40, 28, 51, 42, 109, 100],
        },
        {
          name: "Users",
          data: [11, 32, 45, 32, 34, 52, 41],
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "area",
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },
        xaxis: {
          type: "month",
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
           
          ],
        },
        tooltip: {
          x: {
            format: "MM",
          },
        },
      },

      fill: {
        type: "pattern",
        pattern: {
          style: "verticalLines",
          width: 6,
          height: 6,
          strokeWidth: 4,
        },
      },
    };
  }

  render() {
    return (
      <div>
        <div id="chart">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="area"
            height={350}
          />
        </div>
        <div id="html-dist"></div>
      </div>
    );
  }
}

export default SplineChart;
