import React, { Component } from "react";
import Universe from "./components/Universe.js";
import Nav from "./components/Nav.js";
import Controls from "./components/Controls.js";
import Board from "./components/Board.js";
import Rules from "./components/Rules.js";
import Automata from "./components/Automata";
import Configurations from "./components/Configurations.js";
import Turing from "./components/Turing.js";
import Contact from "./components/Contact.js";

import "./App.scss";

const before = "Click cells to activate them, then click start game";
const during = "Watch as the cells reproduce or die off";
const after = "Oh no, they all died! You can click 'reset' and try again!";
const speed = "One second while we change speed...";

const rgbColorGenerator = () => {
  const rn1 = Math.floor(Math.random() * Math.floor(255));
  const rn2 = Math.floor(Math.random() * Math.floor(255));
  const rn3 = Math.floor(Math.random() * Math.floor(255));

  return {
    background: `rgb(${rn1}, ${rn2}, ${rn3})`,
  };
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      universe: new Universe(),
      size: [15, 15],
      gameRunning: false,
      msg: before,
      speed: 1000,
      random: false,
    };

    this.handleColumnChange = this.handleColumnChange.bind(this);
    this.handleRowChange = this.handleRowChange.bind(this);
    this.startGame = this.startGame.bind(this);
    this.stopGame = this.stopGame.bind(this);
    this.renderBoard = this.renderBoard.bind(this);
    this.storeCell = this.storeCell.bind(this);
    this.resetGame = this.resetGame.bind(this);
    this.handleSpeed = this.handleSpeed.bind(this);
    this.stepForward = this.stepForward.bind(this);
    this.toggleRandom = this.toggleRandom.bind(this);
  }

  toggleRandom() {
    this.setState({
      random: !this.state.random,
    });
  }

  runGame() {
    if (this.state.random) {
      const randomNum = Math.floor(Math.random() * 25);
      if (randomNum === 0) {
        this.setState({
          universe: this.state.universe.addGenerationExtremeDeath(),
        });
      } else if (randomNum === 24) {
        this.setState({
          universe: this.state.universe.addGenerationExtremeLife(),
        });
      } else {
        this.setState({
          universe: this.state.universe.addGeneration(),
        });
      }
    } else {
      this.setState({
        universe: this.state.universe.addGeneration(),
      });
    }
  }

  stepForward() {
    if (this.state.msg !== during) {
      this.setState({
        msg: during,
      });
    }
    this.stopGame();
    this.runGame();
  }

  handleRowChange(e) {
    if (!this.state.gameRunning) {
      let actualSize = this.state.size;

      if (e.target.value < 50) {
        actualSize[1] = e.target.value;
      } else {
        actualSize[1] = 50;
      }

      this.setState({
        size: actualSize,
      });

      this.renderBoard();
    }
  }

  handleColumnChange(e) {
    if (!this.state.gameRunning) {
      let actualSize = this.state.size;

      if (e.target.value < 50) {
        actualSize[0] = e.target.value;
      } else {
        actualSize[0] = 50;
      }

      this.setState({
        size: actualSize,
      });

      this.renderBoard();
    }
  }

  handleSpeed(e) {
    this.setState({ speed: e.target.value });
    if (this.state.gameRunning) {
      this.stopGame();
      this.setState({ msg: speed });
      setTimeout(() => {
        this.startGame();
      }, 100);
    }
  }

  startGame() {
    if (!this.state.gameRunning) {
      this.setState(
        {
          gameRunning: true,
          msg: during,
        },
        () => {
          this.intervalRef = setInterval(
            () => this.runGame(),
            this.state.speed
          );
        }
      );
    }
  }

  stopGame() {
    this.setState(
      {
        gameRunning: false,
        msg: before,
      },
      () => {
        if (this.intervalRef) {
          clearInterval(this.intervalRef);
        }
      }
    );
  }

  resetGame() {
    this.stopGame();
    this.setState({
      universe: new Universe(),
      gameRunning: false,
      msg: before,
    });
  }

  componentDidUpdate() {
    if (
      this.state.universe.getLiveCells().size === 0 &&
      this.state.gameRunning === true
    ) {
      this.setState(
        {
          gameRunning: false,
          msg: after,
        },
        () => {
          if (this.intervalRef) {
            clearInterval(this.intervalRef);
          }
        }
      );
    }
  }

  storeCell(position) {
    if (!this.state.gameRunning) {
      this.setState({
        universe: this.state.universe.storeCell(position),
      });
    }
  }

  renderBoard() {
    let newWorld = [];
    let cellRow = [];

    for (let i = 0; i < this.state.size[0]; i++) {
      for (let j = 0; j < this.state.size[1]; j++) {
        if (this.state.universe.isCellAlive(i + " , " + j)) {
          cellRow.push(
            <Cell
              key={[i, j]}
              position={{ x: i, y: j }}
              live={true}
              storeCell={this.storeCell.bind(this)}
            />
          );
        } else {
          cellRow.push(
            <Cell
              key={[i, j]}
              position={{ x: i, y: j }}
              live={false}
              storeCell={this.storeCell.bind(this)}
            />
          );
        }
      }
      newWorld.push(
        <div className="row" key={i}>
          {cellRow}
        </div>
      );
      cellRow = [];
    }

    return newWorld;
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <h1>Conway's Game Of Life</h1>
        <Controls
          size={this.state.size}
          handleRowChange={this.handleRowChange}
          handleColumnChange={this.handleColumnChange}
          handleSpeed={(e) => {
            this.handleSpeed(e);
          }}
          speed={this.state.speed}
          gameRunning={this.state.gameRunning}
          startGame={this.startGame}
          stopGame={this.stopGame}
          resetGame={this.resetGame}
          stepForward={this.stepForward}
          random={this.state.random}
          toggleRandom={this.toggleRandom}
        />
        <Board
          msg={this.state.msg}
          universe={this.state.universe}
          renderBoard={this.renderBoard()}
        />
        <Rules />
        <Configurations />
        <Automata />
        <Turing />
        <Contact />
      </div>
    );
  }
}

class Cell extends Component {
  render() {
    return (
      <div
        onClick={() => this.props.storeCell(this.props.position)}
        className={this.props.live ? "cellContainerLive" : "cellContainerDead"}
        style={this.props.live ? rgbColorGenerator() : null}
      />
    );
  }
}
