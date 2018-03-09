import React from 'react'
import { mount } from 'enzyme'
import { mountToJson } from 'enzyme-to-json'
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
