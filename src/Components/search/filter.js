const regexVowels = /[aeiou]/g;
const regexAlpha = /[^A-Za-z]/g;

const inputFilter = (props) => {
  const { inputText, words } = props;
  const nonAlphanumericStr = inputText.replace(regexAlpha, '');

  return mistypedVowels(words, nonAlphanumericStr);
};

const mistypedVowels = (words, nonAlphanumericStr) => {
  let testWord = 'TextWord';

  for (let i = 0; i < words.length; i++) {
    if (words[i] === nonAlphanumericStr) {
      testWord = words[i];
      break;
    }
  }

  if (testWord !== 'TextWord') {
    return testWord;
  }

  let possibleWords = [];
  let possibleDistances = [];

  for (let i = 0; i < words.length; i++) {
    if (matchWords(words[i], nonAlphanumericStr)) {
      const distance = levenshteinDistance(
        words[i].toLowerCase(),
        nonAlphanumericStr.toLowerCase()
      );
      possibleWords.push(words[i]);
      possibleDistances.push(distance);
      testWord = words[i];
    }
  }

  testWord = getClosestWord(possibleWords, possibleDistances);

  return testWord;
};

const getClosestWord = (words, distances) => {
  const smallestIndex = indexOfSmallest(distances);

  if (smallestIndex === -1) return 'TextWord';

  return words[smallestIndex];
};

const indexOfSmallest = (distances) => {
  let smallestIndex = -1;

  if (distances.length === 0) return smallestIndex;

  const smallestDistance = Math.min(...distances);

  if (distances) smallestIndex = distances.indexOf(smallestDistance);

  return smallestIndex;
};

const matchWords = (word, term) => {
  const lowerCaseTerm = term.toLowerCase();
  const lowerCaseWord = word.toLowerCase();

  const placeholderWord = lowerCaseWord.replace(regexVowels, '#');
  const placeholderTerm = lowerCaseTerm.replace(regexVowels, '#');

  return placeholderWord === placeholderTerm;
};

const levenshteinDistance = (a, b) => {
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;

  let matrix = [];

  let i = 0;
  for (i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }

  let j = 0;
  for (j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }

  for (i = 1; i <= b.length; i++) {
    for (j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          Math.min(matrix[i][j - 1] + 1, matrix[i - 1][j] + 1)
        );
      }
    }
  }

  return matrix[b.length][a.length];
};

export default inputFilter;
