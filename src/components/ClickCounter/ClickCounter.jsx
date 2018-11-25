import React, { Component } from 'react'
import Btn from 'components/Btn'

export default class ClickCounter extends Component {
  state = {
      clicks: 0,
      maxValue: 20,
      step: 1,
  }

  handleClick = () => {
    if(this.state.clicks >= this.state.maxValue){
      return
    }
    this.setState({clicks: this.state.clicks + this.state.step});
  }

  handleReset = () => {
    this.setState({
        clicks: 0,
        maxValue: 20,
        step: 1,
    })
  }

  handleIncreaseStep = () => {
    this.setState({step: this.state.step + 1})
  }

  handleIncreaseMax = () => {
    this.setState({maxValue: this.state.maxValue + 1})
  }

  render() {
    return (
      <div class="row justify-center p-t bg-tertiary section">
        <div class="card standard-border card-narrow shadow">
          <div class="info">
            <div>Clicks</div>

            <div class="m-t">
              <span class="info-key">Max Value:</span>
              <span class="text-accent">{this.state.maxValue}</span>
            </div>

            <div class="m-t">
              <span class="info-key">clicks:</span>
              <span class="text-accent">{this.state.clicks}</span>
            </div>

            <div class="m-t">
              <span class="info-key">clicks left:</span>
              <span class="text-accent">{this.state.maxValue - this.state.clicks}</span>
            </div>

            <div class="m-t">
              <span class="info-key">step:</span>
              <span class="text-accent">{this.state.step}</span>
            </div>
          </div>

          <Btn onClick={this.handleClick} disabled={this.state.clicks >= this.state.maxValue} className="m-t d-block">Click</Btn>
          <Btn onClick={this.handleReset} className="m-t d-block">Reset</Btn>
          <Btn onClick={this.handleIncreaseStep} className="m-t d-block">Increase Step</Btn>
          <Btn onClick={this.handleIncreaseMax} className="m-t d-block">Increase Max</Btn>
        </div>
      </div>
    )
  }
}
