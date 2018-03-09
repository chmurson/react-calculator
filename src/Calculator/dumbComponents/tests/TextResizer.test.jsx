import React from 'react'
import { mount } from 'enzyme'
import { TextResizer } from '../TextResizer'

describe('CalculatorDumb', () => {
  let component
  beforeAll(() => {
    component = mount(
      <TextResizer maxFontSize={20} maxWidth={200} minFontSize={10}>
        {() => null}
      </TextResizer>
    )
  })

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot()
  })
})
