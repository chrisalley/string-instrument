/**
 * Returns the suffix that can be added to a number to indicate the position in
 * an ordered sequence, for example 1st, 42nd, or 111th.
 *
 * @param number - the number to determine the ordinal suffix of.
 * @returns - the ordinal suffix that will be st, nd, rd, or th.
 */
export default function ordinal(number: number): string {
  switch (number % 10) {
    case 1:
      return number % 100 === 11 ? 'th' : 'st'
    case 2:
      return number % 100 === 12 ? 'th' : 'nd'
    case 3:
      return number % 100 === 13 ? 'th' : 'rd'
    default:
      return 'th'
  }
}
