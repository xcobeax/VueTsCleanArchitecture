<template>
  <div>
    <b-card-group deck>
      <b-card
        v-for="(item, index) in topMenuData"
        :key="index"
        align="center"
        @click="handleSetLineChartData(item.title)"
        class="card-style p-3"
        no-body
      >
        <b-row no-gutters>
          <b-col md="2">
            <tag-icon class="tag-icon" :name="item.icon" />
          </b-col>
          <b-col md="10">
            <b-card-text class="card-name" >{{item.name}}</b-card-text>
            <b-card-text class="card-value">
              <count-to :start-val="0" :end-val="item.value" :duration="2600" />
              {{item.key}}
            </b-card-text>
          </b-col>
        </b-row>
      </b-card>
    </b-card-group>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import CountTo from "vue-count-to";

@Component({
  name: "TopMenu",
  components: {
    "count-to": CountTo
  },
  props: {
    topMenuData: {
      type: Array
    }
  }
})
export default class extends Vue {
  private handleSetLineChartData(type: string) {
    this.$emit("handleSetLineChartData", type);
  }
}
</script>

<style lang="scss" scoped>
.card-style {
  cursor: pointer;
  &:hover {
    .card-name {
      color: rgb(206, 0, 17);
    }
    .card-value {
      color: #ca0111;
    }
    .tag-icon{
      color:#ca0111;
    }
  }
}

.card-name {
  font-size: 12pt;
  font-weight: 700;
  margin-bottom: 0px !important;
}

.card-value {
  font-size: 16pt;
  font-weight: bold;
}
</style>