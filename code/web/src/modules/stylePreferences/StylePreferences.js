import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

// UI Imports
// import Button from '../../ui/button/Button'
// import H4 from '../../ui/typography/H4'
// import Icon from '../../ui/icon'
// import { white, grey2, black } from '../../ui/common/colors'

// App Imports
// import { APP_URL } from '../../setup/config/env'
// import { messageShow, messageHide } from '../common/api/actions'
// import { remove, getListByUser } from '../subscription/api/actions'

// Component
class StylePreferences extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false
        }
    }

    render() {

    return (
        <section>
          <h1>Made it</h1>
        </section>
    )
}
}

// Component Properties
// Item.propTypes = {
//   subscription: PropTypes.object.isRequired,
//   user: PropTypes.object.isRequired,
//   remove: PropTypes.func.isRequired,
//   getListByUser: PropTypes.func.isRequired,
//   messageShow: PropTypes.func.isRequired,
//   messageHide: PropTypes.func.isRequired
// }

// Component State
// function mapStateToProps(state) {
//   return {
//     stylePreferences: state.stylePreferences
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(withRouter(StylePreferences))

export default StylePreferences;