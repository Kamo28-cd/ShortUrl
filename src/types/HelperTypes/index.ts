export type ValueOf<T> = T[keyof T];

export type RemoveNullKeys<Type> = {
  [Key in keyof Type]-?: RemoveNullKeys<NonNullable<Type[Key]>>;
};
