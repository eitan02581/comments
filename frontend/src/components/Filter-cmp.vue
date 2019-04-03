<template>
  <section>
    <input @keyup="onFilter" placeholder="Search" v-model="filter">
  </section>
</template>

<script>
export default {
  data() {
    return {
      filter: ""
    };
  },
  methods: {
    onFilter() {
      this.$emit("filter", this.filter);
    }
  }
};
</script>

<style scoped lang="scss">
input {
  background-color: unset;
  border: 1px solid lightblue;
  padding: 20px 0;
  width: 100%;
  padding-left: 10px;
  border-radius: 10px;
}
</style>
