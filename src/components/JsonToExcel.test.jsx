import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import JsonToExcel from "./JsonToExcel";

configure({ adapter: new Adapter() });

describe("Json To Excel", () => {
  it("Should be defined", () => {
    const data = [
        {"index": 0},
        {"index": 1},
        {"index": 2}
      ],
      className = "my-convertor",
      filename = "New file",
      fields = {
        "index": "Index"
      },
      style = {
        padding: "5px"
      };
    const wrapper = mount(
      <JsonToExcel
        data={data}
        className={className}
        filename={filename}
        fields={fields}
        style={style}
        />
    );
    expect(wrapper).toBeDefined();
  });
});
