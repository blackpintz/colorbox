import React, {Component} from 'react'
import ColorBox from './ColorBox'
import './Box.css'

class Box extends Component {
    static defaultProps = {}
    constructor(props) {
        super(props);
        this.state = {
            colorShades: ["#FF5733", "#FFBD33", "#DBFF33", "#75FF33", "#33FF57", "#33FFBD", "#f743b5","#5a2a5d", "#f11db7", "#24c48b",
        "#9c9929", "#e65861"],
            pickedColor: "#52e232"
        }
    }
    
    render() {
        return (
            <div className = "Box">
            {this.state.colorShades.map((col) => {
                return <ColorBox col = {col} colorShades = {this.state.colorShades}/>
            })}
            </div>
        )
    }
}

export default Box