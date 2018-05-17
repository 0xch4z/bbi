export type ParseableType =
  string |
  number |
  boolean

export interface Input<ParseableType> {
  name: string;
  value: ParseableType;
}
