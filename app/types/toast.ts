export default interface Toast {
  id: string;          // for queues
  variant: 'success' | 'error' | 'info' | 'warning';
  text: string;
}
export default interface UIState {
  toasts: Toast[];
}