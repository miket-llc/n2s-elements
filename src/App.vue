<script setup lang="ts">
import AppLayout from './components/AppLayout.vue'
import SplitPane from './components/SplitPane.vue'
import PaneHeader from './components/PaneHeader.vue'
import CustomTitleBar from './components/CustomTitleBar.vue'
</script>

<template>
  <CustomTitleBar />
  <AppLayout>
    <SplitPane :min-width="90" :max-width="600" :default-width="200">
      <template #left>
        <div class="left-content">
          <PaneHeader>
            <template #title>Pages</template>
            <template #toolbar>
              <button>New</button>
              <button>Refresh</button>
            </template>
          </PaneHeader>
          <div class="pane-content">
            Left Pane Content
          </div>
        </div>
      </template>
      <template #right>
        <div class="right-content">
          <PaneHeader>
            <template #title>Comments</template>
            <template #toolbar>
              <button>Sort</button>
              <button>Filter</button>
            </template>
          </PaneHeader>
          <div class="pane-content">
            Right Pane Content
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
