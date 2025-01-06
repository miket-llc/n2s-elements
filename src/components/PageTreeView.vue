<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  node: TreeNode
}>()

const hasChildren = computed(() => 
  props.node.children && props.node.children.length > 0
)

defineEmits<{
  'node-click': [node: TreeNode]
  'node-toggle': [node: TreeNode]
}>()
</script>

<template>
  <div class="page-tree-item">
    <div class="page-tree-header" @click="$emit('node-click', node)">
      <div 
        v-if="hasChildren"
        class="tree-toggle"
        :class="{ expanded: node.isExpanded }"
        @click.stop="$emit('node-toggle', node)"
      >▶</div>
      <span class="page-label">{{ node.label }}</span>
    </div>
    <div v-if="hasChildren && node.isExpanded" class="page-children">
      <PageTreeView
        v-for="child in node.children"
        :key="child.id"
        :node="child"
        @node-click="$emit('node-click', $event)"
        @node-toggle="$emit('node-toggle', $event)"
      />
    </div>
  </div>
</template>