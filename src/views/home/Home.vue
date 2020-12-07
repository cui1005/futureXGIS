<template>
  <div class="home">
    <a-layout id="components-layout-demo-custom-trigger">
      <a-layout-header>
        <div class="logo">FutureXGIS</div>
        <a-menu
          theme="dark"
          mode="horizontal"
          v-model="current"
          :style="{ lineHeight: '64px' }"
        >
          <a-menu-item v-for="item in list" :key="item.key">
            <router-link :to="item.path">
              <a-icon :type="item.type" />
              <span>{{ item.title }}</span>
            </router-link>
          </a-menu-item>
        </a-menu>
      </a-layout-header>
      <Content />
    </a-layout>
  </div>
</template>

<script>
import Content from '@/components/home/Content.vue'
export default {
  name: 'Home',
  components: { Content },
  data() {
    return {
      current: ['map'],
      list: [
        { key: 'map', path: '/map', title: '二维', type: 'table' },
        { key: 'scene', path: '/scene', title: '三维', type: 'global' }
        // { key: '3', title: '一体化', type: 'interaction' }
      ]
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.current = [to.name]
    })
  },
  beforeRouteUpdate(to, from, next) {
    this.current = [to.name]
    next()
  },
  methods: {},
  watch: {}
}
</script>
<style scoped lang="scss">
.home {
  height: 100%;
}
#components-layout-demo-custom-trigger {
  height: 100%;
}
.logo {
  margin: 0px 63px 0px 0;
  color: #fff;
  float: left;
  font-weight: 400;
  font-size: 1.5em;
}
</style>
