import React from 'react'
import { GridContent } from '../Grid/GridContent'

describe('GridContent Exists', () => {
  const props = {
    getDataContracts: jest.fn(),
    contracts: [{address: '0xwere', partA: '', partB: '0x2343'}]
  }
  const component = mount(<GridContent {...props} />)
  test('should render component properly', () => {
    expect(component).toMatchSnapshot()
  })

  test('should render contracts when present', () => {
    expect(component.props().contracts.length).toBe(1)
  })

  test('should render empty div when there\'s no contract', () => {
    const props = {
      getDataContracts: jest.fn()
    }
    const component = shallow(<GridContent {...props} />)
    expect(component.find('.item-no-contracts').length).toBe(1)
  })
})
