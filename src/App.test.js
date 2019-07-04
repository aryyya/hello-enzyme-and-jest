import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import {
  configure,
  shallow
} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({
  adapter: new Adapter()
})

describe('<App />', () => {
  const wrapper = shallow(<App />)
  it('should contain a greeting element', () => {
    expect(wrapper.find('.app__greeting').exists()).toBe(true)
    expect(wrapper.find('.app__greeting').text()).toBe('Hello, Enzyme and Jest!')
    expect(wrapper.find('ul').hasClass('app__items')).toBe(true)
    expect(wrapper.find('.app__items').children().length).toBe(3)
  })
})
