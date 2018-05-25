import React, { Component } from 'react';
import './Cell.css'

class Cell extends Component {
    
    render() { 
        const { x, y } = this.props;
        return ( 
            <div className="Cell" style={{
                left: `${this.props.size * x + 1}px`,
                top: `${this.props.size * y + 1}px`,
                width: `${this.props.size - 1}px`,
                height: `${this.props.size - 1}px`,
              }} />
         )
    }
}
 
export default Cell;

