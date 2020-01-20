import React from "react";
import { shallow } from "enzyme";
import Dashboard from "./Dashboard";
import Carousel from "../Carousel/Carousel";

describe("Dashboard", () => {
  let wrapper;

  beforeEach(
    () => (wrapper = shallow(<Dashboard />, { disableLifecycleMethods: true }))
  );

  it("should render correctly", () => expect(wrapper).toMatchSnapshot());

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should render a Carousel component", () => {
    expect(wrapper.containsMatchingElement(<Carousel />)).toEqual(true);
  });
});
