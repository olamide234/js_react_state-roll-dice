// changing state when the value is string/ number/ boolean is 
// much easily to changing the value when it's object
// Mutating nested data structures in my state can cause problems with React
// Instead a copy of the data structure in question can be made 
// then, update the copy and reset the whole thing in the state

import React, { Component } from 'react'

export default class IconList extends Component {
    static defaultProps = {
        options: [
            "angry",
            "anchor",
            "archive",
            "at",
            "archway",
            "baby",
            "bell",
            "bolt",
            "bone",
            "car",
            "city",
            "cloud",
            "couch",
        ]
    };
    constructor(props) {
        super(props);
        this.state = {icons: []};
        this.addIcon = this.addIcon.bind(this);
    }
    addIcon() {
        let idx = Math.floor(Math.random() * this.props.options.length);
        let newIcon = this.props.options[idx];
        // let updated_icons = this.state.icons;
        // updated_icons.push(newIcon);
        // this.setState({icons: updated_icons});           XXX error
        
        this.setState({icons: [...this.state.icons, newIcon]});  //correct
    }
    render() {
        const icons = this.state.icons.map(i => <i className={`fa-solid fa-${i}`}></i>);
        return (
            <div>
                <h1>Icons: {icons}</h1>
                <button onClick={this.addIcon}>Add New Icons</button>
            </div>
        )
    }
}
