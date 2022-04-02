<template>
  <div class="lm-transition">
    <button @click="flag = !flag">切换动画</button>
    <transition name="fade">
      <div v-if="flag" class="box"></div>
    </transition>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const flag = ref(false);
    return {
      flag,
    };
  },
};
</script>

<style lang="scss" scoped>
.lm-transition {
  flex: 1;
  margin: 14px;
  // overflow: auto;
  .box {
    width: 100px;
    height: 100px;
    background: red;
  }
  // 进入前
  .fade-enter-from {
    width: 0;
    height: 0;
    opacity: 0;
  }
  // 进入的这个阶段
  .fade-enter-active {
    transition: all 0.5s ease;
  }
  // 进入后
  .fade-enter-to {
    width: 100px;
    height: 100px;
    opacity: 1;
  }
}
</style>
