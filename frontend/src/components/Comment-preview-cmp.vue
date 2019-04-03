<template>
  <section>
    <div class="prev-container">
      <div class="img">
        <img :src="comment.img" alt>
      </div>
      <div class="right">
        <div class="title">
          <h1>{{comment.email}}</h1>
        </div>
        <div class="comment">
          <p>{{comment.message}}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    comment: {
      type: Object,
      requierd: true
    }
  }
};
</script>

<style scoped lang="scss">
.prev-container {
  margin: 10px 0;
  border-radius: 10px;
  background-color: #9e9e9e38;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;

  .img {
    margin: 10px;
    margin-right: 10px;
    img {
      width: 40px;
    }
  }
  .right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 10px;
  }
}
</style>
