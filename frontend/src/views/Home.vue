<template>
  <section>
    <h1>Eitan's Comments</h1>
    <div class="container">
      <CommentForm></CommentForm>
      <FilterComments @filter="onFilter"></FilterComments>
      <CommentsList></CommentsList>
    </div>
  </section>
</template>

<script>
import CommentForm from "../components/Comment-form-cmp.vue";
import CommentsList from "../components/Comment-list-cmp.vue";
import FilterComments from "../components/Filter-cmp.vue";
export default {
  components: {
    CommentForm,
    CommentsList,
    FilterComments
  },
  methods: {
    onFilter(filterBy) {
      this.$store.dispatch({ type: "getComments", filterBy });
    }
  }
};
</script>

<style scoped lang="scss">
.container {
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}
</style>
