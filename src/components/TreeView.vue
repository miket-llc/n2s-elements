<template>
  <div class="tree-view">
    <TreeItem 
      v-for="node in nodes"
      :key="node.id"
      :node="node"
      @node-click="$emit('node-click', $event)"
      @node-toggle="$emit('node-toggle', $event)"
    />
  </div>
</template>

<script setup lang="ts">
/// <reference types="../env" />
import TreeItem from './TreeItem.vue'

const props = defineProps<{
  nodes: TreeNode[]
}>()

defineEmits<{
  'node-click': [node: TreeNode]
  'node-toggle': [node: TreeNode]
}>()
</script>

<style>
.tree-view {
  width: 100%;
  min-height: 0;
  padding: 4px;
}
</style>