/* eslint-disable no-useless-constructor */
import React from "react";

class Board extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="boardContainer">
        <h2>{this.props.msg}</h2>
        <h3>Generation: {this.props.universe.getGeneration()}</h3>
        <div className="gridContainer">{this.props.renderBoard}</div>
      </div>
    );
  }
}

export default Board;
