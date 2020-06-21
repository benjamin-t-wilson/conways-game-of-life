import React from "react";

class Automata extends React.Component {
  render() {
    return (
      <div className="automataContainer">
        <h2>What is Cellular Automata?</h2>
        <p>
          Cellular automata (henceforth: CA) are discrete, abstract
          computational systems that have proved useful both as general models
          of complexity and as more specific representations of non-linear
          dynamics in a variety of scientific fields. Firstly, CA are
          (typically) spatially and temporally discrete: they are composed of a
          finite or denumerable set of homogenous, simple units, the atoms or
          cells. At each time unit, the cells instantiate one of a finite set of
          states. They evolve in parallel at discrete time steps, following
          state update functions or dynamical transition rules: the update of a
          cell state obtains by taking into account the states of cells in its
          local neighborhood (there are, therefore, no actions at a distance).
          Secondly, CA are abstract: they can be specified in purely
          mathematical terms and physical structures can implement them.
          Thirdly, CA are computational systems: they can compute functions and
          solve algorithmic problems. Despite functioning in a different way
          from traditional, Turing machine-like devices, CA with suitable rules
          can emulate a universal Turing machine, and therefore compute, given
          Turing’s thesis, anything computable.
        </p>
      </div>
    );
  }
}

export default Automata;
