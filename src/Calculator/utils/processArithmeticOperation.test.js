import { processArithmeticOperation } from './processArithmeticOperation'
import { OPERATIONS } from './../operations'

describe('processArithmeticOperation', () => {
  describe('previous operation = Some Invalid value', () => {
    it('throws error', () => {
      expect(() => processArithmeticOperation('KASDKA', 0, 5)).toThrow(Error)
    })
  })

  describe('previous operation = NONE', () => {
    describe('current value = 0', () => {
      describe('new value = 5', () => {
        it('returns 5', () => {
          const result = processArithmeticOperation(undefined, 0, 5)
          expect(result).toBe(5)
        })
      })
    })
    describe('current value = 4', () => {
      describe('new value = 8', () => {
        it('returns 8', () => {
          const result = processArithmeticOperation(undefined, 0, 8)
          expect(result).toBe(8)
        })
      })
    })
    describe('current value = 4', () => {
      describe('new value = 0', () => {
        it('returns 0', () => {
          const result = processArithmeticOperation(undefined, 0, 0)
          expect(result).toBe(0)
        })
      })
    })
  })

  describe('previous operation = ADD', () => {
    describe('current value = 0', () => {
      describe('new value = 5', () => {
        it('returns 5', () => {
          const result = processArithmeticOperation(OPERATIONS.ADD, 0, 5)
          expect(result).toBe(5)
        })
      })
    })
    describe('current value = 4', () => {
      describe('new value = 8', () => {
        it('returns 8', () => {
          const result = processArithmeticOperation(OPERATIONS.ADD, 4, 8)
          expect(result).toBe(12)
        })
      })
    })
    describe('current value = 4', () => {
      describe('new value = 0', () => {
        it('returns 0', () => {
          const result = processArithmeticOperation(OPERATIONS.ADD, 4, 0)
          expect(result).toBe(4)
        })
      })
    })
  })

  describe('previous operation = SUB', () => {
    describe('current value = 0', () => {
      describe('new value = 5', () => {
        it('returns 5', () => {
          const result = processArithmeticOperation(OPERATIONS.SUB, 0, 5)
          expect(result).toBe(-5)
        })
      })
    })
    describe('current value = 4', () => {
      describe('new value = 8', () => {
        it('returns 8', () => {
          const result = processArithmeticOperation(OPERATIONS.SUB, 4, 8)
          expect(result).toBe(-4)
        })
      })
    })
    describe('current value = 4', () => {
      describe('new value = 0', () => {
        it('returns 0', () => {
          const result = processArithmeticOperation(OPERATIONS.SUB, 4, 0)
          expect(result).toBe(4)
        })
      })
    })
  })

  describe('precisions', () => {
    describe('0.1+0.2', () => {
      it('should return 0.3', () => {
        const result = processArithmeticOperation(OPERATIONS.ADD, 0.1, '0.2')
        expect(result).toEqual(0.3)
      })
    })

    describe('0.1+0.20', () => {
      it('should return 0.3', () => {
        const result = processArithmeticOperation(OPERATIONS.ADD, 0.1, '0.2')
        expect(result).toEqual(0.3)
      })
    })

    describe('0.11+0.19', () => {
      it('should return 0.3', () => {
        const result = processArithmeticOperation(OPERATIONS.ADD, 0.1, '0.2')
        expect(result).toEqual(0.3)
      })
    })

    describe('1+0.1', () => {
      it('should return 1.1', () => {
        const result = processArithmeticOperation(OPERATIONS.ADD, 1, '0.1')
        expect(result).toEqual(1.1)
      })
    })
  })
})
