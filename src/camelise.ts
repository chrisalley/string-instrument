/**
 * Converts a string of words to remove spaces or underscores and capitalise
 * each word except for the first (lowerCamelCase). If the uppercaseFirstLetter
 * parameter is set to true, then it produces the string in UpperCamelCase, also
 * known as PascalCase.
 
 * @param words - a space or underscore separated string to be converted to
 * camelcase.
 * @param uppercaseFirstLetter - if true, the first letter will be uppercase.
 * @returns a camelcase version of words.
 */

export default function camelise(
  words: string,
  uppercaseFirstLetter: boolean = false
): string {
  return words
    .split(/_| /)
    .map((word, index) => {
      if (index === 0 && !uppercaseFirstLetter) {
        return word
      }
      return word.charAt(0).toUpperCase() + word.slice(1)
    })
    .join('')
}
