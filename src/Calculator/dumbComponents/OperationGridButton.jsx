import React from 'react'
import PropTypes from 'prop-types'
import { GridWithKeyMapButton } from './ButtonsWithKeyMap'

import { OPERATIONS } from '../operations'

const OPERATIONS_DETAILS = {
  [OPERATIONS.ADD]: {
    text: '+',
    keyMap: '+'
  },
  [OPERATIONS.SUB]: {
    text: '-',
    keyMap: '-'
  },
  [OPERATIONS.CALCULATE]: {
    text: '=',
    keyMap: ['=', 'Enter']
  },
  [OPERATIONS.AC]: {
    text: 'AC',
    keyMap: 'c'
  }
}

export function OperationGridButton({ operation, onClick, ...restOfProps }) {
  return (
    <GridWithKeyMapButton
      keyToMap={OPERATIONS_DETAILS[operation].keyMap}
      onClick={() => onClick(operation)}
      {...restOfProps}
    >
      {OPERATIONS_DETAILS[operation].text}
    </GridWithKeyMapButton>
  )
}

OperationGridButton.propTypes = {
  operation: PropTypes.oneOf(Object.values(OPERATIONS)).isRequired,
  onClick: PropTypes.func.isRequired
}
