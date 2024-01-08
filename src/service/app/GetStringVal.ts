
export type Base= { id: string } | string

export const getStringVal= (value: Base) => {
  if (typeof value === 'string') {
    return value;
  }

  return value.id;
}