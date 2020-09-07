import { convertToCsv, saveCsv } from "../helpers";
import { DEFAULT_FILE_FORMAT, DEFAULT_FILE_NAME, COMMA } from "../constants";

const useJsonToCsv = () => {
  const saveAsCsv = ({
    data,
    fields,
    fileformat = DEFAULT_FILE_FORMAT,
    filename = DEFAULT_FILE_NAME,
    separator = COMMA
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
