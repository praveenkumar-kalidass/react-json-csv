import { saveAs } from "file-saver";

export default ({ data, fileformat, filename }) => {
  const blob = new Blob(
    [data],
    {
      type: "text/plain",
      charset: "utf-8"
    }
  );

  saveAs(blob, [filename + "." + fileformat]);
};
