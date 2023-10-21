export default function camelise(
  words: string,
  uppercaseFirstLetter: boolean = false
): string {
  return words
    .split('_')
    .map((word, index) => {
      if (index === 0 && !uppercaseFirstLetter) {
        return word
      }
      return word.charAt(0).toUpperCase() + word.slice(1)
    })
    .join('')
}
