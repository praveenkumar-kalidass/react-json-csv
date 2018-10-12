import React, {Component} from "react";
import ReactDOM from "react-dom";
import {JsonToExcel} from "../src";

class App extends Component {
  render() {
    const data = [{field: "My field data"}],
      filename = "New file",
      fields = {field: "Field"},
      separator = ";";

    return (
      <div>
        <JsonToExcel
          data={data}
          filename={filename}
          fields={fields}
          seperator={separator}
          />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("app")
);
