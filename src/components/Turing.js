import React from "react";

class Turing extends React.Component {
  render() {
    return (
      <div className="turingContainer">
        <h2>So is it turing complete?</h2>
        <p>
          It is possible to build a pattern that acts like a finite-state
          machine connected to two counter configurations. This has the same
          computational power as a universal Turing machine, so the Game of Life
          is theoretically as powerful as any computer with unlimited memory and
          no time constraints; it is Turing complete.
        </p>
      </div>
    );
  }
}

export default Turing;
