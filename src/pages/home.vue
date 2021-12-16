<!-- Home -->
<template>
  <div class="send">
    <button @click="send">{{ data.Home }}</button>
    <h2>{{ count }}</h2>
    <button @click="handleClick">store</button>
  </div>
</template>

<script setup lang='ts'>
import { getUrl } from "@/api/list/home"
import { reactive, computed } from 'vue'
import router from '@/router/index'
import { useStore } from 'vuex';

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
.send {
  color: $l;
}
</style>