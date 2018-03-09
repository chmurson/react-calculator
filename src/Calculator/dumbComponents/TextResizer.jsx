import React from 'react'
import PropTypes from 'prop-types'
import Measure from 'react-measure'

const FONT_SIZE_MOD = 2

export class TextResizer extends React.Component {
  static propTypes = {
    maxWidth: PropTypes.number.isRequired,
    maxFontSize: PropTypes.number.isRequired,
    minFontSize: PropTypes.number.isRequired,
    children: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)

    this.fontSize = this.props.maxFontSize
  }

  onInputAreaSizeChange = contentRect => {
    const inputAreaWidth = contentRect.bounds.width

    if (inputAreaWidth > this.props.maxWidth - this.props.maxFontSize && this.fontSize > this.props.minFontSize) {
      this.safelyApplyNewFontSize(-FONT_SIZE_MOD)
    }
    if (inputAreaWidth < this.props.maxWidth - this.props.maxFontSize * 3 && this.fontSize < this.props.maxFontSize) {
      this.safelyApplyNewFontSize(FONT_SIZE_MOD)
    }
  }

  setRef = ref => {
    this.ref = ref
    this.applyFontSize()
  }

  applyFontSize() {
    this.ref.style['font-size'] = `${this.fontSize}px`
  }

  safelyApplyNewFontSize(mod) {
    const newFontSize = this.fontSize + mod
    this.fontSize = Math.floor(Math.max(this.props.minFontSize, Math.min(this.props.maxFontSize, newFontSize)))
    this.applyFontSize()
  }

  render() {
    return (
      <Measure bounds onResize={this.onInputAreaSizeChange} innerRef={this.setRef}>
        {({ measureRef }) => this.props.children({ measureRef })}
      </Measure>
    )
  }
}
