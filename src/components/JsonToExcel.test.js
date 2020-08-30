import React from "react";
import { render, act, fireEvent } from "@testing-library/react";
import { saveAs } from "file-saver";
import JsonToExcel from "./JsonToExcel";

jest.mock("file-saver", () => ({
  saveAs: jest.fn(),
}));

describe("<JsonToExcel />", () => {
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
    text = "Convert Json to Excel";

  it("should match snapshot", () => {
    const container = render(
      <JsonToExcel
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

  it("should call saveAs function to save converted excel", async () => {
    const { getByTestId } = render(
      <JsonToExcel
        data={data}
        filename={filename}
        fields={fields}
        style={style}
        text={text}
      />
    );

    await act(async () => {
      await fireEvent.click(getByTestId("json-to-excel"));
    });

    expect(saveAs).toHaveBeenCalledTimes(1);
    expect(saveAs).toHaveBeenCalledWith(
      expect.anything(),
      [ "New file.csv" ],
    );
  });
});
