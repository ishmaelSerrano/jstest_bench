<template>
  <div class="charts">
    <div class="charts__left">
      <a href="/rules/dom_xss/v-html">V-HTML</a>

    </div>
    <div class="charts__right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: "DomXss",
};
</script>
