<template>
  <div class="app-layout">
    <CustomTitleBar />
    <main class="main-content">
      <slot></slot>
    </main>
  </div>
</template>

<script setup lang="ts">
import CustomTitleBar from './CustomTitleBar.vue'
</script>

<style>
.app-layout {
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.main-content {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  background-color: var(--gh-dark-bg);
  width: 100%;
  box-sizing: border-box;
}
</style>