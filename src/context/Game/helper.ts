export const createDisplayWord = (word: string): string[] => {
  let temp = word.split("");
  return temp.map((hint, i) => {
    if (i === 0 || i + 1 === temp.length) return hint;
    return "";
  });
};
