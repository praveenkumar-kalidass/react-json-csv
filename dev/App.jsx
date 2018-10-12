import React, {Component} from "react";
import ReactDOM from "react-dom";
import {JsonToExcel} from "../src";
import data from "./data";

class App extends Component {
  render() {
    const filename = "New file",
      fields = {
        "index": "Index",
        "guid": "GUID",
        "isActive": "Is Active?",
        "balance": "Balance",
        "picture": "Picture URL",
        "age": "Age",
        "eyeColor": "Eye color",
        "name": "Name",
        "gender": "Gender",
        "company": "Company",
        "email": "E-mail",
        "phone": "Phone number"
      },
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
