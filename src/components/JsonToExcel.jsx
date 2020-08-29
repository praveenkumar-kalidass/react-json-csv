import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {saveAs} from "file-saver";

const JsonToExcel = (props) => {
  const [data, setData] = useState([]);
  const [fields, setFields] = useState([]);
  const [headers, setHeaders] = useState([]);

  useEffect(() => {
    setData(props.data);
    setFields(Object.keys(props.fields));
    setHeaders(Object.keys(props.fields).map((key) => props.fields[key]));
  }, []);

  const getBodyData = () => {
    const { separator } = props;

    return data.map((row) => {
      return fields.map((field) => {
        if (row.hasOwnProperty(field)) {
          return row[field];
        }
        return null;
      }).join(separator);
    }).join("\n");
  };

  const convertToExcel = () => {
    const { separator } = props,
      body = getBodyData(),
      header = headers.join(separator);

    return header + "\n" + body;
  };

  const saveExcel = () => {
    const { fileformat, filename } = props,
      excelData = convertToExcel(),
      blob = new Blob(
        [ excelData ],
        {
          type: "text/plain",
          charset: "utf-8"
        }
      );

    saveAs(blob, [filename + "." + fileformat]);
  };

  return (
    <button
      onClick={saveExcel}
      style={props.style}
      data-testid="json-to-excel"
    >
      {props.text}
    </button>
  );
};

JsonToExcel.propTypes = {
  data: PropTypes.array.isRequired,
  fileformat: PropTypes.string,
  filename: PropTypes.string,
  fields: PropTypes.object,
  separator: PropTypes.string,
  style: PropTypes.object,
  text: PropTypes.string
};

JsonToExcel.defaultProps = {
  fileformat: "csv",
  filename: "json-to-excel",
  separator: ",",
  style: {},
  text: "Convert Json to Excel"
};

export default JsonToExcel;
