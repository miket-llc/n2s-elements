<template>
  <div class="app-layout">
    <CustomTitleBar />
    <main class="main-content">
      <slot></slot>
    </main>
    <StatusBar />
  </div>
</template>

<script setup lang="ts">
import CustomTitleBar from './CustomTitleBar.vue'
import StatusBar from './StatusBar.vue'
</script>

<style>
.app-layout {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
}

.main-content {
  flex: 1;
  display: flex;
  overflow: hidden;
  background-color: var(--gh-dark-bg);
  width: 100%;
  box-sizing: border-box;
  margin-top: 28px;    /* Match titlebar height */
  margin-bottom: 0;    /* Remove bottom margin */
  padding: 0;
}

.statusbar {
  height: 22px;
  background-color: var(--gh-dark-header);
  border-top: 1px solid var(--gh-dark-border);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  font-size: 12px;
  color: var(--gh-dark-text);
  user-select: none;
}

.status-left, .status-right {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>