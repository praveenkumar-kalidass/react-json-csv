import React from "react";
import { render, act, fireEvent } from "@testing-library/react";
import { saveAs } from "file-saver";
import JsonToCsv from "./JsonToCsv";

jest.mock("file-saver", () => ({
  saveAs: jest.fn(),
}));

describe("<JsonToCsv />", () => {
  const data = [
      {"index": 0},
      {"index": 1},
      {"index": 2}
    ],
    filename = "New file",
    fields = {
      "index": "Index"
    },
    style = {
      padding: "5px"
    },
    text = "Convert Json to Csv";

  it("should match snapshot", () => {
    const container = render(
      <JsonToCsv
        data={data}
        filename={filename}
        fields={fields}
        style={style}
        text={text}
      />
    );

    expect(container).toBeDefined();
    expect(container).toMatchSnapshot();
  });

  it("should call saveAs function to save converted csv", async () => {
    const { getByTestId } = render(
      <JsonToCsv
        data={data}
        filename={filename}
        fields={fields}
        style={style}
        text={text}
      />
    );

    await act(async () => {
      await fireEvent.click(getByTestId("json-to-csv"));
    });

    expect(saveAs).toHaveBeenCalledTimes(1);
    expect(saveAs).toHaveBeenCalledWith(
      expect.anything(),
      [ "New file.csv" ],
    );
  });
});
