interface Window {
  ipc: {
    send: (channel: string, ...args: any[]) => void;
  };
  os: {
    platform: string;
  };
}