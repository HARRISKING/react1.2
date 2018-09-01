import React, { Component } from 'react'
import Boling from './Boling'
class Calculater extends Component {
    constructor(props) {
        super(props)
        this.state = {
            temperature:'请输入温度'
        }
    }

    temperatureOnchange(e){
        const state = this.state
        state.temperature = e.target.value
        this.setState(state)
    }
    render() {
        return (
            <div>
                <Boling celsius={parseFloat(this.state.temperature)} />
                <input type="text" value={this.state.celtemperaturesius} onChange={this.temperatureOnchange.bind(this)}/>
            </div>
        )
    }


}

export default Calculater