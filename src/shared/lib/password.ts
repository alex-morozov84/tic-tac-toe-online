export const removePassword = <T extends { passwordHash: string }>({
  // eslint-disable-next-line
  passwordHash: _,
  ...rest
}: T): Omit<T, 'passwordHash'> => {
  return rest
}
