<template>
  <div class="home">
    <Navbar />

    <div id="main-section">
        <sidebar />
        <MovieList />
    </div>
  </div>

<!--    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->

</template>

<script>
      import Navbar from "@/components/Navbar";
      import Sidebar from "@/components/Sidebar";
      import MovieList from "@/components/MovieList";
      export default {
        name: 'HomeView',
        components: {
          Navbar,
          Sidebar,
          MovieList,
        },
      };
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;

  #main-section {
    display: flex;
    margin-top: 50px;
  }
}
</style>
