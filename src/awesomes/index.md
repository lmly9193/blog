---
hello: world
---

<script setup>
import HelloWorld from './components/HelloWorld.vue'
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme
</script>

<style>
.grid-container {
    display: grid;
    grid-template-columns: auto auto auto auto auto auto auto auto;
    padding: 10px;
    width: 100%;
}
</style>

<Layout>
  <template #aside-outline-before>
    My custom sidebar top content
  </template>
</Layout>

<!-- <div class="grid-container">
    <HelloWorld />
    <HelloWorld />
    <HelloWorld />
    <HelloWorld />
    <HelloWorld />
    <HelloWorld />
    <HelloWorld />
    <HelloWorld />
    <HelloWorld />
    <HelloWorld />
    <HelloWorld />
</div> -->
