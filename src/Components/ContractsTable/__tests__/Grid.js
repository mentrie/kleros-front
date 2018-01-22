import React from 'react'
import Grid from '../Grid'

describe('Grid Exists', () => {
  test('should render grid component properly', () => {
    const component = shallow(<Grid />)
    expect(component).toMatchSnapshot()
  })
})
