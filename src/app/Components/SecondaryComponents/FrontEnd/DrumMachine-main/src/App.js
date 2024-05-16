import React from "react";
import "./styles.css";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editor: "Heater 1",
      preview: ""
    };
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    switch (event.code) {
      case "KeyQ":
        document.getElementById("Q").play();
        this.setState({ editor: "Heater 1" });
        break;
      case "KeyW":
        document.getElementById("W").play();
        this.setState({ editor: "Heater 2" });
        break;
      case "KeyE":
        document.getElementById("E").play();
        this.setState({ editor: "Heater 3" });
        break;
      case "KeyA":
        document.getElementById("A").play();
        this.setState({ editor: "Heater 4" });
        break;
      case "KeyS":
        document.getElementById("S").play();
        this.setState({ editor: "Clap" });
        break;
      case "KeyD":
        document.getElementById("D").play();
        this.setState({ editor: "Open-HH" });
        break;
      case "KeyZ":
        document.getElementById("Z").play();
        this.setState({ editor: "Kick-'n-Hat" });
        break;
      case "KeyX":
        document.getElementById("X").play();
        this.setState({ editor: "Kick" });
        break;
      case "KeyC":
        document.getElementById("C").play();
        this.setState({ editor: "Closed-HH" });
        break;
      default:
        break;
    }
  };
  handleChange = () => {
    this.setState({
      preview: this.state.editor
    });
  };

  render() {
    return (
      <div className="App" id="drum-machine">
        <p id="display">{this.state.editor}</p>

        <div
          onClick={() => {
            document.getElementById("Q").play();
            this.setState({ editor: "Heater 1" });
          }}
          className="drum-pad"
          id="Heater-1"
          tabindex="0"
        >
          <audio
            className="clip"
            id="Q"
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
          ></audio>
          Q
        </div>

        {/* button Q */}
        <div
          id="Heater-2"
          onClick={() => {
            document.getElementById("W").play();
            this.setState({ editor: "Heater 2" });
          }}
          className="drum-pad"
          tabindex="0"
        >
          <audio
            className="clip"
            id="W"
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
          ></audio>
          W
        </div>

        {/* button W */}
        <div
          id="Heater-3"
          onClick={() => {
            document.getElementById("E").play();
            this.setState({ editor: "Heater 3" });
          }}
          className="drum-pad"
          tabindex="0"
        >
          <audio
            className="clip"
            id="E"
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
          ></audio>
          E
        </div>

        {/* button E */}
        <div
          id="Heater-4_1"
          onClick={() => {
            document.getElementById("A").play();
            this.setState({ editor: "Heater 4" });
          }}
          className="drum-pad"
          tabindex="0"
        >
          <audio
            className="clip"
            id="A"
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
          ></audio>
          A
        </div>

        {/* button A */}
        <div
          id="Heater-6"
          onClick={() => {
            document.getElementById("S").play();
            this.setState({ editor: "Clap" });
          }}
          className="drum-pad"
          tabindex="0"
        >
          <audio
            className="clip"
            id="S"
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
          ></audio>
          S
        </div>

        {/* button S */}
        <div
          id="Dsc_Oh"
          onClick={() => {
            document.getElementById("D").play();
            this.setState({ editor: "Open-HH" });
          }}
          className="drum-pad"
          tabindex="0"
        >
          <audio
            className="clip"
            id="D"
            src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
          ></audio>
          D
        </div>

        {/* button D */}
        <div
          id="Kick_n_Hat"
          onClick={() => {
            document.getElementById("Z").play();
            this.setState({ editor: "Kick-'n'-Hat" });
          }}
          className="drum-pad"
          tabindex="0"
        >
          <audio
            className="clip"
            id="Z"
            src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
          ></audio>
          Z
        </div>

        {/* button Z */}
        <div
          id="RP4_KICK_1"
          onClick={() => {
            document.getElementById("X").play();
            this.setState({ editor: "Kick" });
          }}
          className="drum-pad"
          tabindex="0"
        >
          <audio
            className="clip"
            id="X"
            src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
          ></audio>
          X
        </div>

        {/* button X */}
        <div
          id="Cev_H2"
          onClick={() => {
            document.getElementById("C").play();
            this.setState({ editor: "Closed-HH" });
          }}
          className="drum-pad"
          tabindex="0"
        >
          <audio
            className="clip"
            id="C"
            src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
          ></audio>
          C
        </div>

        {/* button C */}
      </div>
    );
  }
}
