<template>
  <div>
    <h1>{{ title }}</h1>
    <h2 v-if="numero > 0">{{ numero }}</h2>
    <button @click="increment">+</button>
    <button @click="reset">Reset</button>
    <button @click="decrement">-</button>
    <br />
    <span v-for="item in items" :key="item">{{ item }}</span>
  </div>
</template>

<script>
  export default {
    name: "ContadorNumber",
    props: {
      title: String,
    },
    data() {
      return {
        numero: 0,
        items: [],
      };
    },
    methods: {
      increment() {
        this.numero += 1;
        this.items = [...this.items, this.numero];
      },
      decrement() {
        this.numero -= 1;
      },
      reset() {
        this.numero = 0;
        this.items = [];
      },
    },
    updated() {
      console.log(this.numero);
      console.log("ContadorNumber updated");
    },
    mounted() {
      // É aonde vai o fetch.
    }
  };
</script>
