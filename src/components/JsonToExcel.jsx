import React, {Component} from "react";
import PropTypes from "prop-types";
import {saveAs} from "file-saver";

class JsonToExcel extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    filename: PropTypes.string,
    fields: PropTypes.object,
    separator: PropTypes.string
  };

  static defaultProps = {
    filename: "json-to-excel",
    separator: ","
  };

  constructor() {
    super();
    this.state = {
      data: [],
      fields: [],
      headers: [],
      separator: ""
    };
  }

  componentDidMount() {
    const {data, fields, filename, separator} = this.props;

    this.setState({
      data: data,
      fields: Object.keys(fields),
      filename: filename,
      headers: Object.keys(fields).map((key) => fields[key]),
      separator: separator
    });
  }

  convertToExcel = () => {
    const {headers, separator} = this.state,
      body = this.getBodyData(),
      header = headers.join(separator);

    return header + "\n" + body;
  }

  getBodyData = () => {
    const {data, fields, separator} = this.state;

    return data.map((row) => {
      return fields.map((field) => {
        if (row.hasOwnProperty(field)) {
          return row[field];
        }
        return null;
      }).join(separator);
    }).join("\n");
  }

  saveExcel = () => {
    const {filename} = this.state,
      data = this.convertToExcel(),
      blob = new Blob(
        [data],
        {
          type: "text/plain",
          charset: "utf-8"
        }
      );

    saveAs(blob, [filename + ".csv"]);
  }

  render() {
    return (
      <button onClick={this.saveExcel}>
        Convert Json to Excel
      </button>
    );
  }
}

export default JsonToExcel;
