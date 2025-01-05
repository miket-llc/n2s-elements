<template>
  <div class="titlebar" :class="{ 'titlebar-macos': isMacOS }">
    <div v-if="!isMacOS" class="titlebar-icon">
      <img src="/logo.svg" alt="App Logo" />
    </div>
    <div class="titlebar-controls titlebar-controls-macos" v-if="isMacOS">
      <button class="titlebar-button close" @click="handleWindowControl('close')"></button>
      <button class="titlebar-button minimize" @click="handleWindowControl('minimize')"></button>
      <button class="titlebar-button maximize" @click="handleWindowControl('maximize')"></button>
    </div>
    <div class="titlebar-drag-region">
      <span class="titlebar-title">N2S Elements</span>
    </div>
    <div class="titlebar-controls titlebar-controls-windows" v-if="!isMacOS">
      <button class="titlebar-button minimize" @click="handleWindowControl('minimize')"></button>
      <button class="titlebar-button maximize" @click="handleWindowControl('maximize')"></button>
      <button class="titlebar-button close" @click="handleWindowControl('close')"></button>
    </div>
  </div>
</template>

<script setup lang="ts">
const isMacOS = window.os.platform === 'darwin';

const handleWindowControl = (action: 'close' | 'minimize' | 'maximize') => {
  window.ipc.send('window-control', action);
};
</script>