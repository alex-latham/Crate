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
import { sendPreferences } from '../stylePreferences/api/actions'

// Component
class StylePreferences extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tops: '',
            pants: '',
            dresses: '',
            shoes: '',
            accessories: '',
            styleSummary: []
        }
    }

    updateTops = (event) => {
        const targetEvent = event.target.id;
        this.setState({tops: targetEvent})
    }

    updatePants = (event) => {
        const targetEvent = event.target.id;
        this.setState({pants: targetEvent})
    }

    updateDresses = (event) => {
        const targetEvent = event.target.id;
        this.setState({dresses: targetEvent})
    }

    updateShoes = (event) => {
        const targetEvent = event.target.id;
        this.setState({shoes: targetEvent})
    }

    updateAccessories = (event) => {
        const targetEvent = event.target.id;
        this.setState({accessories: targetEvent})
    }

    submitStyle = (event) => {
        this.setState({styleSummary: [this.state.shoes, this.state.pants, this.state.dresses, this.state.accessories, this.state.tops]})
        sendPreferences(this.state.styleSummary)
    }

    render() {
    return (
        <section>
            <p>Tops</p>
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
            <p>Bottoms</p>
            <div style={{ textAlign: 'center', marginTop: '1.5em', marginBottom: '1em' }}>
                <button id='punk'
                onClick={this.updatePants}
                >
                    Punk
                </button>
                <button id='preppy'
                onClick={this.updatePants}                
                >
                    Preppy
                </button>
                <button id='comfy'
                onClick={this.updatePants}
                >
                    Comfy
                </button>
            </div>
            <p>Dresses</p>
            <div style={{ textAlign: 'center', marginTop: '1.5em', marginBottom: '1em' }}>
                <button id='punk'
                onClick={this.updateDresses}
                >
                    Punk
                </button>
                <button id='preppy'
                onClick={this.updateDresses}                
                >
                    Preppy
                </button>
                <button id='comfy'
                onClick={this.updateDresses}
                >
                    Comfy
                </button>
            </div>
            <p>Shoes</p>
            <div style={{ textAlign: 'center', marginTop: '1.5em', marginBottom: '1em' }}>
                <button id='punk'
                onClick={this.updateShoes}
                >
                    Punk
                </button>
                <button id='preppy'
                onClick={this.updateShoes}                
                >
                    Preppy
                </button>
                <button id='comfy'
                onClick={this.updateShoes}
                >
                    Comfy
                </button>
            </div>
            <p>Accessories</p>
            <div style={{ textAlign: 'center', marginTop: '1.5em', marginBottom: '1em' }}>
                <button id='punk'
                onClick={this.updateAccessories}
                >
                    Punk
                </button>
                <button id='preppy'
                onClick={this.updateAccessories}                
                >
                    Preppy
                </button>
                <button id='comfy'
                onClick={this.updateTAccessories}
                >
                    Comfy
                </button>
            </div>
            <div>
            <p style={{ textAlign: 'center', marginTop: '1.5em', marginBottom: '1em' }}>
                <Button
                    theme="primary"
                    type="button"
                    onClick={this.submitStyle}
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
// StylePreferences.propTypes = {
 
// }

// Component State
function stylePreferencesState(state) {
    return {
        stylePreferences: state.stylePreferences
    }
}

export default connect(stylePreferencesState, { sendPreferences })(withRouter(StylePreferences))
