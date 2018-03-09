import { withKeyMap } from './withKeyMap'
import { withGridCell } from './withGridCell'
import { Button } from './Button'

export const ButtonWithKeyMap = withKeyMap(Button, {
  refPropName: 'buttonRef',
  mapProps: ({ isButtonPressed }) => ({
    className: isButtonPressed ? 'custom-button--active' : ''
  }),
  keyDown: ref => {
    ref.click()
  }
})

export const GridWithKeyMapButton = withGridCell(ButtonWithKeyMap)
