import Vue from "vue";
import highcharts from "highcharts-vue";
import Highcharts from "highcharts";
import heatMapInit from "highcharts/modules/heatmap";

heatMapInit(Highcharts);

Vue.use(highcharts);
