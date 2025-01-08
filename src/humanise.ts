/**
 * Converts a string of words to display better to end users by being space
 * separated. If the uppercaseFirstLetter parameter is set to true, then the
 * first letter of each word will also start with an uppercase letter.
 *
 * @param words - a space or underscore separated string to be made space separated.
 * @param uppercaseFirstLetter - if true, the first letter of each word will be
 * uppercase.
 * @returns a space separated version of words.
 */
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
