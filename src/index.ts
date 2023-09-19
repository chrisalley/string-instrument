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
  return words.replaceAll("_", "-");
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

export function titleise(words: string): string {
  return words
    .trim()
    .replaceAll("_", " ")
    .split("")
    .map((letter, index) => {
      if (index !== 0 && letterIsUpperCase(letter)) {
        return ` ${letter}`;
      }
      return letter;
    })
    .join("")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .filter((word) => word !== "")
    .join(" ");
}

function letterIsUpperCase(letter: string): boolean {
  return letter.toUpperCase() === letter && letter.toLowerCase() !== letter;
}
