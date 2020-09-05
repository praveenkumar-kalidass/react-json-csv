import { convertToExcel, saveExcel } from "../helpers";

const useJsonToExcel = () => {
  const saveAsExcel = ({
    data,
    fields,
    fileformat = "csv",
    filename = "json-to-excel",
    separator = ","
  }) => {
    const dataFields = Object.keys(fields);
    const headers = Object.keys(fields).map((key) => fields[key]);

    saveExcel({
      data: convertToExcel({ data, fields: dataFields, headers, separator }),
      fileformat,
      filename,
    });
  };

  return { saveAsExcel };
};

export default useJsonToExcel;
