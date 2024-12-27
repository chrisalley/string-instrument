/**
 * Converts the first word of the string to start with a lowercase character.
 *
 * @param words - a space separated string.
 * @returns a copy of words that starts with a lowercase character.
 */
export default function downcaseFirst(words: string): string {
  return words
    .split(' ')
    .map((word, index) => {
      return index === 0 ? word.charAt(0).toLowerCase() + word.slice(1) : word
    })
    .join(' ')
}
