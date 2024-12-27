/**
 * Converts the first word of the string to start with an uppercase character.
 *
 * @param words - a space separated string.
 * @returns a copy of words that starts with an uppercase character.
 */
export default function upcaseFirst(words: string): string {
  return words
    .split(' ')
    .map((word, index) => {
      return index === 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word
    })
    .join(' ')
}
