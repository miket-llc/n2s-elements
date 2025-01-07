<script setup lang="ts">
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
    label: 'Architecture Review Discussion',
    author: 'Sarah Chen',
    date: '2024-03-20 14:23',
    content: `Initial architecture review findings:

1. Scalability Concerns
   - Current database design won't handle projected growth
   - Need to consider sharding strategy
   - Connection pooling needs optimization

2. Security Considerations
   - Auth layer needs enhancement
   - Missing rate limiting
   - API security audit required`,
    isExpanded: false,
    metadata: { edited: true, editDate: '2024-03-20 14:25', likes: 12 },
    children: [{
      id: 'c1.1',
      label: 'Re: Database Sharding',
      author: 'Mike Thompson',
      date: '2024-03-20 15:00',
      content: `Regarding sharding, here's a proposed approach:

\`\`\`sql
CREATE TABLE users (
    shard_key BIGINT,
    user_id UUID,
    PRIMARY KEY (shard_key, user_id)
);
\`\`\``,
      isExpanded: false,
      metadata: { likes: 8 },
      children: [{
        id: 'c1.1.1',
        label: 'Sharding Implementation',
        author: 'Lisa Park',
        date: '2024-03-20 15:30',
        content: 'We should consider hot shard detection and rebalancing strategy.',
        isExpanded: false,
        metadata: { likes: 5 }
      }]
    }]
  },
  {
    id: 'c2',
    label: 'Performance Optimization Required',
    author: 'David Wilson',
    date: '2024-03-21 09:15',
    content: `Latest performance metrics show concerning patterns:

- Query response times > 500ms
- High CPU utilization during peak hours
- Memory leaks detected in production

Attached heap dump for analysis.`,
    isExpanded: true,
    metadata: { attachments: 2, likes: 15 },
    children: [{
      id: 'c2.1',
      label: 'Memory Leak Investigation',
      author: 'Maria Garcia',
      date: '2024-03-21 10:30',
      content: `Found the source of the memory leak:

\`\`\`typescript
class ConnectionPool {
  private connections = [];
  // Missing cleanup of closed connections
}
\`\`\`

Will submit PR with fix today.`,
      isExpanded: true,
      metadata: { likes: 10 },
      children: [{
        id: 'c2.1.1',
        label: 'Re: Memory Leak Fix',
        author: 'Sarah Chen',
        date: '2024-03-21 11:00',
        content: 'Good catch. Also suggest adding monitoring...',
        isExpanded: true,
        metadata: { likes: 7 }
      }]
    }]
  },
  {
    id: 'c3',
    label: 'UI/UX Feedback Session Notes',
    author: 'Alex Martinez',
    date: '2024-03-22 13:00',
    content: `Key findings from user testing:

1. Navigation issues in mobile view
2. Inconsistent loading states
3. Accessibility improvements needed

Full report attached.`,
    isExpanded: true,
    metadata: { attachments: 1, likes: 20 },
    children: [{
      id: 'c3.1',
      label: 'Mobile Responsive Design',
      author: 'Emma Wilson',
      date: '2024-03-22 14:15',
      content: 'Here\'s my proposal for mobile navigation...',
      isExpanded: true,
      metadata: { likes: 12 }
    }]
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
