export default function humanise(
  words: string,
  uppercaseFirstLetter: boolean = false
): string {
  return words
    .split('_')
    .map((word, index) => {
      if (index === 0 && uppercaseFirstLetter) {
        return word.charAt(0).toUpperCase() + word.slice(1)
      }
      return word
    })
    .join(' ')
}
