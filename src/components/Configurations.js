import React from "react";
import beehive from "../assets/static/beehive.svg";
import block from "../assets/static/block.svg";
import boat from "../assets/static/boat.svg";
import flower from "../assets/static/flower.svg";
import loaf from "../assets/static/loaf.svg";
import beacon from "../assets/oscillator/beacon.gif";
import blinker from "../assets/oscillator/blinker.gif";
import icolumn from "../assets/oscillator/icolumn.gif";
import pulsar from "../assets/oscillator/pulsar.gif";
import toad from "../assets/oscillator/toad.gif";
import glider from "../assets/spaceship/glider.gif";
import hwss from "../assets/spaceship/hwss.gif";
import mwss from "../assets/spaceship/mwss.gif";
import lwss from "../assets/spaceship/lwss.gif";

class Configurations extends React.Component {
  render() {
    return (
      <div className="configContainer">
        <div className="configTextContent">
          <h2>Basic Configurations:</h2>
          <p>
            Basic configurations are broken down into the three following
            categories: static, oscillators, and spaceships.
          </p>
          <ul>
            <li>
              Static: Exactly what they sound like. These shapes do not move.
            </li>
            <li>
              Oscillators: These shapes will "dance" but not necessarily move.
              They have a specific pattern that they will follow from a
              stationary position.
            </li>
            <li>
              Spaceships: Also what they sound like. These are the only shapes
              capable of travel.
            </li>
          </ul>
        </div>
        <div className="configTypeContainer">
          <div className="configType">
            <h4>
              Static<span> --</span>
            </h4>
            <div className="configItemsList">
              <div className="configItem">
                <p>Beehive</p>
                <img src={beehive} alt="beehive" />
              </div>
              <div className="configItem">
                <p>Block</p>
                <img src={block} alt="block" />
              </div>
              <div className="configItem">
                <p>Boat</p>
                <img src={boat} alt="boat" />
              </div>
              <div className="configItem">
                <p>Flower</p>
                <img src={flower} alt="flower" />
              </div>
              <div className="configItem">
                <p>Loaf</p>
                <img src={loaf} alt="loaf" />
              </div>
            </div>
          </div>
          <div className="configType">
            <h4>
              Oscillators<span> --</span>
            </h4>
            <div className="configItemsList">
              <div className="configItem">
                <p>Beacon</p>
                <img src={beacon} alt="beacon" />
              </div>
              <div className="configItem">
                <p>Blinker</p>
                <img src={blinker} alt="blinker" />
              </div>
              <div className="configItem">
                <p>I-Column</p>
                <img src={icolumn} alt="icolumn" />
              </div>
              <div className="configItem">
                <p>Pulsar</p>
                <img src={pulsar} alt="pulsar" />
              </div>
              <div className="configItem">
                <p>Toad</p>
                <img src={toad} alt="toad" />
              </div>
            </div>
          </div>
          <div className="configType">
            <h4>
              Spaceships<span> --</span>
            </h4>
            <div className="configItemsList">
              <div className="configItem">
                <p>Glider</p>
                <img src={glider} alt="glider" />
              </div>
              <div className="configItem">
                <p>Heavy-weight Spaceship</p>
                <img src={hwss} alt="hwss" />
              </div>
              <div className="configItem">
                <p>Middle-weight Spaceship</p>
                <img src={mwss} alt="mwss" />
              </div>
              <div className="configItem">
                <p>Light-weight Spaceship</p>
                <img src={lwss} alt="lwss" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Configurations;
