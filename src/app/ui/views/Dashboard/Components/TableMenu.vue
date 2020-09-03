<template>
  <div>
    <div class="row mb-4">
      <div class="col-md-6">
        <b-card border-variant="secondary" :header="cardTitle" align="center" body-class="p-0" >
          <b-table
            hover
            striped
            small
            :items="roleList"
            :fields="fields"
            responsive="sm"
            class="mb-0"
          >
            <template v-slot:cell(no)="data">
              <p>{{data.index+1}}</p>
            </template>
          </b-table>
        </b-card>
      </div>
      <div class="col-md-6">
        <b-card border-variant="secondary" :header="cardTitle" align="center" body-class="p-0" >
          <b-table
            hover
            striped
            small
            :items="roleList"
            :fields="fields"
            responsive="sm"
            class="mb-0"
          >
            <template v-slot:cell(no)="data">
              <p>{{data.index+1}}</p>
            </template>
          </b-table>
        </b-card>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <b-card border-variant="secondary" :header="cardTitle" align="center" body-class="p-0" >
          <b-table
            hover
            striped
            small
            :items="roleList"
            :fields="fields"
            responsive="sm"
            class="mb-0"
          >
            <template v-slot:cell(no)="data">
              <p>{{data.index+1}}</p>
            </template>
          </b-table>
        </b-card>
      </div>
      <div class="col-md-6">
        <b-card border-variant="secondary" :header="cardTitle" align="center" body-class="p-0" >
          <b-table
            hover
            striped
            small
            :items="roleList"
            :fields="fields"
            responsive="sm"
            class="mb-0"
          >
            <template v-slot:cell(no)="data">
              <p>{{data.index+1}}</p>
            </template>
          </b-table>
        </b-card>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { mapState } from "vuex";

@Component({
  name: "TableMenu",
  data() {
    return {
      cardTitle: "User Active Daily",
      cardTitle2: "Most View Content Daily",
      alignCard: "center",
      fields: [
        { key: "no", sortable: false, class: "text-center" },
        { key: "role_name", sortable: false },
        { key: "updated_at", sortable: false }
      ]
    };
  },
  mounted() {
    this.$store.dispatch("loadRole");
  },
  computed: {
    ...mapState(["roleList"])
  }
})
export default class extends Vue {}
</script>