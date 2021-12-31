<template>
  <div id="app">
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class App extends Vue {
}
</script>

<style lang="scss">
@import '@/styles/mixins';

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
main {
  padding: 0 1.5rem;
}
</style>
