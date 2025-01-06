<template>
  <div class="split-pane">
    <div class="pane-left" :style="{ width: leftWidth + 'px' }">
      <slot name="left"></slot>
    </div>
    <div 
      class="pane-resizer"
      @mousedown="startResize"
      @dblclick="resetWidth">
    </div>
    <div class="pane-right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  defaultWidth?: number
  minWidth?: number
  maxWidth?: number
}

const props = withDefaults(defineProps<Props>(), {
  defaultWidth: 200,
  minWidth: 0,
  maxWidth: Infinity
})

const leftWidth = ref(props.defaultWidth)

const startResize = (e: MouseEvent) => {
  e.preventDefault()
  
  const startX = e.clientX
  const startWidth = leftWidth.value

  const doDrag = (e: MouseEvent) => {
    const newWidth = startWidth + e.clientX - startX
    leftWidth.value = Math.min(Math.max(newWidth, props.minWidth), props.maxWidth)
  }

  const stopDrag = () => {
    document.removeEventListener('mousemove', doDrag)
    document.removeEventListener('mouseup', stopDrag)
  }

  document.addEventListener('mousemove', doDrag)
  document.addEventListener('mouseup', stopDrag)
}

const resetWidth = () => {
  leftWidth.value = props.defaultWidth
}
</script>

<style>
.split-pane {
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin: 0;
  padding: 0;
}

.pane-left {
  height: 100%;
  overflow: auto;
  background-color: var(--gh-dark-bg);
  margin: 0;
  padding: 0;
}

.pane-right {
  flex: 1;
  height: 100%;
  overflow: auto;
  background-color: var(--gh-dark-bg);
  margin: 0;
  padding: 0;
}

.pane-resizer {
  width: 1px;
  background-color: var(--gh-dark-border);
  cursor: col-resize;
  flex-shrink: 0;
  height: 100%;
  position: relative;
  transition: all 0.2s;
}

.pane-resizer:hover::after,
.pane-resizer:active::after {
  content: '';
  position: absolute;
  left: -1px; /* Center the 3px highlight over 1px resizer */
  top: 0;
  width: 3px;
  height: 100%;
  background-color: var(--gh-blue);
}
</style>