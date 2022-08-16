
<script setup lang="ts">
import { reactive } from "vue";
import tabBar from '@/components/tab-bar.vue'
import navBar from '@/components/navBar.vue'


</script>

<template>
  <navBar />
  <image class="" src="@/static/logo.png"
         mode="scaleToFill" />
  <tab-bar pagePath="/pages/index/index"></tab-bar>
</template> 



<style lang="scss">
</style>
