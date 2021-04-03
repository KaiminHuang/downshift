export interface A11yStatusMessageOptions<Item> {
  highlightedIndex: number | null
  inputValue: string
  isOpen: boolean
  itemToString: (item: Item | null) => string
  previousResultCount: number
  resultCount: number
  highlightedItem: Item
  selectedItem: Item | null
}

export interface Environment {
  addEventListener: typeof window.addEventListener
  removeEventListener: typeof window.removeEventListener
  document: Document
}

export interface GetPropsWithRefKey {
  refKey?: string
}

export interface GetMenuPropsOptions
  extends React.HTMLProps<HTMLElement>,
    GetPropsWithRefKey {
  ['aria-label']?: string
}

export interface GetToggleButtonPropsOptions
  extends React.HTMLProps<HTMLButtonElement> {
  disabled?: boolean
}

export interface GetLabelPropsOptions
  extends React.HTMLProps<HTMLLabelElement> {}

export interface GetItemPropsOptions<Item>
  extends React.HTMLProps<HTMLElement> {
  index?: number
  item: Item
  isSelected?: boolean
  disabled?: boolean
}

export interface GetPropsCommonOptions {
  suppressRefError?: boolean
}
