import React from "react";
import { shallow } from "enzyme";
import SlideSelector from "./SlideSelector";

describe("SlideSelector", () => {
  let wrapper;

  beforeEach(
    () =>
      (wrapper = shallow(
        <SlideSelector
          numberOfSlides={2}
          currentSlide={0}
          setSlide={jest.fn()}
        />
      ))
  );

  it("should render correctly", () => expect(wrapper).toMatchSnapshot());

  it("should render a <ul />", () => {
    expect(wrapper.find("ul").length).toEqual(1);
  });
});
