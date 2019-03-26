import React, { Component } from 'react';
import Form from './components/Form';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            items: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleClick(e) {
        e.preventDefault();
        if (this.state.text.length) {
            this.setState({
                items: this.state.items.concat(this.state.text),
                text: ''
                // callback function as 2nd argument inside setState
            }, () => document.getElementById('text-input').value = '');

        }
    }

    render() {
        return (
            <div>
                <Form
                    changed={this.handleChange}
                    clicked={this.handleClick}
                />
            </div>
        )
    }
}

export default App;

