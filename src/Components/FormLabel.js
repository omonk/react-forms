import React from 'react';


const FormLabel = React.createClass({

    render() {
        return (
            <label htmlFor={this.props.id}>{this.props.labelText}</label>
        )
    }
});

export default FormLabel;
