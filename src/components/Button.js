import React from 'react'
import LanguageContext from '../contexts/LanguageContext'
import ColorContext from '../contexts/ColorContext'
class Button extends React.Component {
    renderText(language) {
        return language === 'english' ? 'Submit' : 'Vorlooggen'
    }
    renderButton(color) {
        return (
            <button className={`ui button ${color}`}>
             <LanguageContext.Consumer>
                { ({language}) => this.renderText(language) }
             </LanguageContext.Consumer>
            </button>
        )
    }
    render() {
        return (
            <ColorContext.Consumer>
                {color => this.renderButton(color)}
            </ColorContext.Consumer>
        )
    }
}

export default Button