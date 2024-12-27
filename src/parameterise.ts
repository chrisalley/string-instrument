/**
 * Replaces spaces in a word with a hyphen or custom separator character so
 * that the word may be used as part of friendly URL slug.
 *
 * @param word - a word to have spaces replaced by a separator.
 * @param separator - a separator character to replace spaces with.
 * @param preserveCase - if set to true, the word will not be made lower case.
 * @returns a copy of the word seperated by hyphens or a custom separator.
 */
export default function parameterise(
  word: string,
  separator = '-',
  preserveCase = false
): string {
  const stringToParameterise = preserveCase ? word : word.toLowerCase()
  return stringToParameterise.split(' ').join(separator)
}
