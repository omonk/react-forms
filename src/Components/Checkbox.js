import React from 'react';

const Checkbox = React.createClass({

    render() {

        return (
            <div className="pure-controls">
                <label htmlFor={this.props.id} className="pure-checkbox">
                    <input id={this.props.id} type="checkbox" />
                    {this.props.labelText}
                </label>
            </div>
        )
    }
});

export default Checkbox;
