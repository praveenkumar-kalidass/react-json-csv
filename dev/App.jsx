import React from "react";
import ReactDOM from "react-dom";
import { JsonToCsv, useJsonToCsv } from "../src";
import data from "./data";

const App = () => {
  const { saveAsCsv } = useJsonToCsv();

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
    style = {
      padding: "5px"
    },
    text = "Convert Json to Csv";

  const saveCsv = () => {
    saveAsCsv({
      data,
      fields,
      filename
    });
  };

  return (
    <div>
      <JsonToCsv
        data={data}
        filename={filename}
        fields={fields}
        style={style}
        text={text}
      />
      <button onClick={saveCsv}>
        useJsonToCsv
      </button>
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById("app")
);
