import { convertToCsv, saveCsv } from "../helpers";

const useJsonToCsv = () => {
  const saveAsCsv = ({
    data,
    fields,
    fileformat = "csv",
    filename = "json-to-csv",
    separator = ","
  }) => {
    const dataFields = Object.keys(fields);
    const headers = Object.keys(fields).map((key) => fields[key]);

    saveCsv({
      data: convertToCsv({ data, fields: dataFields, headers, separator }),
      fileformat,
      filename,
    });
  };

  return { saveAsCsv };
};

export default useJsonToCsv;
