export interface Block<T> {
  defaultVisibility?: unknown
  fetchContent: () => {}
  selectContent: () => T
}
