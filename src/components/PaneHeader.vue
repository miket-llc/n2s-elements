<template>
  <div class="pane-header">
    <div class="pane-header-title">
      <slot name="title"></slot>
    </div>
    <div class="pane-header-toolbar">
      <slot name="toolbar"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
// Header logic here
</script>

<style>
.pane-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  padding: 0 8px;
  box-sizing: border-box;
  -webkit-app-region: no-drag;
}

.pane-header-title {
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.pane-header-toolbar {
  display: flex;
  gap: 4px;
}
</style>