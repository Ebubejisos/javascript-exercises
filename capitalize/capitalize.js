const capitalize = (string) => {
  const wordsArray = string.trim().split(/\s+/);
  const capitalizedWords = wordsArray.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  })
  return capitalizedWords.join(' ');
}

module.exports = capitalize;
