// import Highcharts from "highcharts";

const chart = {
  async created() {
    console.log("created chart basic");
  },
  data: () => ({
    chartOptions: {
      chart: {
        backgroundColor: "#000",
        width: 800,
        height: 560
      },
      title: {
        text: ""
      },
      tooltip: {
        enabled: false
      },
      xAxis: {
        title: {
          enabled: false
        }
      },
      yAxis: {
        title: {
          enabled: false
        }
      }
    }
  }),
  computed: {},
  methods: {}
};

export default chart;
