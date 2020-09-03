<template>
  <div>
    <b-form-input v-model="text" :placeholder="placeHolder"></b-form-input>
  </div>
</template>

<script>
export default {
  props: {
    placeHolder: {
      type: String,
      required: true
    }
  }
};
</script>