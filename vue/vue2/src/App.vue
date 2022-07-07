<template>
  <div id="app" class="container">
    <nav class="navbar">
      <div class="nav_icon" onclick="toggleSidebar()">
        <i class="fa fa-bars" aria-hidden="true"></i>
      </div>
      <div class="navbar__left">
        <a href="#">Subscribers</a>
        <a href="#">Video Management</a>
        <a class="active_link" href="#">Admin</a>
      </div>
      <div class="navbar__right">
        <a href="#">
          <i class="fa fa-search" aria-hidden="true"></i>
        </a>
        <a href="#">
          <i class="fa fa-clock-o" aria-hidden="true"></i>
        </a>
        <a href="#">
          <img width="30" src="@/assets/avatar.svg" alt="" />
          <!-- <i class="fa fa-user-circle-o" aria-hidden="true"></i> -->
        </a>
      </div>
    </nav>

    <main>
      <div class="main__container">
        <!-- MAIN TITLE STARTS HERE -->

        <router-view />
      </div>
    </main>

    <div id="sidebar">
      <div class="sidebar__img">
        <img
          src="@/assets/avatar.jpeg"
          alt="VueJS 2"
          style="width: 100% !important"
        />
      </div>

      <MenuNav></MenuNav>
    </div>
  </div>
</template>

<script>
import MenuNav from "@/components/MenuNav.vue";

export default {
  name: "App",
  components: {
    MenuNav,
  },
};
</script>

<style>
@import "./assets/styles.css";
</style>
