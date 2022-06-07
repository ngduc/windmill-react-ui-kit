import React from 'react'
import { mount } from 'enzyme'
import Text from '../Text'
import theme from '../themes/default'

describe('Text', () => {
  it('should render without crashing', () => {
    mount(<Text />)
  })

  it('should render with base styles', () => {
    const expected = theme.text.base
    const wrapper = mount(<Text />)

    expect(wrapper.find(Text).getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should render with h1 styles', () => {
    const expected = theme.text.h1
    const wrapper = mount(<Text as='h1' />)

    expect(wrapper.find(Text).getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should render with h2 styles', () => {
    const expected = theme.text.h2
    const wrapper = mount(<Text as='h2' />)

    expect(wrapper.find(Text).getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should render with h3 styles', () => {
    const expected = theme.text.h3
    const wrapper = mount(<Text as='h3' />)

    expect(wrapper.find(Text).getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should render with h4 styles', () => {
    const expected = theme.text.h4
    const wrapper = mount(<Text as='h4' />)

    expect(wrapper.find(Text).getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should render with h5 styles', () => {
    const expected = theme.text.h5
    const wrapper = mount(<Text as='h5' />)

    expect(wrapper.find(Text).getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should render with h6 styles', () => {
    const expected = theme.text.h6
    const wrapper = mount(<Text as='h6' />)

    expect(wrapper.find(Text).getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should render with p styles', () => {
    const expected = theme.text.base
    const wrapper = mount(<Text as='p' />)

    expect(wrapper.find(Text).getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should render with div styles', () => {
    const expected = theme.text.base
    const wrapper = mount(<Text as='div' />)

    expect(wrapper.find(Text).getDOMNode().getAttribute('class')).toContain(expected)
  })
})
