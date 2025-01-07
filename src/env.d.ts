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
  isExpanded?: boolean;
  children?: TreeNode[];
}

interface CommentNode extends TreeNode {
  author: string;
  date: string;
  content: string;
  metadata?: {
    edited?: boolean;
    editDate?: string;
    likes?: number;
    attachments?: number;  // Add attachments support
  };
  children?: CommentNode[];
}

interface TreeViewProps {
  nodes: TreeNode[];
  onNodeClick?: (node: TreeNode) => void;
  onNodeToggle?: (node: TreeNode) => void;
}