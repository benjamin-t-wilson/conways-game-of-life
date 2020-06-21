/* eslint-disable no-useless-constructor */
import React from "react";

class Controls extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="controlsContainer">
        <div className="controlsInputs">
          <div>
            <label htmlFor="rows">Rows (max 50):</label>
            <input
              name="rows"
              className="input"
              type="text"
              value={this.props.size[1]}
              onChange={this.props.handleRowChange}
            />
          </div>
          <div>
            <label htmlFor="columns">Columns (max 50):</label>
            <input
              name="columns"
              className="input"
              type="text"
              value={this.props.size[0]}
              onChange={this.props.handleColumnChange}
            />
          </div>
          <div>
            <label htmlFor="speed">Speed (in ms):</label>
            <input
              name="speed"
              className="input"
              type="text"
              value={this.props.speed}
              onChange={(e) => {
                this.props.handleSpeed(e);
              }}
            />
          </div>
        </div>
        <div className="controlsButtons">
          {!this.props.gameRunning ? (
            <button onClick={this.props.startGame}>Start</button>
          ) : (
            ""
          )}
          {this.props.gameRunning ? (
            <button onClick={this.props.stopGame}>Stop</button>
          ) : (
            ""
          )}
          <button onClick={this.props.resetGame}>Reset</button>
          <button
            onClick={() => {
              this.props.stepForward();
            }}
          >
            Next Generation
          </button>
        </div>
      </div>
    );
  }
}

export default Controls;
