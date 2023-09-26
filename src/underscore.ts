import { letterIsUpperCase } from './shared-functions'

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
}
