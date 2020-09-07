import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { convertToCsv, saveCsv } from "../helpers";

const JsonToCsv = (props) => {
  const [data, setData] = useState([]);
  const [fields, setFields] = useState([]);
  const [headers, setHeaders] = useState([]);

  useEffect(() => {
    setData(props.data);
    setFields(Object.keys(props.fields));
    setHeaders(Object.keys(props.fields).map((key) => props.fields[key]));
  }, []);

  const saveAsCsv = () => {
    const { fileformat, filename, separator } = props;

    saveCsv({
      data: convertToCsv({ data, fields, headers, separator }),
      fileformat,
      filename,
    });
  };

  return (
    <button
      onClick={saveAsCsv}
      style={props.style}
      data-testid="json-to-csv"
    >
      {props.text}
    </button>
  );
};

JsonToCsv.propTypes = {
  data: PropTypes.array.isRequired,
  fileformat: PropTypes.string,
  filename: PropTypes.string,
  fields: PropTypes.object,
  separator: PropTypes.string,
  style: PropTypes.object,
  text: PropTypes.string
};

JsonToCsv.defaultProps = {
  fileformat: "csv",
  filename: "json-to-csv",
  separator: ",",
  style: {},
  text: "Convert Json to Csv"
};

export default JsonToCsv;
