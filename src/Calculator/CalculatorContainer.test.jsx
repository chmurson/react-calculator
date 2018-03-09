import React from 'react'
import { shallow } from 'enzyme'
import { Calculator } from './CalculatorContainer'
import { OPERATIONS } from './operations'

import { defaultState } from './state'

describe('Calculator', () => {
  describe('simple calculation process', () => {
    // each of those test cases should be run in chain. one depends on a state of another
    let calculator
    beforeAll(() => {
      calculator = shallow(<Calculator />)
    })

    it('has default state correct', () => {
      expect(calculator.state()).toEqual(defaultState)
    })

    it('correctly sets 5 as input ', () => {
      calculator.instance().onInput('5')
      expect(calculator.state().currentInput).toEqual('5')
    })

    it('has correct state after ADD operation', () => {
      calculator.instance().onOperation(OPERATIONS.ADD)
      expect(calculator.state()).toEqual({
        accumulatedValue: 5,
        currentInput: '5',
        displayAccumulatedValue: true,
        prevArithmeticOperation: OPERATIONS.ADD
      })
    })

    it('correctly sets 10 as input ', () => {
      calculator.instance().onInput('10')
      expect(calculator.state().currentInput).toEqual('10')
      expect(calculator.state().displayAccumulatedValue).toEqual(false)
    })

    it('has correct state after set SUB operation', () => {
      calculator.instance().onOperation(OPERATIONS.SUB)
      expect(calculator.state()).toEqual({
        accumulatedValue: 15,
        currentInput: '10',
        displayAccumulatedValue: true,
        prevArithmeticOperation: OPERATIONS.SUB
      })
    })

    it('correctly set 3 as input', () => {
      calculator.instance().onInput('3')
      expect(calculator.state()).toEqual({
        accumulatedValue: 15,
        currentInput: '3',
        displayAccumulatedValue: false,
        prevArithmeticOperation: OPERATIONS.SUB
      })
    })

    it('has correct state after CALC operation', () => {
      calculator.instance().onOperation(OPERATIONS.CALCULATE)
      expect(calculator.state()).toEqual({
        accumulatedValue: 12,
        currentInput: '3',
        displayAccumulatedValue: true,
        prevArithmeticOperation: OPERATIONS.SUB
      })
    })

    it('has correct state after again CALC operation', () => {
      calculator.instance().onOperation(OPERATIONS.CALCULATE)
      expect(calculator.state()).toEqual({
        accumulatedValue: 9,
        currentInput: '3',
        displayAccumulatedValue: true,
        prevArithmeticOperation: OPERATIONS.SUB
      })
    })

    it('has correct state after set ADD operation', () => {
      calculator.instance().onOperation(OPERATIONS.ADD)
      expect(calculator.state()).toEqual({
        accumulatedValue: 9,
        currentInput: '3',
        displayAccumulatedValue: true,
        prevArithmeticOperation: OPERATIONS.ADD
      })
    })

    it('has correct state after set SUB operation', () => {
      calculator.instance().onOperation(OPERATIONS.SUB)
      expect(calculator.state()).toEqual({
        accumulatedValue: 9,
        currentInput: '3',
        displayAccumulatedValue: true,
        prevArithmeticOperation: OPERATIONS.SUB
      })
    })

    it('has correct state after CALC operation', () => {
      calculator.instance().onOperation(OPERATIONS.CALCULATE)
      expect(calculator.state()).toEqual({
        accumulatedValue: 6,
        currentInput: '3',
        displayAccumulatedValue: true,
        prevArithmeticOperation: OPERATIONS.SUB
      })
    })

    it('has again defaultState after AC operation', () => {
      calculator.instance().onOperation(OPERATIONS.AC)
      expect(calculator.state()).toEqual(defaultState)
    })
  })
})
