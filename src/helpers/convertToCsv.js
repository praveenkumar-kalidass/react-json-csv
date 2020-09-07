const getBodyData = ({ data, fields, separator }) => {
  return data.map((row) => {
    return fields.map((field) => {
      if (row.hasOwnProperty(field)) {
        return row[field];
      }
      return null;
    }).join(separator);
  }).join("\n");
};

export default ({ data, fields, headers, separator }) => {
  const body = getBodyData({ data, fields, separator }),
    header = headers.join(separator);

  return header + "\n" + body;
};
