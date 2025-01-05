<template>
  <div class="statusbar">
    <div class="status-left">
      <span>Ready</span>
    </div>
    <div class="status-right">
      <span>Line 1, Col 1</span>
    </div>
  </div>
</template>

<script setup lang="ts">
// Status bar logic here
</script>

<style>
/* Critical layout styles stay in component */
.statusbar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 24px;  
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
}

.status-left, .status-right {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 0;
  height: 24px;  
}
</style>