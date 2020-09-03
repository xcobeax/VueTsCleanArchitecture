<template>
  <div>
    <admin-modal :modalButton="modalButton" :modalTitle="modalTitle">
        <p>Name</p>
       <admin-input />
       <p>Role Select</p>
       <admin-input />
    </admin-modal>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Modal from "@/app/ui/components/Modal/index";
import FormInput from '@/app/ui/components/FormInput/index';
export default {
  name: "app",
  components: {
    "admin-modal": Modal,
    "admin-input" : FormInput,
  },
  data() {
    return {
    modalButton:"Add Role",
    modalTitle:"Add New Role",
    };
  },
};
</script>