<!-- Home -->
<template>
  <button @click="send">{{ data.Home }}</button>
  <h2 class="sned2">{{ count }}</h2>
  <button @click="handleClick">store</button>
  <van-button type="primary">主要按钮</van-button>
  <van-button type="success">成功按钮</van-button>
  <van-button type="default">默认按钮</van-button>
  <van-button type="warning">警告按钮</van-button>
  <van-button type="danger">危险按钮</van-button>
</template>

<script setup lang='ts'>
import { getUrl } from "@/api/list/home" // api
import { reactive, computed } from 'vue'
import router from '@/router/index' // router
import { useStore } from 'vuex'; // store

interface DataProps {
  Home: string;
}
const data: DataProps = reactive({
  Home: 'Home-router'
});

// api
(async () => {
  const res = await getUrl({ page: 1, count: 20, type: "video" })
  console.warn(res);
})();

// vuex
const store = useStore();
const count = computed(() => store.state.home.count);
const handleClick = () => {
  store.commit('home/add');
};

// router
const send = () => {
  router.push({ path: '/about', query: { id: 1, b: 2 } })
}


</script>

<style lang="scss" scoped>
.sned2 {
  color: $l;
}
</style>