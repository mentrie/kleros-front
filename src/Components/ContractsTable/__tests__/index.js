import React from 'react'
import ContractTable from '../index'

describe('ContractTable Exist', () => {
  const component = shallow(<ContractTable />)
  test('should render component properly', () => {
    expect(component).toMatchSnapshot()
  })

  test('should render button with text', () => {
    expect(component.find('button').text()).toBe('New Contract')
  })
})
