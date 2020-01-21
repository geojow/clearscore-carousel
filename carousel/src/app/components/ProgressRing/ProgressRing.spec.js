import React from "react";
import { shallow } from "enzyme";
import ProgressRing from "./ProgressRing";

describe("ProgressRing", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<ProgressRing progress={0} />)));

  it("should render correctly", () => expect(wrapper).toMatchSnapshot());

  it("should render a <svg />", () => {
    expect(wrapper.find("svg").length).toEqual(1);
  });
});
