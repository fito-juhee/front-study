import Highcharts from "highcharts";

const sprint = {
  async created() {},
  data: () => ({}),
  computed: {},
  methods: {
    drawArrow() {
      const lineSeries = Highcharts.seriesTypes.spline;
      var lineDrawGraph = lineSeries.prototype.drawGraph;
      lineSeries.prototype.drawGraph = function() {
        const arrowLength = 12;
        const arrowWidth = 6;
        let series = this;
        let segments = series.data || series.linedata || series.segments;
        let lastPoint = segments[segments.length - 1];
        let nextLastPoint = segments[segments.length - 2];
        let angle = Math.atan(
          (lastPoint.plotX - nextLastPoint.plotX) /
            (lastPoint.plotY - nextLastPoint.plotY)
        );
        let path = [];

        angle = Math.PI + angle;
        let increaseAngle = angle + 0.35;
        let decreaseAngle = angle - 0.35;

        lineDrawGraph.apply(series, arguments);

        path.push("M", lastPoint.plotX, lastPoint.plotY);
        if (lastPoint.plotX > nextLastPoint.plotX) {
          path.push(
            "L",
            lastPoint.plotX + arrowWidth * Math.cos(increaseAngle),
            lastPoint.plotY - arrowWidth * Math.sin(increaseAngle)
          );
          path.push(
            lastPoint.plotX + arrowLength * Math.sin(angle),
            lastPoint.plotY + arrowLength * Math.cos(angle)
          );
          path.push(
            lastPoint.plotX - arrowWidth * Math.cos(decreaseAngle),
            lastPoint.plotY + arrowWidth * Math.sin(decreaseAngle),
            "Z"
          );
        } else {
          path.push(
            "L",
            lastPoint.plotX - arrowWidth * Math.cos(angle),
            lastPoint.plotY + arrowWidth * Math.sin(angle)
          );
          path.push(
            lastPoint.plotX - arrowLength * Math.sin(angle),
            lastPoint.plotY - arrowLength * Math.cos(angle)
          );
          path.push(
            lastPoint.plotX + arrowWidth * Math.cos(angle),
            lastPoint.plotY - arrowWidth * Math.sin(angle),
            "Z"
          );
        }
        series.chart.renderer
          .path(path)
          .attr({
            fill: series.color
          })
          .add(series.group);
      };
    }
  }
};

export default sprint;
