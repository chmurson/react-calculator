import React from 'react'
import PropTypes from 'prop-types'
import curry from 'curry'
import { CalculatorDumb } from './dumbComponents/CalculatorDumb'
import { OPERATIONS } from './operations'
import { defaultState, operationCalculate, operationArithmetic, inputChange } from './state'

const curriedOperationArithmetic = curry(operationArithmetic)
const curriedInputChange = curry(inputChange)

export class Calculator extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    /**
     * @type {function(value)} Returns calculated value
     */
    onChange: PropTypes.func
  }

  static defaultProps = {
    className: '',
    onChange: () => null
  }

  constructor(props) {
    super(props)

    this.state = { ...defaultState }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.accumulatedValue !== this.state.accumulatedValue) {
      this.props.onChange(this.state.accumulatedValue)
    }
  }

  onInput = input => {
    this.setState(curriedInputChange(input))
  }

  onOperation = operation => {
    if (operation === OPERATIONS.AC) {
      return this.setState(defaultState)
    }
    if (operation === OPERATIONS.CALCULATE) {
      return this.setState(operationCalculate)
    }

    // add or subtract
    return this.setState(curriedOperationArithmetic(operation))
  }

  render() {
    const numberToDisplay = this.state.displayAccumulatedValue ? this.state.accumulatedValue : this.state.currentInput
    return (
      <CalculatorDumb
        className={this.props.className}
        value={numberToDisplay}
        onInput={this.onInput}
        onOperation={this.onOperation}
      />
    )
  }
}
