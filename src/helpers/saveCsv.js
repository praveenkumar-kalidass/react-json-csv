import { saveAs } from "file-saver";

import { BLOB_TYPE_TEXT, BLOB_CHARSET_UTF8 } from "../constants";

export default ({ data, fileformat, filename }) => {
  const blob = new Blob(
    [data],
    {
      type: BLOB_TYPE_TEXT,
      charset: BLOB_CHARSET_UTF8
    }
  );

  saveAs(blob, [filename + "." + fileformat]);
};
