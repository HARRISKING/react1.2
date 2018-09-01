import React, { Component } from 'react'
import Boling from './Boling'
import TemperatureInput from './TemInput'
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
                <TemperatureInput scale="c" />
                <TemperatureInput scale="f" />
            </div>
        )
    }


}

export default Calculater