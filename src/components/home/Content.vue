<template>
  <a-layout>
    <a-layout-content
      :style="{
        margin: '12px 8px',
        background: '#fff',
        minHeight: '280px'
      }"
    >
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </a-layout-content>
  </a-layout>
</template>

<script>
export default {
  name: 'Content'
}
</script>

<style scoped lang="scss"></style>
