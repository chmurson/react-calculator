import React from 'react'
import PropTypes from 'prop-types'

export function withGridCell(Component) {
  function GridCell({ col, row, style, ...restOfProps }) {
    const finalStyle = { ...style, gridColumn: col, gridRow: row }
    return <Component style={finalStyle} {...restOfProps} />
  }

  GridCell.propTypes = {
    col: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    row: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    style: PropTypes.object
  }

  GridCell.defaultProps = {
    style: {}
  }

  GridCell.displayName = `${withGridCell.name}(${Component.displayName || Component.name})`

  return GridCell
}
