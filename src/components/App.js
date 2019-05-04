import React from 'react'
import UserCreate from './UserCreate'

class App extends React.Component {
    state = {
        language: "english"
    }
    handleLanguageSelect = language =>{
        this.setState({ language })
    }
    render(){
        return (
            <div className="ui container">
                <div>
                    Select a Language
                    <i className="flag us" onClick={ () => this.handleLanguageSelect('english')} />
                    <i className="flag nl" onClick={ () => this.handleLanguageSelect('dutch')} />
                </div>
                <UserCreate/>
            </div>
        )
    }
}

export default App