import { OPERATIONS } from './../operations'

/**
 * @param {{}} previousOperation
 * @param {Number} currentValue
 * @param {String} newInput
 * @return {*}
 */
export function processArithmeticOperation(previousOperation, currentValue, newInput) {
  const newValue = parseFloat(newInput)
  if (!previousOperation) {
    return newValue
  }

  const currentValuePrecision = getPrecision(currentValue)
  const newInputPrecision = getPrecision(newInput)
  const precision = Math.max(currentValuePrecision, newInputPrecision)

  if (previousOperation === OPERATIONS.ADD) {
    return handlePrecision(precision, currentValue + newValue)
  }

  if (previousOperation === OPERATIONS.SUB) {
    return handlePrecision(precision, currentValue - newValue)
  }

  throw new Error(`Invalid operation: ${previousOperation}`)
}

function handlePrecision(precision, value) {
  if (precision === 0) {
    return value
  }
  return Number(value.toFixed(precision))
}

/**
 * @param {String|Number} [input]
 */
function getPrecision(input) {
  const decimalPointIndex = input.toString().indexOf('.')
  if (decimalPointIndex === -1) {
    return 0
  }
  return input.toString().length - decimalPointIndex - 1
}
