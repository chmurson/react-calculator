import React from 'react'
import { mount } from 'enzyme'
import { InputGridButton, InputButton } from '../InputButtons'

describe('InputGridButton', () => {
  let component
  beforeAll(() => {
    component = mount(
      <InputGridButton input="3" onClick={() => null} row={1} col={1}>
        text
      </InputGridButton>
    )
  })

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot()
  })
})

describe('InputButton', () => {
  let component
  beforeAll(() => {
    component = mount(
      <InputButton onClick={() => null} input="4">
        text
      </InputButton>
    )
  })

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot()
  })
})
