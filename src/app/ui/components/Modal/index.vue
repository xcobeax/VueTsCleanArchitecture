<template>
  <div>
  <b-button class="btn btn-dark" @click="showModal" ref="btnShow">{{modalButton}}</b-button>
  <b-modal id="modal-1" :title="modalTitle">
    <slot />
  </b-modal>
</div>
</template>

<script>
export default {
  props:{
    modalButton:{
      type: String,
    },
    modalTitle:{
      type: String,
    }
  },
  methods: {
    showModal() {
      this.$root.$emit('bv::show::modal', 'modal-1', '#btnShow')
    },
    hideModal() {
      this.$root.$emit('bv::hide::modal', 'modal-1', '#btnShow')
    },
  }
}
</script>