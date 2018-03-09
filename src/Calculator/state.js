import { processArithmeticOperation } from './utils/processArithmeticOperation'
import { processCalculatorInput } from './utils/processCalculatorInput'

export const defaultState = {
  accumulatedValue: 0,
  currentInput: '0',
  displayAccumulatedValue: false,
  prevArithmeticOperation: undefined
}

export function operationCalculate({ prevArithmeticOperation, accumulatedValue, currentInput }) {
  const newAccumulatedValue = processArithmeticOperation(prevArithmeticOperation, accumulatedValue, currentInput)
  return {
    displayAccumulatedValue: true,
    accumulatedValue: newAccumulatedValue
  }
}

export function operationArithmetic(
  operation,
  { prevArithmeticOperation, accumulatedValue, currentInput, displayAccumulatedValue }
) {
  if (displayAccumulatedValue) {
    return {
      prevArithmeticOperation: operation
    }
  }
  const newAccumulatedValue = processArithmeticOperation(prevArithmeticOperation, accumulatedValue, currentInput)
  return {
    displayAccumulatedValue: true,
    accumulatedValue: newAccumulatedValue,
    prevArithmeticOperation: operation
  }
}

export function inputChange(input, { currentInput, displayAccumulatedValue }) {
  const realCurrentInput = displayAccumulatedValue ? defaultState.currentInput : currentInput
  const newInput = processCalculatorInput(realCurrentInput, input)
  return {
    currentInput: newInput,
    displayAccumulatedValue: false
  }
}
