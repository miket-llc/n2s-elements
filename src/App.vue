<script setup lang="ts">
/// <reference types="../env" />
import { ref } from 'vue'
import AppLayout from './components/AppLayout.vue'
import SplitPane from './components/SplitPane.vue'
import PaneHeader from './components/PaneHeader.vue'
import CustomTitleBar from './components/CustomTitleBar.vue'
import TreeView from './components/TreeView.vue'

// Pages Tree Data
const pages = ref<TreeNode[]>([
  {
    id: '1',
    label: 'Engineering',
    isExpanded: false,
    children: [
      { 
        id: '1.1', 
        label: 'Architecture', 
        isExpanded: false,
        children: [
          { id: '1.1.1', label: 'System Design' },
          { id: '1.1.2', label: 'Infrastructure' },
          { id: '1.1.3', label: 'Cloud Migration' }
        ]
      },
      { 
        id: '1.2', 
        label: 'Development',
        isExpanded: false,
        children: [
          { id: '1.2.1', label: 'Frontend' },
          { id: '1.2.2', label: 'Backend' },
          { id: '1.2.3', label: 'Mobile Apps' }
        ]
      }
    ]
  },
  {
    id: '2',
    label: 'Product',
    isExpanded: false,
    children: [
      { id: '2.1', label: 'Roadmap' },
      { id: '2.2', label: 'Features' },
      { id: '2.3', label: 'Backlog' }
    ]
  },
  {
    id: '3',
    label: 'Documentation',
    isExpanded: false,
    children: [
      { id: '3.1', label: 'API Reference' },
      { id: '3.2', label: 'User Guides' },
      { id: '3.3', label: 'Release Notes' }
    ]
  }
])

// Comments Tree Data
const comments = ref<CommentNode[]>([
  {
    id: 'c1',
    label: 'Architecture Review',
    author: 'Sarah Chen',
    date: '2024-03-20 14:23',
    content: `After reviewing the proposed architecture, I have several concerns:

1. Scalability: Current design limitations
2. Security: Auth layer specification needed
3. Performance: Load balancing strategy
4. Monitoring: Observability improvements`,
    isExpanded: false,
    metadata: {
      edited: true,
      editDate: '2024-03-20 14:25',
      likes: 8
    },
    children: [
      {
        id: 'c1.1',
        label: 'Re: Architecture Review',
        author: 'Mike Thompson',
        date: '2024-03-20 15:00',
        content: 'Agreed on security concerns...',
        isExpanded: false,
        metadata: { likes: 3 },
        children: []
      }
    ]
  }
])

const handlePageClick = (node: TreeNode) => {
  // Load comments for selected page
  console.log('Selected page:', node.label)
}

const handlePageToggle = (node: TreeNode) => {
  node.isExpanded = !node.isExpanded
}

const handleCommentToggle = (node: TreeNode) => {
  node.isExpanded = !node.isExpanded
}
</script>

<template>
  <CustomTitleBar />
  <AppLayout>
    <SplitPane :min-width="90" :max-width="600" :default-width="200">
      <template #left>
        <div class="left-content">
          <PaneHeader>
            <template #title>Pages</template>
          </PaneHeader>
          <div class="pane-content">
            <TreeView 
              :nodes="pages"
              type="page"
              @node-click="handlePageClick"
              @node-toggle="handlePageToggle"
            />
          </div>
        </div>
      </template>
      <template #right>
        <div class="right-content">
          <PaneHeader>
            <template #title>Comments</template>
          </PaneHeader>
          <div class="pane-content">
            <TreeView 
              :nodes="comments"
              type="comment"
              @node-toggle="handleCommentToggle"
            />
          </div>
        </div>
      </template>
    </SplitPane>
  </AppLayout>
</template>

<style>
.left-content, .right-content {
  display: flex;
  flex-direction: column;
  height: 100%;
  box-sizing: border-box;
}

.pane-content {
  flex: 1;
  overflow-y: auto;
  padding: 16px;
}
</style>
