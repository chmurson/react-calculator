import React from 'react'
import PropTypes from 'prop-types'
import { GridWithKeyMapButton, ButtonWithKeyMap } from './ButtonsWithKeyMap'

export function InputButton({ input, onClick, ...restOfProps }) {
  return (
    <ButtonWithKeyMap keyToMap={input} onClick={() => onClick(input)} {...restOfProps}>
      {input}
    </ButtonWithKeyMap>
  )
}

InputButton.propTypes = {
  input: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export function InputGridButton({ input, onClick, ...restOfProps }) {
  return (
    <GridWithKeyMapButton keyToMap={input} onClick={() => onClick(input)} {...restOfProps}>
      {input}
    </GridWithKeyMapButton>
  )
}

InputGridButton.propTypes = {
  input: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}
