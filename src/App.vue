<template>
  <div>
    <Header />
    <router-view />
    <PostList />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import PostList from "./components/PostList.vue";
export default {
  name: "App",
  components: {
    Header,
    PostList,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

