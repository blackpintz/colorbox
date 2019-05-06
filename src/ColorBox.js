import React, {Component} from 'react'
import {picker} from './helper'
import './ColorBox.css'

class ColorBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pickedColor : ''
        }
    }

    handleClick = () => {
        this.setState (() => {
            return {
                pickedColor: picker(this.props.colorShades)
            }
        })
    }

    render () {
        return (
            <div className = "ColorBox" style = {this.state.pickedColor?{backgroundColor:this.state.pickedColor} : {backgroundColor:this.props.col}} 
            onClick = {this.handleClick} >

            </div>
        )
    }
}

export default ColorBox