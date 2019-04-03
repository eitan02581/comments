<template>
  <section class="list-warpper">
    <div v-for="comment in comments" :key="comment._id">
      <CommentPreview :comment="comment"></CommentPreview>
    </div>
  </section>
</template>

<script>
import CommentPreview from "./Comment-preview-cmp";
export default {
  components: {
    CommentPreview
  },
  created() {
    this.$store.dispatch({ type: "getComments" });
  },
  computed: {
    comments() {
      return this.$store.getters.comments;
    }
  }
};
</script>

<style scoped lang="scss">
.list-warpper {
  height: 250px;
  overflow-y: scroll;
}
</style>
