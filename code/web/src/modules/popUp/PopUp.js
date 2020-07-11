import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

// UI Imports


// App Imports
import { receiveStyle } from '../popUp/api/actions'


// Component
class PopUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false
        }
    }

    submitStyleSummary = (event) => {
        console.log('pop-up button click')
        receiveStyle()
    }

    render() {
    return (
        <section>
          <h1>POP UP</h1>
          <button onClick={this.submitStyleSummary}>GOOD TO GO</button>
        </section>
        )
    }
}

// Component Properties
// Item.propTypes = {
// }

function stylePreferencesState(state) {
    return {
        PopUp: state.PopUp
    }
}

export default connect(stylePreferencesState, { sendPreferences })(withRouter(PopUp))


