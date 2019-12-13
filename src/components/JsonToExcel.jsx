import React, {Component} from "react";
import PropTypes from "prop-types";
import {saveAs} from "file-saver";

class JsonToExcel extends Component {
  static propTypes = {
    className: PropTypes.string,
    data: PropTypes.array.isRequired,
    fileformat: PropTypes.string,
    filename: PropTypes.string,
    fields: PropTypes.object,
    separator: PropTypes.string,
    style: PropTypes.object
  };

  static defaultProps = {
    className: "json-to-excel",
    fileformat: "csv",
    filename: "json-to-excel",
    separator: ",",
    style: {}
  };

  constructor() {
    super();
    this.state = {
      data: [],
      fields: [],
      headers: []
    };
  }

  componentDidMount() {
    const {data, fields} = this.props;

    this.setState({
      data: data,
      fields: Object.keys(fields),
      headers: Object.keys(fields).map((key) => fields[key])
    });
  }

  convertToExcel = () => {
    const {headers} = this.state,
      {separator} = this.props,
      body = this.getBodyData(),
      header = headers.join(separator);

    return header + "\n" + body;
  }

  getBodyData = () => {
    const {data, fields} = this.state,
      {separator} = this.props;

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
    const {fileformat, filename} = this.props,
      data = this.convertToExcel(),
      blob = new Blob(
        [data],
        {
          type: "text/plain",
          charset: "utf-8"
        }
      );

    saveAs(blob, [filename + "." + fileformat]);
  }

  render() {
    const {className, style, text} = this.props;

    return (
      <button
        className={className}
        onClick={this.saveExcel}
        style={style}
      >
        {text}
      </button>
    );
  }
}

export default JsonToExcel;
