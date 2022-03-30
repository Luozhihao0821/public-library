<template>
  <div class="lm-message">
    <h2>1.消息提示</h2>
    <div class="messageBtn">
      <button @click="getWarn">警告</button>
      <button @click="getError">错误</button>
      <button @click="getSuccess">成功</button>
      </div>
  </div>
</template>

<script>
import Message from '@/components/Message'
export default {
  name: 'HomeView',
  setup(){
    const getWarn=()=>{
      Message({ type: 'warn', text: '提示信息！',times:1 });
    }
    const getError=()=>{
      Message({ type: 'error', text: '错误信息！',times:3 });
    }
    const getSuccess=()=>{
      Message({ type: 'success', text: '成功信息！',times:5 });
    }
    return {
      getWarn,
      getError,
      getSuccess
    }
  }
}
</script>
<style lang="scss" scoped>
.lm-message{
  width: 100%;
  padding: 10px;
  .messageBtn{
    width: 300px;
    display: flex;
    justify-content: space-between;
  }
}
</style>