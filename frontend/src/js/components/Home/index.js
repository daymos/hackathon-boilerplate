import React, {Component} from 'react'
import { Jumbotron } from 'react-bootstrap'
import {connect} from 'react-redux'

import ChangeButton from '../../containers/ChangeButton'

class Home extends Component {
  render () {
    return (
      <Jumbotron className='home'>
        <h1>{this.props.title}</h1>
        <ChangeButton>This button uses Redux!</ChangeButton>
      </Jumbotron>
    )
  }
}

Home.propTypes = {
  title: React.PropTypes.string
}

const mapStateToProps = state => {
  return {
    title: state.changeTitle.title
  }
}

export default connect(mapStateToProps)(Home)
