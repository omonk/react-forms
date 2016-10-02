import React from 'react';
import Formsy from 'formsy-react';
import FormLabel from './FormLabel.js';

const Input = React.createClass({
    mixins: [Formsy.Mixin],

    getInitialState() {
        return {
            inputValue: ''
        }
    },

    changeValue(event) {
        this.setValue(event.currentTarget.value);
    },

    handleChange(event) {
        this.setState({
            inputValue: event.target.value
        });
        this.changeValue(event);
    },

    render() {
        const className = this.isValid() ? 'valid' : 'error';

        const errorMessage = this.getErrorMessage();

        return (
            <div className="pure-control-group">
                <FormLabel id={this.props.id} labelText={this.props.labelText}/>
                <input type={this.props.type} placeholder={this.props.labelText} className={`${className}`} id={this.props.id} onChange={this.handleChange} value={this.state.initVal}/>
                <span>{errorMessage}</span>
            </div>
        )
    }
});

export default Input;
