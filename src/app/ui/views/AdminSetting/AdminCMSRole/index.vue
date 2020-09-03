<template>
  <div class="p-3">
    <div class="row mb-3">
      <div class="col-8">
        <admin-search />
      </div>
      <div class="col-4 text-right">
        <admin-modal />
      </div>
    </div>
    <div>
      <admin-table />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapState } from "vuex";
import AdminSearch from './components/AdminSearch.vue';
import AdminModal from './components/AdminModal.vue';
import AdminTable from './components/TableAdmin.vue';
@Component({
  name: "AdminCMSRole",
  components: {
    "admin-search": AdminSearch,
    "admin-modal": AdminModal,
    "admin-table": AdminTable,
  },
  data(){
    return {
      rows: 100,
      perPage: 3,
      currentPage: 1,
      sortDesc: false,
      fields: [
        { key: "check", sortable: false, class: "text-center" },
        { key: "no", sortable: false, class: "text-center" },
        { key: "role_name", sortable: true },
        { key: "updated_at", sortable: true },
        { key: "created_at", sortable: true },
        { key: "action", sortable: false, class: "text-center" }
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