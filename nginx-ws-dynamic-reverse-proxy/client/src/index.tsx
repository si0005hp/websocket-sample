import * as React from "react";
import * as ReactDOM from "react-dom";
import VncDisplay from "react-vnc-display"

const Vnc: React.FC = () => {
  return (
    <div className="Vnc">
      <h1>VNC</h1>
      <div style={{ display: 'flex' }}>
        <VncDisplay url="wss://lb/ws/selenium1" />
        <VncDisplay url="wss://lb/ws/selenium2" />
      </div>
    </div>
  )
}

const App: React.FC = () => {
  return <Vnc />
}

ReactDOM.render(<App />, document.getElementById("root"));
