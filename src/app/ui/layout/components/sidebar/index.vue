<template>
  <div class="has-logo">
    <sidebar-logo collapse/>
    <div class="has-logo" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :active-text-color="variables.menuActiveText"
        :unique-opened="false"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item
          v-for="route in routes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
          :is-collapse="isCollapse"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { AppModule } from '@/store/modules/app';
import SidebarLogo from './sidebarlogo.vue';
import SidebarItem from './SidebarItem.vue';
import SidebarFooter from './SidebarFooter.vue';
import variables from '@/app/ui/styles/_variables.scss';
@Component({
  name: 'SideBar',
  components: {
    SidebarLogo,
    SidebarItem,
    SidebarFooter,
  },
})
export default class extends Vue {
  get sidebar() {
    return AppModule.sidebar;
  }

  get routes() {
    return (this.$router as any).options.routes;
  }

  get variables() {
    return variables;
  }

  get isCollapse() {
    return !this.sidebar.opened;
  }
}
</script>
<style lang="scss">
.sidebar-container {
  // reset element-ui css
  .horizontal-collapse-transition {
    transition: 0s width ease-in-out, 0s padding-left ease-in-out,
      0s padding-right ease-in-out;
  }

  .scrollbar-wrapper {
    overflow-x: hidden !important;
  }

  .el-scrollbar__view {
    height: 100%;
  }

  .el-scrollbar__bar {
    &.is-vertical {
      right: 0px;
    }

    &.is-horizontal {
      display: none;
    }
  }
}
</style>

<style lang="scss" scoped>
.el-scrollbar {
  height: 100%;
}

.has-logo {
  .el-scrollbar {
    height: calc(100% - 50px);
  }
}

.el-menu {
  border: none;
  height: 100%;
  width: 100% !important;
}
.has-logo {
  border-bottom: 5px solid rgb(189, 10, 10);
}
</style>