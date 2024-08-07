<template>
  <ContadorNumber :title="title" />
</template>

<script>
import ContadorNumber from './components/Contador.vue';

export default {
  name: 'App',
  components: {
    ContadorNumber,
  },
  data() {
    return {
      title: "Contador Com Props",
    };
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
