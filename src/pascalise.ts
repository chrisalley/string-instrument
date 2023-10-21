export default function camelise(words: string): string {
  return words
    .split('_')
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1)
    })
    .join('')
}
