import React, {Component} from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {toggleMenu} from './../../actions'

class Header extends Component {
  render () {
    return (
      <div>
        <Navbar
          expanded={this.props.menuOpen}
          onToggle={this.props.toggleMenu}
          className='top-menu'
          fixedTop={true}>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to={'/'}>
                <img src={this.props.logoUrl}></img>
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse pullRight>
            <Nav pullRight>
              {this.props.menuItems
                .map(item => {
                  return (
                    <li onClick={this.props.toggleMenu}
                      role='presentation'
                      key={item + '-li'}>
                      <Link key={item} to={'/' + item}>{item}</Link>
                    </li>
                  )
                }
              )}
            </Nav>
          </Navbar.Collapse>
          <p className='user-logged-in'>{this.props.auth ? 'Welcome ' + this.props.userDetails : ''}</p>
        </Navbar>
      </div>
    )
  }
}

Header.propTypes = {
  menuOpen: React.PropTypes.bool,
  toggleMenu: React.PropTypes.func,
  logoUrl: React.PropTypes.string,
  menuItems: React.PropTypes.array,
  auth: React.PropTypes.string,
  userDetails: React.PropTypes.string
}

const mapStateToProps = state => {
  return {
    state: state,
    menuOpen: state.toggleMenu.menuOpen
  }
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators({toggleMenu}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
