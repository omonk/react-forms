import React from 'react';
import Formsy from 'formsy-react';
import Input from './Input.js';
import Checkbox from './Checkbox.js';

const Form = React.createClass ({

    getInitialState() {
        return {
            canSubmit: true,
            messages: '',
            buttonClasses: 'pure-button',
        }
    },

    enableButton() {
        this.setState({
            canSubmit: true
        });
    },

    disableButton() {
        this.setState({
            canSubmit: false
        });
    },

    showMessages(message) {
        this.setState({
            messages: message
        });
    },

    invalidSubmit() {
        this.setState({
            buttonClasses: 'button-error pure-button'
        })
        this.showMessages('error')
    },

    validState() {
        this.showMessages('valid');
        this.enableButton()
    },
    submit(model) {
        console.log(model);
    },

    render() {
        return (
            <Formsy.Form className="pure-u-1 pure-form pure-form-aligned" onValidSubmit={this.submit} formNoValidate onInvalidSubmit={this.invalidSubmit} onValid={this.validState}>
                <fieldset>
                    <Input
                        name="firstName"
                        type="text"
                        id="firstName"
                        labelText="First Name"
                        validations="isExisty"
                        validationError="This is required" required></Input>
                    <Input
                        name="lastName"
                        type="text"
                        id="lastName"
                        labelText="Last Name"
                        validations="isExisty"
                        validationError="This is required" required></Input>
                    <Checkbox
                        name="contactMethod[0]"
                        id="contactMethod-0"
                        labelText="Contact by email?"></Checkbox>
                    <Input
                        name="email"
                        type="email"
                        id="email"
                        labelText="Email goes here"
                        validations="isEmail"
                        validationError="This is not an email" required></Input>
                    <span>{this.state.messages}</span>
                    <button className={this.state.buttonClasses} disabled={!this.state.canSubmit}>Submit</button>
                </fieldset>
            </Formsy.Form>
        )
    }
});

export default Form;
