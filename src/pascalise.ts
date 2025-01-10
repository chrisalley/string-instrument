/**
 * Converts a string of words to remove spaces or underscores and capitalise
 * each word including the first (UpperCamelCase or PascalCase). To make the
 * first word start with a lowercase character, use the camelise function
 * instead.
 
 * @param words - a space or underscore separated string to be converted to
 * pascal case.
 * @returns a pascal case version of words.
 */
export default function pascalise(words: string): string {
  return words
    .split(/_| /)
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1)
    })
    .join('')
}
