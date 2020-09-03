<template>
  <b-navbar toggleable="lg" type="dark" class="navbar">
      <hamburger id="hamburger-container" :is-active="sidebar.opened" @toggleClick="toggleSideBar" />
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
       <b-navbar-brand>{{currentRouteName}}</b-navbar-brand>
     </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
        <img src="https://res.cloudinary.com/dbhwvh1mf/image/upload/v1567570643/img/avatar_ynz0bv.png" width="30" height="30" class="d-inline-block align-center" alt="user">
        </b-nav-form>
        <b-nav-item-dropdown right>
          <b-dropdown-item href="#/profile/index">Profile</b-dropdown-item>
          <b-dropdown-item href="#/login">Logout</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { RouteRecord, Route } from 'vue-router';
import { AppModule } from '@/store/modules/app';
import Hamburger from '@/app/ui/components/hamburger/index.vue';
@Component({
  name: 'Navbar',
  components: {
    Hamburger,
  },
  computed: {
    currentRouteName() {
      return this.$route.meta.title;
    },
  },
})
export default class extends Vue {
  get sidebar() {
    return AppModule.sidebar;
  }
  get device() {
    return AppModule.device.toString();
  }
  private toggleSideBar() {
    AppModule.ToggleSideBar(false);
  }
}
</script>

<style scoped>
.navbar {
  background-color: #2b2f3a;
}
</style>
