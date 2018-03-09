import { processCalculatorInput } from './processCalculatorInput'

describe('processCalculatorInput', () => {
  describe('when currentInput === "0"', () => {
    const currentInput = '0'
    describe('and inputChar === "0"', () => {
      it('returns 0', () => {
        const result = processCalculatorInput(currentInput, '0')
        expect(result).toBe('0')
      })
    })
    describe('and inputChar === "."', () => {
      it('returns 0.', () => {
        const result = processCalculatorInput(currentInput, '.')
        expect(result).toBe('0.')
      })
    })
    describe('and inputChar === "5"', () => {
      it('returns the "5"', () => {
        const result = processCalculatorInput(currentInput, '5')
        expect(result).toBe('5')
      })
    })
    describe('and inputChar === "Backspace"', () => {
      it('returns the "0"', () => {
        const result = processCalculatorInput(currentInput, 'Backspace')
        expect(result).toBe('0')
      })
    })
  })
  describe('when currentInput === "4"', () => {
    const currentInput = '4'
    describe('and inputChar === "4"', () => {
      it('returns 44', () => {
        const result = processCalculatorInput(currentInput, '4')
        expect(result).toBe('44')
      })
    })
    describe('and inputChar === "."', () => {
      it('returns 4.', () => {
        const result = processCalculatorInput(currentInput, '.')
        expect(result).toBe('4.')
      })
    })
    describe('and inputChar === "0"', () => {
      it('returns the 40', () => {
        const result = processCalculatorInput(currentInput, '0')
        expect(result).toBe('40')
      })
    })
    describe('and inputChar === "Backspace"', () => {
      it('returns the "0"', () => {
        const result = processCalculatorInput(currentInput, 'Backspace')
        expect(result).toBe('0')
      })
    })
  })
  describe('when currentInput === "44"', () => {
    const currentInput = '44'
    describe('and inputChar === "4"', () => {
      it('returns 444', () => {
        const result = processCalculatorInput(currentInput, '4')
        expect(result).toBe('444')
      })
    })
    describe('and inputChar === "."', () => {
      it('returns 44.', () => {
        const result = processCalculatorInput(currentInput, '.')
        expect(result).toBe('44.')
      })
    })
    describe('and inputChar === "0"', () => {
      it('returns the 440', () => {
        const result = processCalculatorInput(currentInput, '0')
        expect(result).toBe('440')
      })
    })
    describe('and inputChar === "Backspace"', () => {
      it('returns the "4"', () => {
        const result = processCalculatorInput(currentInput, 'Backspace')
        expect(result).toBe('4')
      })
    })
  })
  describe('when currentInput === "4."', () => {
    const currentInput = '4.'
    describe('and inputChar === "4"', () => {
      it('returns 44', () => {
        const result = processCalculatorInput(currentInput, '4')
        expect(result).toBe('4.4')
      })
    })
    describe('and inputChar === "."', () => {
      it('returns 4.', () => {
        const result = processCalculatorInput(currentInput, '.')
        expect(result).toBe('4.')
      })
    })
    describe('and inputChar === "0"', () => {
      it('returns the 4.0', () => {
        const result = processCalculatorInput(currentInput, '0')
        expect(result).toBe('4.0')
      })
    })
    describe('and inputChar === "Backspace"', () => {
      it('returns the "4"', () => {
        const result = processCalculatorInput(currentInput, 'Backspace')
        expect(result).toBe('4')
      })
    })
  })
  describe('when currentInput === "4.1"', () => {
    const currentInput = '4.1'
    describe('and inputChar === "4"', () => {
      it('returns 44', () => {
        const result = processCalculatorInput(currentInput, '4')
        expect(result).toBe('4.14')
      })
    })
    describe('and inputChar === "."', () => {
      it('returns 4.1', () => {
        const result = processCalculatorInput(currentInput, '.')
        expect(result).toBe('4.1')
      })
    })
    describe('and inputChar === "0"', () => {
      it('returns the 4.0', () => {
        const result = processCalculatorInput(currentInput, '0')
        expect(result).toBe('4.10')
      })
    })
    describe('and inputChar === "Backspace"', () => {
      it('returns the "4."', () => {
        const result = processCalculatorInput(currentInput, 'Backspace')
        expect(result).toBe('4.')
      })
    })
  })
})
