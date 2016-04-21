import React, {Component} from 'react'
import {Button} from 'react-bootstrap'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {changeTitle} from '../actions'

class ChangeButton extends Component {
  render () {
    return (
      <Button onClick={this.props.changeTitle} >
        {this.props.children}
      </Button>
    )
  }
}

ChangeButton.propTypes = {
  changeTitle: React.PropTypes.func,
  children: React.PropTypes.string
}

const mapStateToProps = (state) => {
  return {
    title: state.title
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({changeTitle}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangeButton)
