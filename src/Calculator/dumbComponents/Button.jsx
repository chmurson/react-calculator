import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './Button.styl'

export class Button extends React.Component {
  static propTypes = {
    onClick: PropTypes.func,
    buttonRef: PropTypes.func,
    className: PropTypes.string
  }

  static defaultProps = {
    className: '',
    onClick: () => null,
    buttonRef: () => null
  }

  onClick = e => {
    this.ref.blur()
    this.props.onClick(e)
  }

  setRef = ref => {
    if (ref) {
      this.ref = ref
    }
    this.props.buttonRef(ref)
  }

  ref

  render() {
    const { buttonRef, onClick, className, ...restOfProps } = this.props
    const finalClassName = classNames('custom-button', 'custom-button--regular', className)
    return <button tabIndex={-1} {...restOfProps} onClick={this.onClick} ref={this.setRef} className={finalClassName} />
  }
}
