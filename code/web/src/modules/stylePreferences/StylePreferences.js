import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

// UI Imports
import Button from '../../ui/button/Button'
import H4 from '../../ui/typography/H4'
import Icon from '../../ui/icon'
import { white, grey2, black } from '../../ui/common/colors'

// App Imports
// import { APP_URL } from '../../setup/config/env'
// import { messageShow, messageHide } from '../common/api/actions'
// import { remove, getListByUser } from '../subscription/api/actions'

// Component
class StylePreferences extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tops: '',
            pants: '',
            dresses: '',
            shoes: '',
            accessories: ''
        }
    }

    updateTops = (event) => {
        console.log(event.target.id)
        const targetEvent = event.target.id;
        this.setState({tops: targetEvent})
    }

    render() {
    console.log(this.state)

    return (
        <section>
            <p>Shirts</p>
            <div style={{ textAlign: 'center', marginTop: '1.5em', marginBottom: '1em'}}>
                <button id='punk'
                onClick={this.updateTops}
                >
                    Punk
                </button>
                <button id='preppy'
                onClick={this.updateTops}                
                >
                    Preppy
                </button>
                <button id='comfy'
                onClick={this.updateTops}
                >
                    Comfy
                </button>
            </div>
            <p>Pants</p>
            <div style={{ textAlign: 'center', marginTop: '1.5em', marginBottom: '1em' }}>
            <button type='punk'>
                    Punk
                </button>
                <button type='preppy'>
                    Preppy
                </button>
                <button type='comfy'>
                    Comfy
                </button>
            </div>
            <p>Dresses</p>
            <div style={{ textAlign: 'center', marginTop: '1.5em', marginBottom: '1em' }}>
            <button type='punk'>
                    Punk
                </button>
                <button type='preppy'>
                    Preppy
                </button>
                <button type='comfy'>
                    Comfy
                </button>
            </div>
            <p>Shoes</p>
            <div style={{ textAlign: 'center', marginTop: '1.5em', marginBottom: '1em' }}>
            <button type='punk'>
                    Punk
                </button>
                <button type='preppy'>
                    Preppy
                </button>
                <button type='comfy'>
                    Comfy
                </button>
            </div>
            <p>Accessories</p>
            <div style={{ textAlign: 'center', marginTop: '1.5em', marginBottom: '1em' }}>
            <button type='punk'>
                    Punk
                </button>
                <button type='preppy'>
                    Preppy
                </button>
                <button type='comfy'>
                    Comfy
                </button>
            </div>
            <div>
            <p style={{ textAlign: 'center', marginTop: '1.5em', marginBottom: '1em' }}>
                <Button
                    theme="primary"
                    type="button"
                >
                Submit
                </Button>
            </p>
            </div>
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