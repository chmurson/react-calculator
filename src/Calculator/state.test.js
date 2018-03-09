import { operationCalculate, operationArithmetic, defaultState } from './state'
import { OPERATIONS } from './operations'

describe('operationCalculate', () => {
  describe('on default state', () => {
    it('should return correct changeset', () => {
      const result = operationCalculate(defaultState)
      expect(result).toEqual({
        accumulatedValue: 0,
        displayAccumulatedValue: true
      })
    })
  })

  describe('currentInput=3;accumulatedValue=0;operation=undefined', () => {
    const state = {
      accumulatedValue: 0,
      currentInput: '3',
      prevArithmeticOperation: undefined
    }
    it('should return correct changeset', () => {
      const result = operationCalculate(state)
      expect(result).toEqual({
        accumulatedValue: 3,
        displayAccumulatedValue: true
      })
    })
  })

  describe('currentInput=3;accumulatedValue=0;operation=ADD', () => {
    const state = {
      accumulatedValue: 0,
      currentInput: '3',
      prevArithmeticOperation: OPERATIONS.ADD
    }
    it('should return correct changeset', () => {
      const result = operationCalculate(state)
      expect(result).toEqual({
        accumulatedValue: 3,
        displayAccumulatedValue: true
      })
    })
  })

  describe('currentInput=3;accumulatedValue=10;operation=ADD', () => {
    const state = {
      accumulatedValue: 10,
      currentInput: '3',
      prevArithmeticOperation: OPERATIONS.ADD
    }
    it('should return correct changeset', () => {
      const result = operationCalculate(state)
      expect(result).toEqual({
        accumulatedValue: 13,
        displayAccumulatedValue: true
      })
    })
  })
})

describe('operationArithmetic', () => {
  describe('on default state', () => {
    describe('operation=ADD', () => {
      it('should return correct change set', () => {
        const result = operationArithmetic(OPERATIONS.ADD, defaultState)
        expect(result).toEqual({
          accumulatedValue: 0,
          displayAccumulatedValue: true,
          prevArithmeticOperation: OPERATIONS.ADD
        })
      })
    })
    describe('operation=ADD', () => {
      it('should return correct change set', () => {
        const result = operationArithmetic(OPERATIONS.SUB, defaultState)
        expect(result).toEqual({
          accumulatedValue: 0,
          displayAccumulatedValue: true,
          prevArithmeticOperation: OPERATIONS.SUB
        })
      })
    })
  })
  describe('prevOperation=SUB', () => {
    const prevArithmeticOperation = OPERATIONS.SUB

    describe('accumulatedValue = 0', () => {
      const accumulatedValue = 0
      const currentInput = '10'

      describe('operation=ADD', () => {
        const operation = OPERATIONS.ADD

        describe('displayAccumulatedValue=true', () => {
          const displayAccumulatedValue = false

          it('should return correct change set', () => {
            const result = operationArithmetic(operation, {
              prevArithmeticOperation,
              displayAccumulatedValue,
              accumulatedValue,
              currentInput
            })
            expect(result).toEqual({
              accumulatedValue: -10,
              displayAccumulatedValue: true,
              prevArithmeticOperation: OPERATIONS.ADD
            })
          })
        })

        describe('displayAccumulatedValue=true', () => {
          const displayAccumulatedValue = true

          it('should return correct change set', () => {
            expect(operation).not.toEqual(prevArithmeticOperation)
            const result = operationArithmetic(operation, {
              prevArithmeticOperation,
              displayAccumulatedValue,
              accumulatedValue,
              currentInput
            })
            expect(result).toEqual({
              prevArithmeticOperation: operation
            })
          })
        })
      })
    })
  })
})
