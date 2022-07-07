<template>
  <div class="sidebar__menu">
    <div class="sidebar__link active_menu_link">
      <i class="fa fa-home"></i>
      <a href="/">Dashboard</a>
    </div>
    <h2 v-for="(value, key) in routes" :key="key">
      {{ value.name }}
      <div class="sidebar__link" v-for="(v, k) in value.children" :key="k">
        <i class="fa fa-user-secret" aria-hidden="true"></i>
        <router-link :to="v.path">{{v.name}}</router-link>

      </div>
    </h2>

    <!-- <h2>MNG</h2>



    <div class="sidebar__link">
      <i class="fa fa-user-secret" aria-hidden="true"></i>
      <a href="#">Admin Management</a>
    </div>
    <div class="sidebar__link">
      <i class="fa fa-building-o"></i>
      <a href="#">Company Management</a>
    </div>
    <div class="sidebar__link">
      <i class="fa fa-wrench"></i>
      <a href="#">Employee Management</a>
    </div>
    <div class="sidebar__link">
      <i class="fa fa-archive"></i>
      <a href="#">Warehouse</a>
    </div>
    <div class="sidebar__link">
      <i class="fa fa-handshake-o"></i>
      <a href="#">Contracts</a>
    </div>
    <h2>LEAVE</h2>
    <div class="sidebar__link">
      <i class="fa fa-question"></i>
      <a href="#">Requests</a>
    </div>
    <div class="sidebar__link">
      <i class="fa fa-sign-out"></i>
      <a href="#">Leave Policy</a>
    </div>
    <div class="sidebar__link">
      <i class="fa fa-calendar-check-o"></i>
      <a href="#">Special Days</a>
    </div>
    <div class="sidebar__link">
      <i class="fa fa-files-o"></i>
      <a href="#">Apply for leave</a>
    </div>
    <h2>PAYROLL</h2>
    <div class="sidebar__link">
      <i class="fa fa-money"></i>
      <a href="#">Payroll</a>
    </div>
    <div class="sidebar__link">
      <i class="fa fa-briefcase"></i>
      <a href="#">Paygrade</a>
    </div>
    <div class="sidebar__logout">
      <i class="fa fa-power-off"></i>
      <a href="#">Log out</a>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "MenuNav",

  // data(){
  //   return {
  //     routes: JSON.stringify(routes)
  //   }
  // },

  // methods: {
  //   openProjectLink() {
  //     alert(
  //       "You could open the project frontend in another tab here, so the logged admin could see changes made to the project ;)"
  //     );
  //   },

  //   updateMenu(context) {
  //     this.contextSection = context;
  //     this.menuItens = this.menuData[context];

  //     if (context === "home") {
  //       this.$router.push("/");
  //       window.bus.$emit("menu/closeMobileMenu");
  //     }
  //   },

  //   highlightSection(section) {
  //     return {
  //       menu__link: true,
  //       "menu__link--active": section === this.contextSection,
  //     };
  //   },

  //   subMenuClass(subMenuName) {
  //     return {
  //       "context-menu__link": true,
  //       "context-menu__link--active": this.activeSubMenu === subMenuName,
  //     };
  //   },

  //   closeContextMenu() {
  //     this.contextSection = "";
  //     this.menuItens = [];
  //   },

  //   openSection(item) {
  //     this.activeSubMenu = item.txt;

  //     this.$router.push(this.getUrl(item));
  //     window.bus.$emit("menu/closeMobileMenu");
  //   },

  //   getUrl(item) {
  //     let sectionSlug = item.txt; //kebabCase(item.txt);

  //     return `${item.link}/${sectionSlug}`;
  //   },
  // },

  computed: {
    routes() {
      return this.$router.options.routes;
    },
  },
};
</script>