import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { OPERATIONS } from './../operations'
import { OperationGridButton } from './OperationGridButton'
import { InputButton, InputGridButton } from './InputButtons'
import { TextResizer } from './TextResizer'

import './Calculator.styl'

const MAX_FONT_SIZE = 48
const MIN_FONT_SIZE = 12

export class CalculatorDumb extends React.Component {
  static propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    /**
     * @type {function(operation:{})}
     */
    onInput: PropTypes.func,
    /**
     * @type {function(input: String)}
     */
    onOperation: PropTypes.func,

    className: PropTypes.string
  }

  static defaultProps = {
    onInput: () => null,
    onOperation: () => null,
    className: ''
  }

  state = {
    fontSize: MAX_FONT_SIZE,
    maxWidth: 0
  }

  setRef = ref => {
    this.ref = ref
    this.setState({ maxWidth: ref.offsetWidth })
  }

  render() {
    return (
      <div className={classNames('calculator', this.props.className)} ref={this.setRef}>
        <div className="calculator__area-display">
          <TextResizer maxWidth={this.state.maxWidth} maxFontSize={MAX_FONT_SIZE} minFontSize={MIN_FONT_SIZE}>
            {({ measureRef }) => (
              <div ref={measureRef} className="calculator__current-input" style={{ fontSize: this.state.fontSize }}>
                {this.props.value}
              </div>
            )}
          </TextResizer>
        </div>
        <div className="calculator__area-buttons">
          <InputGridButton input="7" col={1} row={1} onClick={this.props.onInput} />
          <InputGridButton input="8" col={2} row={1} onClick={this.props.onInput} />
          <InputGridButton input="9" col={3} row={1} onClick={this.props.onInput} />
          <OperationGridButton operation={OPERATIONS.ADD} col={4} row={1} onClick={this.props.onOperation} />
          <InputGridButton input="4" col={1} row={2} onClick={this.props.onInput} />
          <InputGridButton input="5" col={2} row={2} onClick={this.props.onInput} />
          <InputGridButton input="6" col={3} row={2} onClick={this.props.onInput} />
          <OperationGridButton operation={OPERATIONS.SUB} col={4} row={2} onClick={this.props.onOperation} />
          <InputGridButton input="1" col={1} row={3} onClick={this.props.onInput} />
          <InputGridButton input="2" col={2} row={3} onClick={this.props.onInput} />
          <InputGridButton input="3" col={3} row={3} onClick={this.props.onInput} />
          <OperationGridButton operation={OPERATIONS.CALCULATE} col={4} row="3 / 5" onClick={this.props.onOperation} />
          <OperationGridButton operation={OPERATIONS.AC} col={1} row={4} onClick={this.props.onOperation} />
          <InputGridButton input="0" col={2} row={4} onClick={this.props.onInput} />
          <InputGridButton input="." col={3} row={4} onClick={this.props.onInput} />
          <InputButton style={{ display: 'none' }} input="Backspace" onClick={this.props.onInput} />
        </div>
      </div>
    )
  }
}
