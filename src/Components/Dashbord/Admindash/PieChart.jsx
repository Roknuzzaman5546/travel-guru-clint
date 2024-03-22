//component added by Roknuzzaman Sojib

import { Component } from "react";
import ReactApexChart from "react-apexcharts";

class PieChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [44, 55, 13, 43],
      options: {
        chart: {
          width: 380,
          type: "pie",
        },
        labels: ["All users", "Items", "Revenue", "Orders"],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 300,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
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
            type="pie"
            width={380}
          />
        </div>
        <div id="html-dist"></div>
      </div>
    );
  }
}

export default PieChart;
