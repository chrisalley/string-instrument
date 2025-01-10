import { letterIsUpperCase } from './shared-functions'

/**
 * Capitalises each word in the specified string, also treating underscore
 * separated and camel case strings as a series of words.
 *
 * @param words - a string of words to be titleised.
 * @returns a copy of words where each word starts with an uppercase character.
 */
export default function titleise(words: string): string {
  return words
    .trim()
    .replaceAll('_', ' ')
    .split('')
    .map((letter, index) => {
      if (index !== 0 && letterIsUpperCase(letter)) {
        return ` ${letter}`
      }
      return letter
    })
    .join('')
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .filter((word) => word !== '')
    .join(' ')
}
