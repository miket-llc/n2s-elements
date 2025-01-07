<template>
  <div class="tree-item" :data-type="type">
    <div class="tree-item-header" @click="$emit('node-click', node)">
      <div 
        v-if="hasChildren"
        class="tree-item-toggle"
        :class="{ expanded: node.isExpanded }"
        @click.stop="$emit('node-toggle', node)"
      >▶</div>
      <div class="tree-item-content">
        <div v-if="isComment" class="comment-metadata">
          <span>{{ (node as CommentNode).author }}</span>
          <span>{{ (node as CommentNode).date }}</span>
          <span v-if="(node as CommentNode).metadata?.edited" class="edited">(edited)</span>
        </div>
        <div v-if="isComment" class="comment-content">
          {{ (node as CommentNode).content }}
        </div>
        <span v-else class="tree-item-label">{{ node.label }}</span>
      </div>
    </div>
    <div v-if="hasChildren && node.isExpanded" class="tree-item-children">
      <TreeItem
        v-for="child in node.children"
        :key="child.id"
        :node="child"
        @node-click="$emit('node-click', $event)"
        @node-toggle="$emit('node-toggle', $event)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  node: TreeNode | CommentNode
  type?: 'page' | 'comment'
}>()

const hasChildren = computed(() => 
  props.node.children && props.node.children.length > 0
)

const isComment = computed(() =>
  'author' in props.node
)

defineEmits<{
  'node-click': [node: TreeNode | CommentNode]
  'node-toggle': [node: TreeNode | CommentNode]
}>()
</script>

<style>
.tree-item {
  padding: 2px 0;
}

.tree-item-header {
  display: flex;
  align-items: center;
  padding: 4px;
  cursor: pointer;
  color: var(--gh-dark-text);
  border-radius: 4px;
}

.tree-item-header:hover {
  background-color: var(--gh-dark-button-hover);
}

.tree-item-toggle {
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 4px;
  color: var(--gh-dark-text);
  transition: transform 0.15s ease;
}

.tree-item-toggle.expanded {
  transform: rotate(90deg);
}

.tree-item-label {
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.tree-item-children {
  padding-left: 20px;
}
</style>