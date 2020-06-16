import React, { Component } from 'react';
import { Link, withPrefix } from 'gatsby';

class ColorStyles extends Component {
    constructor () {
        super();
        this.state = {selectedSkinColor: 'pink'}
        }
    render(){
        return (
            <link 
                rel="stylesheet" 
                className="alternate-style" 
                title={this.state.selectedSkinColor} 
                href={withPrefix(`styles/${this.state.selectedSkinColor}`)} 
                type="text/css" 
            />
    )}

}

export default ColorStyles;