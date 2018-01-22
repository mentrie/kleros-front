import React from 'react'
import DisputesTable from '../index'

describe('DisputesTable Exists', () => {
  const component = shallow(<DisputesTable />)
  test('should render component properly', () => {
    expect(component).toMatchSnapshot()
  })
})
