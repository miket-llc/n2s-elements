<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  node: CommentNode
}>()

const hasChildren = computed(() => 
  props.node.children && props.node.children.length > 0
)

defineEmits<{
  'node-toggle': [node: CommentNode]
}>()
</script>

<template>
  <div class="comment-tree-item">
    <div class="comment-content">
      <div class="comment-metadata">
        <span>{{ node.author }}</span>
        <span>{{ node.date }}</span>
        <span v-if="node.metadata?.edited" class="edited">(edited)</span>
      </div>
      <div class="comment-text">{{ node.content }}</div>
    </div>
    <div v-if="hasChildren && node.isExpanded" class="comment-children">
      <CommentTreeView
        v-for="child in node.children"
        :key="child.id"
        :node="child"
        @node-toggle="$emit('node-toggle', $event)"
      />
    </div>
  </div>
</template>