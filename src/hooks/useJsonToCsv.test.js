import { renderHook, act } from "@testing-library/react-hooks";
import useJsonToCsv from "./useJsonToCsv";
import { convertToCsv, saveCsv } from "../helpers";

jest.mock("../helpers", () => ({
  convertToCsv: jest.fn(({ data }) => data),
  saveCsv: jest.fn(),
}));

describe("useJsonToCsv()", () => {
  const data = [
      {"index": 0},
      {"index": 1},
      {"index": 2}
    ],
    fields = {
      "index": "Index"
    };

  it("should convert and save csv when save is triggered", () => {
    const { result } = renderHook(() => useJsonToCsv());
    
    result.current.saveAsCsv({ data, fields });

    expect(convertToCsv).toHaveBeenCalledWith(
      expect.objectContaining({
        data,
        fields: ["index"],
        headers: ["Index"],
        separator: ","
      })
    );
    expect(saveCsv).toHaveBeenCalledWith(
      expect.objectContaining({
        data,
        fileformat: "csv",
        filename: "json-to-csv"
      })
    );
  });
});
