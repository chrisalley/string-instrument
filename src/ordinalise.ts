import ordinal from './ordinal'

export default function ordinalise(number: number): string {
  return `${number}${ordinal(number)}`
}
