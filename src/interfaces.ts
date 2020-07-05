export interface ICard {
  left: number,
  top: number,
  width: number,
  height: number,
}

export type ContextMenuOptions = [string, () => void][];