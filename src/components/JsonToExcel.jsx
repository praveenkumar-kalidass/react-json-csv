import React, {Component} from "react";
import PropTypes from "prop-types";

class JsonToExcel extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    filename: PropTypes.string,
    fields: PropTypes.object,
    separator: PropTypes.string
  };

  static defaultProps = {
    filename: "json-to-excel",
    separator: ";"
  };

  constructor() {
    super();
    this.state = {
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

  render() {
    return (
      <button>Convert Json to Excel</button>
    );
  }
}

export default JsonToExcel;
