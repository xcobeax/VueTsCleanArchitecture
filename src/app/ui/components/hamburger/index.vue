<template>
  <div :class="[{'is-active': isActive}]" @click="toggleClick">
    <b-navbar-brand>
       <b-nav-form>
        <tag-icon class="logo-burger d-inline-block align-center" name="bars" height="20" width="20" />
       </b-nav-form>
    </b-navbar-brand>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  name: 'Hamburger',
})
export default class extends Vue {
  @Prop({ default: false }) private isActive!: boolean;

  private toggleClick() {
    this.$emit('toggleClick');
  }
}
</script>
<style scoped>
.logo-burger{
  cursor: pointer;
}
</style>

