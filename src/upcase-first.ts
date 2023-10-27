export default function upcaseFirst(words: string): string {
  return words
    .split(' ')
    .map((word, index) => {
      return index === 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word
    })
    .join(' ')
}
