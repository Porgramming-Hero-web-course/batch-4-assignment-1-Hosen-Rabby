{
  const countWordOccurrences = (sectence: string, word: string): number => {
    const splitSectence = sectence.split(" ");
    const countTheWord = splitSectence.filter(
      (splitedWord) => splitedWord === word
    ).length;
    return countTheWord;
  };

  console.log(countWordOccurrences("I love typescript", "typescript"));
}