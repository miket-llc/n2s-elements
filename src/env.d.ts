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