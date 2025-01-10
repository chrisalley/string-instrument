import { letterIsUpperCase } from './shared-functions'

/**
 * Converts a camel case or space separated string of words to be underscore
 * separated.
 *
 * @param words - a camel case or space separated string of words.
 * @returns a copy of words where each word is underscore separated.
 */
export default function underscore(words: string): string {
  return words
    .split('')
    .map((letter, index) => {
      if (index !== 0 && letterIsUpperCase(letter)) {
        return `_${letter.toLowerCase()}`
      }
      return letter.toLowerCase()
    })
    .join('')
    .replaceAll(' ', '_')
}
