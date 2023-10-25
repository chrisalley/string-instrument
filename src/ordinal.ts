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
