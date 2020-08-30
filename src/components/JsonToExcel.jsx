import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { convertToExcel, saveExcel } from "../helpers";

const JsonToExcel = (props) => {
  const [data, setData] = useState([]);
  const [fields, setFields] = useState([]);
  const [headers, setHeaders] = useState([]);

  useEffect(() => {
    setData(props.data);
    setFields(Object.keys(props.fields));
    setHeaders(Object.keys(props.fields).map((key) => props.fields[key]));
  }, []);

  const saveAsExcel = () => {
    const { fileformat, filename, separator } = props;

    saveExcel({
      data: convertToExcel({ data, fields, headers, separator }),
      fileformat,
      filename,
    });
  };

  return (
    <button
      onClick={saveAsExcel}
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
