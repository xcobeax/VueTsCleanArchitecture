<template>
  <b-form inline>
      <form-input class="mb-2 mr-sm-2 mb-sm-0" :placeHolder="placeHolder" />
      <button-search class="btn btn-dark">Search</button-search>
  </b-form>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import FormInput from "@/app/ui/components/FormInput/index";
import Button from "@/app/ui/components/Button/index";
@Component({
  name: "AdminSearch",
  components: {
    "form-input": FormInput,
    "button-search": Button
  },
  data() {
    return {
      placeHolder: "Search Role"
    };
  }
})
export default class extends Vue {}
</script>