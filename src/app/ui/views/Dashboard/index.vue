<template>
  <div class="m-4">
    <top-menu
      class="mb-4"
      @handleSetLineChartData="handleSetLineChartData"
      :topMenuData="this.topmenu"
    />
    <el-row class="charts">
      <line-chart :chart-data="lineChartData" :dataChart="this.dataChart" :chartTitle="this.nameCharts" />
    </el-row>
    <table-menu />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TopMenu from "./Components/TopMenu.vue";
import TableMenu from "./Components/TableMenu.vue";
import LineChart, {
  ILineChartData
} from "./Components/LineChart/LineChart.vue";

@Component({
  name: "DashboardAdmin",
  components: {
    "top-menu": TopMenu,
    "line-chart": LineChart,
    "table-menu": TableMenu
  }
})
export default class extends Vue {
  private topmenu = [
    {
      id: 1,
      title: "active_account",
      name: "Active Account",
      key: "/ 405",
      value: 75,
      chart: [20, 130, 15, 150, 230, 90, 5],
      icon:"list-alt",
      color:"#01CAB9",
    },
    {
      id: 2,
      title: "current_active",
      name: "Current Active",
      key: "User",
      value: 10,
      chart: [210, 410, 25, 15, 23, 190, 175],
      icon:"check-circle",
    },
    {
      id: 3,
      title: "current_access",
      name: "Current Access",
      key: "User",
      value: 10,
      chart: [75, 120, 225, 315, 523, 190, 750],
      icon: "unlock-alt",
    },
    {
      id: 4,
      title: "time_rate_active",
      name: "Time Rate Active",
      key: "min / user",
      value: 7,
      chart: [120, 10, 25, 15, 23, 90, 75],
      icon: "clock",
    },
    {
      id: 5,
      title: "pkt_submitted",
      name: "PKT Submitted",
      key: "File",
      value: 70,
      chart: [125, 120, 25, 15, 23, 90, 190],
      icon: "reply"
    }
  ];
  private nameCharts = "Active Account";
  private dataChart = {
    actualData:this.topmenu[0].chart
  } 
  private nameChartData: { name: string; title: string; chart:number[] } | undefined;
  private handleSetLineChartData(type: string) {
    this.nameChartData = this.topmenu.find(item => item.title === type);
    this.nameCharts = this.nameChartData
      ? this.nameChartData.name
      : "Active Account";
    this.dataChart = {
      actualData:this.nameChartData ? this.nameChartData.chart : this.topmenu[0].chart
    }
  }
}
</script>

<style lang="scss" scoped>
.charts {
  background: #fff;
  padding: 16px 16px 0;
  margin-bottom: 16px;
}
</style>