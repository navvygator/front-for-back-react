import React, { Component } from 'react'
import Btn from 'components/Btn'
import Input from 'components/Input'

export default class GuessingGame extends Component {
    MaxTryInRound = 7
    state = {
        "rightValue": Math.round(Math.random() * 100),
        "checkValue": 0,
        "message": "Please input number",
        "round": 0,
        "try": 0,
        "wins": 0,
        "btnTitle": "Check"
    }

    updateCheckValue = (value) => {
        this.setState({checkValue: value})
    }

    checkValueFunc = () => {
        if (this.state.rightValue == this.state.checkValue) {
            console.log('a')
            this.setState({
                "rightValue": Math.round(Math.random() * 100),
                "try": 0,
                "round": this.state.round + 1,
                "wins": this.state.wins +1,
                "message": "Right! New round!"
            })
            return
        }

        if(this.state.try >= this.MaxTryInRound){
            this.setState({
                "try": 0,
                "round": this.state.round + 1,
                "message": "Next round"
            })
            return
        }

        if (this.state.rightValue > this.state.checkValue) {
            this.setState({
                "try": this.state.try + 1,
                "message": "right value is greater",
            })
        }

        if (this.state.rightValue < this.state.checkValue) {
            this.setState({
                "try": this.state.try + 1,
                "message": "right value is less",
            })
        }
    }




    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <div>Round {this.state.round}</div>
                <div>Try {this.MaxTryInRound - this.state.try}</div>
                <div>
                    <Input value={this.state.checkValue} updateCheckValue={this.updateCheckValue}/>
                </div>
                <div>
                    <Btn disabled={this.round > 3} title={this.state.btnTitle} checkValueFunc={this.checkValueFunc}/>
                </div>
            </div>
        )
    }
}
