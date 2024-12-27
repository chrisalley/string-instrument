/**
 * Converts a string of words to a hyphen separated string (kebab-case).
 *
 * @param words - an underscore separated string to be converted to kebabcase.
 * @returns a kebabcase version of words.
 */
export default function dasherise(words: string): string {
  return words.replaceAll('_', '-')
}
