import React from 'react'
import { mount } from 'enzyme'
import { Button } from '../Button'

describe('Button', () => {
  let component
  beforeAll(() => {
    component = mount(<Button>text</Button>)
  })

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot()
  })
})
