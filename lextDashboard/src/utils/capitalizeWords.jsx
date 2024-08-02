/**
 * Capitalizes the first letter of each word in a string.
 *
 * @param {string} str - The input string.
 * @returns {string} The string with the first letter of each word capitalized.
 */
const capitalizeWords = (str) => {
    if (typeof str !== 'string') {
      return '';
    }
  
    return str.split(' ').map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
  };
  
  export default capitalizeWords;
  