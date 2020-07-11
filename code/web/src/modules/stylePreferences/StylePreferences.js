import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

// UI Imports
import Button from '../../ui/button/Button'
import H3 from '../../ui/typography/H3'
import Icon from '../../ui/icon'
import { white, grey2, black } from '../../ui/common/colors'

// App Imports
// import { APP_URL } from '../../setup/config/env'
// import { messageShow, messageHide } from '../common/api/actions'
import { sendPreferences } from './api/actions'

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

    submitStyle = async (event) => {
        const postArray = Object.values(this.state) 
        console.log(postArray)
        await sendPreferences(postArray)
    }

    render() {
        
    return (
        <section>
            <H3 style={{ textAlign: 'center' }}>What is your style?</H3>
            <h2 style={{font:'primary'}}>Tops</h2>
            <div style={{ textAlign: 'center', marginTop: '1.5em', marginBottom: '1em'}}>
                <Button 
                style={{ margin: '3em'}}
                id='punk'
                theme="primary"
                onClick={this.updateTops}
                >
                    Punk
                </Button>
                <Button 
                id='preppy'
                style={{ margin: '3em'}}
                theme="primary"
                onClick={this.updateTops}                
                >
                    Preppy
                </Button>
                <Button 
                id='comfy'
                style={{ margin: '3em'}}
                theme="primary"
                onClick={this.updateTops}
                >
                    Comfy
                </Button>
            </div>
            <h2 style={{font:'primary'}}>Bottoms</h2>
            <div style={{ textAlign: 'center', marginTop: '1.5em', marginBottom: '1em' }}>
                <Button 
                id='punk'
                style={{ margin: '3em'}}
                theme="primary"
                onClick={this.updatePants}
                >
                    Punk
                </Button>
                <Button 
                id='preppy'
                style={{ margin: '3em'}}
                theme="primary"
                onClick={this.updatePants}                
                >
                    Preppy
                </Button>
                <Button 
                id='comfy'
                style={{ margin: '3em'}}
                theme="primary"
                onClick={this.updatePants}
                >
                    Comfy
                </Button>
            </div>
            <h2 style={{font:'primary'}}>Dresses</h2>            
            <div style={{ textAlign: 'center', marginTop: '1.5em', marginBottom: '1em' }}>
                <Button 
                id='punk'
                style={{ margin: '3em'}}
                theme="primary"
                onClick={this.updateDresses}
                >
                    Punk
                </Button>
                <Button 
                id='preppy'
                style={{ margin: '3em'}}
                theme="primary"
                onClick={this.updateDresses}                
                >
                    Preppy
                </Button>
                <Button 
                id='comfy'
                style={{ margin: '3em'}}
                theme="primary"
                onClick={this.updateDresses}
                >
                    Comfy
                </Button>
            </div>
            <h2 style={{font:'primary'}}>Shoes</h2>            
            <div style={{ textAlign: 'center', marginTop: '1.5em', marginBottom: '1em' }}>
                <Button 
                id='punk'
                style={{ margin: '3em'}}
                theme="primary"
                onClick={this.updateShoes}
                >
                    Punk
                </Button>
                <Button 
                id='preppy'
                style={{ margin: '3em'}}
                theme="primary"
                onClick={this.updateShoes}                
                >
                    Preppy
                </Button>
                <Button 
                id='comfy'
                style={{ margin: '3em'}}
                theme="primary"
                onClick={this.updateShoes}
                >
                    Comfy
                </Button>
            </div>
            <h2 style={{font:'primary'}}>Accessories</h2>            
            <div style={{ textAlign: 'center', marginTop: '1.5em', marginBottom: '1em' }}>
                <Button 
                id='punk'
                style={{ margin: '3em'}}
                theme="primary"
                onClick={this.updateAccessories}
                >
                    Punk
                </Button>
                <Button 
                id='preppy'
                style={{ margin: '3em'}}
                theme="primary"
                onClick={this.updateAccessories}                
                >
                    Preppy
                </Button>
                <Button 
                id='comfy'
                style={{ margin: '3em'}}
                theme="primary"
                onClick={this.updateTAccessories}
                >
                    Comfy
                </Button>
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
