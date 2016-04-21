import React, {Component} from 'react'
import Header from './Header/index.js'
import Footer from './Footer/index.js'

import '../../scss/style.scss'

const options = {
  menuItems: ['about', 'contact'],
  logoUrl: 'img/rhino.png'
}

export default class App extends Component {
  render () {
    return (
      <div>
        <Header
          menuItems={options.menuItems}
          logoUrl={options.logoUrl}
          fluid={true} />
        <div className='header-spacing'></div>
          {this.props.children}
        <Footer logoUrl={options.logoUrl} />
      </div>
    )
  }
}

App.propTypes = {
  children: React.PropTypes.element
}
