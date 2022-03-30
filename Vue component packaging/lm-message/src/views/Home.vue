<template>
    <div class="home">
        <LmMessage></LmMessage>
        <LmTransition></LmTransition>
    </div>
</template>

<script>
import LmMessage from "./components/Message.vue"
import LmTransition from "./components/Transition.vue"
export default {
    components:{
        LmMessage,
        LmTransition,
    },
    setup() {
        
    },
}
</script>