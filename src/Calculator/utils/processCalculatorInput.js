/**
 * @type {Object<string,function(string): boolean>}}
 */
const validatorsPerChar = {
  '.': input => !input.includes('.'),
  '0': input => input !== '0',
  Backspace: input => input !== '0'
}

/**
 * @param {string} newChar
 * @return {(function(string?): boolean)}
 */
function getValidator(newChar) {
  return validatorsPerChar[newChar] || (() => true)
}

/**
 * @param {String} currentInput
 * @param {String} newChar
 * @return {*}
 */
export function processCalculatorInput(currentInput, newChar) {
  const validator = getValidator(newChar)
  if (!validator(currentInput)) {
    return currentInput
  }
  if (currentInput === '0' && newChar !== '.') {
    return newChar
  }
  if (newChar === 'Backspace') {
    return currentInput.slice(0, currentInput.length - 1) || '0'
  }

  return currentInput + newChar
}
