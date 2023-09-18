export function camelise(
  words: string,
  uppercaseFirstLetter: boolean = true
): string {
  return words
    .split("_")
    .map((word, index) => {
      if (index === 0 && !uppercaseFirstLetter) {
        return word;
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join("");
}

export function dasherise(words: string): string {
  return words.replace("_", "-");
}

export function downcaseFirst(words: string): string {
  return words
    .split(" ")
    .map((word, index) => {
      return index === 0 ? word.charAt(0).toLowerCase() + word.slice(1) : word;
    })
    .join(" ");
}

export function parameterise(
  word: string,
  seperator = "-",
  preserveCase = false
): string {
  const stringToParameterise = preserveCase ? word : word.toLowerCase();
  return stringToParameterise.split(" ").join(seperator);
}
