// Its function was written by chatGPT
export function splitAndCapitalize(text: string) {
  let words = [];
  let start = 0;

  for (let i = 1; i < text.length; i++) {
    if (text.charAt(i).toUpperCase() === text.charAt(i)) {
      words.push(text.slice(start, i));
      start = i;
    }
  }

  words.push(text.slice(start));

  return words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
