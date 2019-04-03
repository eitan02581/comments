<template>
  <div id="app">
    <homePage></homePage>
  </div>
</template>

<script>
import homePage from "./views/Home.vue";
export default {
  components: {
    homePage
  }
};
</script>
<style lang="scss">
#app {
  display: flex;
  justify-content: center;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
