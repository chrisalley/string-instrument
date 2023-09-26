import { letterIsUpperCase } from './shared-functions'

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
