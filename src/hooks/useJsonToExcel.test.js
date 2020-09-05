import { renderHook, act } from "@testing-library/react-hooks";
import useJsonToExcel from "./useJsonToExcel";
import { convertToExcel, saveExcel } from "../helpers";

jest.mock("../helpers", () => ({
  convertToExcel: jest.fn(({ data }) => data),
  saveExcel: jest.fn(),
}));

describe("useJsonToExcel()", () => {
  const data = [
      {"index": 0},
      {"index": 1},
      {"index": 2}
    ],
    fields = {
      "index": "Index"
    };

  it("should convert and save excel when save is triggered", () => {
    const { result } = renderHook(() => useJsonToExcel());
    
    result.current.saveAsExcel({ data, fields });

    expect(convertToExcel).toHaveBeenCalledWith(
      expect.objectContaining({
        data,
        fields: ["index"],
        headers: ["Index"],
        separator: ","
      })
    );
    expect(saveExcel).toHaveBeenCalledWith(
      expect.objectContaining({
        data,
        fileformat: "csv",
        filename: "json-to-excel"
      })
    );
  });
});
