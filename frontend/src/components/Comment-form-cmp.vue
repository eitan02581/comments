<template>
  <section class="form-wrapper">
    <form>
      <el-input type="email" placeholder="Email" v-model="email"></el-input>
      <el-input type="textarea" :rows="5" placeholder="Message" v-model="message"></el-input>
      <el-button @click.prevent="onCommentaAdded" type="primary">Add Comment</el-button>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      message: ""
    };
  },
  methods: {
    onCommentaAdded() {
      var comment = { email: this.email, message: this.message };
      this.$store.dispatch({ type: "addNewComment", comment });
    }
  }
};
</script>
<style scoped lang="scss">
.form-wrapper {
  width: 300px;
  height: 300px;
  form {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
}
</style>
