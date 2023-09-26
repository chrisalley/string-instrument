export default function downcaseFirst(words: string): string {
  return words
    .split(' ')
    .map((word, index) => {
      return index === 0 ? word.charAt(0).toLowerCase() + word.slice(1) : word
    })
    .join(' ')
}
