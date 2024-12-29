import ordinal from './ordinal'

/**
 * Converts a number into an ordinal string used to indiciate the position in an
 * ordered sequence, for example 1st, 42nd, or 111th.
 *
 * @param number - the number to use as the ordinal prefix and used to determine
 * what the ordinal suffix is.
 * @returns the number with the correct ordinal suffix appended to it.
 */
export default function ordinalise(number: number): string {
  return `${number}${ordinal(number)}`
}
