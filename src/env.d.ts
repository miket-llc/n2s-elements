interface Window {
  ipc: {
    send: (channel: string, ...args: any[]) => void;
    on: (channel: string, callback: (data: any) => void) => void;
    off: (channel: string, callback: (data: any) => void) => void;
  };
  os: {
    platform: string;
  };
}

interface TreeNode {
  id: string;
  label: string;
  children?: TreeNode[];
  metadata?: Record<string, any>;
  isExpanded?: boolean;
}

interface CommentNode extends TreeNode {
  author: string;
  date: string;
  content: string;
  metadata?: {
    edited?: boolean;
    editDate?: string;
    likes?: number;
    attachments?: number;
  }
}

interface TreeViewProps {
  nodes: TreeNode[];
  onNodeClick?: (node: TreeNode) => void;
  onNodeToggle?: (node: TreeNode) => void;
}