import React from "react";
import "./styles.css";
import { ReactComponent as PauseIcon } from "./icons/pause-play.svg";
import { ReactComponent as ReplayIcon } from "./icons/replay.svg";
import { ReactComponent as UpIcon } from "./icons/up-arrow.svg";
import { ReactComponent as DownIcon } from "./icons/down-arrow.svg";

// React App
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionLength: "25:00",
      breakLength: "05:00",
      breakOrSession: 0,
      // 0 session, 1 break
      display: "Session",
      displayBorS: "25:00",
      playPause: 0,
      // 0 for paused
      firstTime: 1,
    };
  }
  // timer function
  interval = null;
  countdown = (minutes) => {
    let seconds = minutes * 60;
    this.interval = setInterval(() => {
      seconds--;
      if (seconds < 0 && this.state.breakOrSession === 0) {
        // check if it's a session
        clearInterval(this.interval);
        document.getElementById("beep").play();
        // play alarm when at 0
        this.setState({
          breakOrSession: 1,
          display: "Break",
          displayBorS: this.state.sessionLength,
        });
        // change type from session to break
        this.countdown(parseInt(this.state.displayBorS.split(":"[0])));
      } else if (seconds < 0 && this.state.breakOrSession === 1) {
        // // check if it's a break
        clearInterval(this.interval);
        document.getElementById("beep").play();
        // play alarm at 0
        this.setState({
          breakOrSession: 0,
          display: "Session",
          displayBorS: this.state.breakLength,
        });
        // change type from break to session
        this.countdown(parseInt(this.state.displayBorS.split(":"[0])));
      } else {
        this.setState({
          displayBorS: `${Math.floor(seconds / 60)}:${seconds % 60}`,
        });
      }
    }, 1000);
  };

  handleClick = (e) => {
    switch (e.currentTarget.id) {
      case "reset":
        if (this.state.playPause === 1) {
          clearInterval(this.timer);
        }
        this.setState({
          sessionLength: "25:00",
          breakLength: "05:00",
          display: "Session",
          breakOrSession: 0,
        });
        if (this.state.playPause === 0) {
          this.setState({
            displayBorS: "25:00",
          });
        }
        document.getElementById("beep").pause();
        document.getElementById("beep").currentTime = 0;
        if (this.state.playPause === 1) {
          clearInterval(this.timer);
        }
        this.setState({
          sessionLength: "25:00",
          breakLength: "05:00",
          display: "Session",
          displayBorS: "25:00",
          playPause: 0,
          breakOrSession: 0,
          firstTime: 1,
        });
        document.getElementById("beep").pause();
        document.getElementById("beep").currentTime = 0;
        break;
      // resets timer to 25:00

      case "start_stop":
        if (this.state.firstTime === 1) {
          this.setState({
            displayBorS: this.state.sessionLength,
            firstTime: 0,
          });
        }

        if (this.state.playPause === 0) {
          this.setState({
            playPause: 1,
          });
          this.timer = setInterval(() => {
            let minutes = parseInt(this.state.displayBorS.split(":")[0]);
            let seconds = parseInt(this.state.displayBorS.split(":")[1]);
            if (minutes === 0 && seconds === 0) {
              document.getElementById("beep").play();
              this.setState({
                breakOrSession: this.state.breakOrSession === 0 ? 1 : 0,
              });
              this.setState({
                displayBorS:
                  this.state.breakOrSession === 0
                    ? this.state.sessionLength
                    : this.state.breakLength,
              });
              this.setState({
                display: this.state.breakOrSession === 0 ? "Session" : "Break",
              });
            } else {
              seconds--;
              if (seconds < 0) {
                seconds = 59;
                minutes--;
              }
              this.setState({
                displayBorS: `${minutes.toString().padStart(2, "0")}:${seconds
                  .toString()
                  .padStart(2, "0")}`,
              });
            }
          }, 1000);
        } else {
          this.setState({
            playPause: 0,
          });
          clearInterval(this.timer);
        }
        break;

      case "session-increment":
        if (this.state.sessionLength.split(":")[0] < 60) {
          // checks if session is under an hour
          this.setState({
            sessionLength: `${(
              parseInt(this.state.sessionLength.split(":")[0]) + 1
            )
              .toString()
              .padStart(2, "0")}:00`,
            displayBorS: `${(parseInt(this.state.displayBorS.split(":")[0]) + 1)
              .toString()
              .padStart(2, "0")}:00`,
          });
        } else break;
        break;
      // first it converts "xx:00" into the number xx, adds 1, then reconverts it to string to be displayed with :00
      case "session-decrement":
        if (this.state.sessionLength.split(":")[0] > 1) {
          this.setState({
            sessionLength: `${(
              parseInt(this.state.sessionLength.split(":")[0]) - 1
            )
              .toString()
              .padStart(2, "0")}:00`,
            displayBorS: `${(parseInt(this.state.displayBorS.split(":")[0]) - 1)
              .toString()
              .padStart(2, "0")}:00`,
          });
        } else break;
        break;

      case "break-increment":
        if (this.state.breakLength.split(":")[0] < 60) {
          this.setState({
            breakLength: `${(parseInt(this.state.breakLength.split(":")[0]) + 1)
              .toString()
              .padStart(2, "0")}:00`,
          });
        } else break;
        break;
      // first it converts "xx:00" into the number xx, adds 1, then reconverts it to string to be displayed with :00
      case "break-decrement":
        if (this.state.breakLength.split(":")[0] > 1) {
          this.setState({
            breakLength: `${(parseInt(this.state.breakLength.split(":")[0]) - 1)
              .toString()
              .padStart(2, "0")}:00`,
          });
        } else break;
        break;
      // first it converts "xx:00" into the number xx, adds 1, then reconverts it to string to be displayed with :00

      default:
        break;
    }
  };

  render() {
    return (
      <div className="app-wrapper">
        <h1 className="title">25 + 5 Clock</h1>
        <div className="break-container">
          {/* break section */}
          <div id="break-label">Break Length</div>
          <div className="break-buttons">
            <div id="break-increment" onClick={this.handleClick.bind(this)}>
              <UpIcon className="buttons" />
            </div>
            <div id="break-length">
              {parseInt(this.state.breakLength.split(":")[0])}
            </div>
            <div id="break-decrement" onClick={this.handleClick.bind(this)}>
              <DownIcon className="buttons" />
            </div>
          </div>
        </div>
        {/* session section */}
        <div className="session-container">
          <div id="session-label">Session Length</div>
          <div id="session-increment" onClick={this.handleClick.bind(this)}>
            <UpIcon className="buttons" />
          </div>
          <div id="session-decrement" onClick={this.handleClick.bind(this)}>
            <div id="session-length">
              {parseInt(this.state.sessionLength.split(":")[0])}
            </div>
            <DownIcon className="buttons" />
          </div>
        </div>
        {/* overall section */}
        <div className="timer-container">
          <div id="timer-label">{this.state.display}</div>
          <div id="time-left">
            {this.state.displayBorS
              .split(":")
              .map((x) => x.padStart(2, "0"))
              .join(":")}
          </div>
          <div className="timer-buttons">
            <div
              id="start_stop"
              className="start_stop"
              onClick={this.handleClick.bind(this)}
            >
              <PauseIcon className="buttons" />
            </div>
            <div
              id="reset"
              className="reset"
              onClick={this.handleClick.bind(this)}
            >
              <ReplayIcon className="buttons" />
            </div>
          </div>
        </div>        
      </div>
    );
  }
}
export default App;
