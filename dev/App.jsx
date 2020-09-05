import React from "react";
import ReactDOM from "react-dom";
import { JsonToExcel, useJsonToExcel } from "../src";
import data from "./data";

const App = () => {
  const { saveAsExcel } = useJsonToExcel();

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
    text = "Convert Json to Excel";

  const saveExcel = () => {
    saveAsExcel({
      data,
      fields,
      filename
    });
  };

  return (
    <div>
      <JsonToExcel
        data={data}
        filename={filename}
        fields={fields}
        style={style}
        text={text}
      />
      <button onClick={saveExcel}>
        useJsonToExcel
      </button>
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById("app")
);
