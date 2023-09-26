export function letterIsUpperCase(letter: string): boolean {
  return letter.toUpperCase() === letter && letter.toLowerCase() !== letter
}
