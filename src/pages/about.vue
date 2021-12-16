<!-- About -->
<template>
  <button @click="send">{{ data.About }}</button>
</template>

<script setup lang='ts'>
import { reactive, onMounted } from 'vue'
import router from '@/router/index'
const { id, b } = router.currentRoute.value.query
interface DataProps {
  About: string;
}
const data: DataProps = reactive({
  About: 'About-router',
})

function send() {
  router.push('/home')
}

onMounted(() => {
  console.log(id);
  console.log(b);
})
</script>