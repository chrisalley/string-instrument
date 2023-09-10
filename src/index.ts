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
