import React, {Component} from "react";
import ReactDOM from "react-dom";
import {JsonToExcel} from "../src";
import data from "./data";

class App extends Component {
  render() {
    const className = "my-convertor",
      filename = "New file",
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
      style = {
        padding: "5px"
      },
      text = "Convert Json to Excel";

    return (
      <div>
        <JsonToExcel
          data={data}
          className={className}
          filename={filename}
          fields={fields}
          style={style}
          text={text}
        />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("app")
);
