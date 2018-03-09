import React from 'react'
import PropTypes from 'prop-types'

const ANIMATION_DELAY = 250

/**
 * @param {React.Component|Function} Component
 * @param {String} refPropName
 * @param {function(ref)} keyDown
 * @param {function(ref)}keyUp
 * @param {function({isButtonPressed:boolean})} mapProps
 * @return {KeyMap}
 */
export function withKeyMap(Component, { refPropName, keyDown = none, mapProps }) {
  class KeyMap extends React.Component {
    static propTypes = {
      keyToMap: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]).isRequired,
      /**
       * @type {function(ref)}
       */
      innerRef: PropTypes.func
    }

    static defaultProps = {
      innerRef: () => null
    }

    state = {
      isButtonPressed: false
    }

    componentDidMount() {
      const isArrayToKeyMatcher = {
        false: key => key === this.props.keyToMap,
        true: key => this.props.keyToMap.includes(key)
      }
      const keyMatcher = isArrayToKeyMatcher[Array.isArray(this.props.keyToMap)]
      this.keyDownHandle = document.addEventListener('keydown', e => {
        if (keyMatcher(e.key)) {
          clearTimeout(this.turnOffPressedStateHandle)
          keyDown(this.ref)
          this.setState({ isButtonPressed: true })
          this.turnOffPressedStateHandle = setTimeout(this.turnOffPressetState, ANIMATION_DELAY)
        }
      })
    }

    componentWillUnmount() {
      document.removeEventListener('keydown', this.keyDownHandle)
      document.removeEventListener('keyup', this.keyUpHandle)
    }

    setRef = ref => {
      this.ref = ref
      this.props.innerRef(ref)
    }

    turnOffPressedStateHandle

    turnOffPressetState = () => {
      this.setState({ isButtonPressed: false })
    }

    render() {
      /* eslint-disable no-unused-vars */
      const { keyToMap, innerRef, ...restOfProps } = this.props
      /* eslint-enable no-unused-vars */
      return (
        <Component
          {...restOfProps}
          {...{ [refPropName]: this.setRef }}
          {...mapProps(this.state)}
          title={`Shortcut: ${Array.from(this.props.keyToMap).join(' or ')}`}
        />
      )
    }
  }

  KeyMap.displayName = `withKeyMap(${Component.displayName || Component.name})}`

  return KeyMap
}

function none() {}
