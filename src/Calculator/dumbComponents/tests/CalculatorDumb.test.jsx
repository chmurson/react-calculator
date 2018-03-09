import React from 'react'
import { mount } from 'enzyme'
import { CalculatorDumb } from '../CalculatorDumb'

describe('CalculatorDumb', () => {
  let component
  beforeAll(() => {
    component = mount(<CalculatorDumb value="0">text</CalculatorDumb>)
  })

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot()
  })
})
