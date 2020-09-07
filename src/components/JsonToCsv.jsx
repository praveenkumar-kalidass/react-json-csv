import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { convertToCsv, saveCsv } from "../helpers";
import { DEFAULT_FILE_NAME, DEFAULT_FILE_FORMAT, CONVERT_LABEL, COMMA } from "../constants";

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
  fileformat: DEFAULT_FILE_FORMAT,
  filename: DEFAULT_FILE_NAME,
  separator: COMMA,
  style: {},
  text: CONVERT_LABEL
};

export default JsonToCsv;
