<template>
  <div class="titlebar" :class="{ 'window-active': isActive, 'titlebar-macos': isMacOS }">
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
import { ref, onMounted, onUnmounted } from 'vue'

const isMacOS = window.os.platform === 'darwin'
const isActive = ref(true)
const currentTheme = ref('github')

const handleWindowStateChanged = (active: boolean) => {
  isActive.value = active
}

onMounted(() => {
  window.ipc.on('window-state-changed', handleWindowStateChanged)
  window.addEventListener('focus', handleFocus)
  window.addEventListener('blur', handleBlur)
})

onUnmounted(() => {
  window.ipc.off('window-state-changed', handleWindowStateChanged)
  window.removeEventListener('focus', handleFocus)
  window.removeEventListener('blur', handleBlur)
})

const handleFocus = () => isActive.value = true
const handleBlur = () => isActive.value = false

const handleWindowControl = (action: 'close' | 'minimize' | 'maximize') => {
  window.ipc.send('window-control', action);
};

const toggleTheme = () => {
  currentTheme.value = currentTheme.value === 'github' ? 'ellucian' : 'github'
  document.documentElement.setAttribute('data-theme', currentTheme.value)
}
</script>