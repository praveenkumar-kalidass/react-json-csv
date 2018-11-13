import React from "react";
import {configure, mount, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import JsonToExcel from "./JsonToExcel";

configure({ adapter: new Adapter() });

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

describe("Json To Excel", () => {
  it("Should be defined", () => {
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

  it("Generate excel data", () => {
    const wrapper = shallow(
      <JsonToExcel
        data={data}
        className={className}
        filename={filename}
        fields={fields}
        style={style}
        />
    );
    const body = wrapper.instance().convertToExcel();
    expect(body).toBeDefined();
  });
});
