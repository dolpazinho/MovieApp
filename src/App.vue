<template>

  <router-view/>

<!--  <div>
    <input v-model="name" type="text">
    {{name}}
    <hr>
    <button @click="incrementCounter">Add to increment</button>
    {{counter}}
  </div>-->
</template>


<script>
export default {
  data() {
    return {
      name: 'Dolpaz',
      counter: 0,
    };
  },
  methods: {
    incrementCounter() {
      this.counter++;
    }
  }
}
</script>

<style lang="scss">

    body {
      background-color: #222b31;
      margin: 0;
    }

    .m-0 {
      margin: 0;
    }

    #app {
      font-family: Avenir, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
    }

    .card-shadow {
      -webkit-box-shadow: 0px 5px 5px 0px rgba(8, 8, 8,0.5);
      -moz-box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.5);
      box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.5)
    }

</style>
