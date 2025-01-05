<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import CustomTitleBar from './components/CustomTitleBar.vue'
import AppLayout from './components/AppLayout.vue'
</script>

<template>
  <CustomTitleBar />
  <AppLayout>
    <div class="content"></div>
  </AppLayout>
</template>

<style>
.app-content {
  padding-top: 28px; /* Height of titlebar */
}

.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo.electron:hover {
  filter: drop-shadow(0 0 2em #9FEAF9);
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.content {
  width: 100%;
  height: 100%;
  background-color: var(--gh-dark-bg);
}
</style>
