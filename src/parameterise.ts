export default function parameterise(
  word: string,
  seperator = '-',
  preserveCase = false
): string {
  const stringToParameterise = preserveCase ? word : word.toLowerCase()
  return stringToParameterise.split(' ').join(seperator)
}
