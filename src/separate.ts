import { letterIsUpperCase } from './shared-functions'

/**
 * Converts a string of camelcase or underscore separated words to a space
 * seperated string.
 
 * @param words - a camelcase or underscore separated string to be converted to
 * be space separated.
 * @returns a space separated version of words.
 */
export default function separate(words: string): string {
  return words
    .replaceAll('_', ' ')
    .split('')
    .map((letter, index) => {
      if (index !== 0 && letterIsUpperCase(letter)) {
        return ` ${letter.toLowerCase()}`
      }
      return letter.toLowerCase()
    })
    .join('')
}
