<template>
  <div class="home">
    <h2>1.消息提示</h2>
    <LmMessage></LmMessage>
    <h2>2.动画组件使用</h2>
    <LmTransition></LmTransition>
    <h2>3.骨架屏</h2>
    <div style="width:200px;">
      <LmSkeleton
        width="200px"
        height="100px"
        style="margin: 5px; display: block"
        bg="rgba(0,0,0,0.2)"
      ></LmSkeleton>
      <LmSkeleton
        width="200px"
        height="30px"
        style="margin: 5px; display: block"
        bg="rgba(0,0,0,0.2)"
      ></LmSkeleton>
      <LmSkeleton
        width="100px"
        height="30px"
        style="margin: 5px auto; display: block"
        bg="rgba(0,0,0,0.2)"
      ></LmSkeleton>
    </div>
  </div>
</template>

<script>
import LmMessage from "./components/Message.vue";
import LmTransition from "./components/Transition.vue";
export default {
  components: {
    LmMessage,
    LmTransition,
  },
  setup() {},
};
</script>

<style lang="scss" scoped>
</style>