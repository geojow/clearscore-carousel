import React from "react";
import { shallow } from "enzyme";
import SlideSelector from "./SlideSelector";

describe("Slide", () => {
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

  it("should render a <ul />", () => {
    expect(wrapper.find("ul").length).toEqual(1);
  });
});
