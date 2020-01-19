import React from "react";
import { shallow, mount } from "enzyme";
import Carousel from "./Carousel";
import Slide from "../Slide/Slide";
import SlideSelector from "../SlideSelector/SlideSelector";

describe("Carousel", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<Carousel />)));

  it("should render a <ul />", () => {
    expect(wrapper.find("ul").length).toEqual(1);
  });

  it("should render a Slide and SlideSelector component", () => {
    expect(
      wrapper.containsAllMatchingElements([
        <Slide />,
        <SlideSelector
          numberOfSlides={wrapper.instance().state.numberOfSlides}
          currentSlide={wrapper.instance().state.slideIndex}
          setSlide={wrapper.instance().setIndex}
        />
      ])
    ).toEqual(true);
  });
});

describe("mounted Carousel", () => {
  let wrapper;

  beforeEach(() => (wrapper = mount(<Carousel />)));

  it("it calls setIndex when a SlideSelector is clicked", () => {
    wrapper.setState({
      slides: [{ id: "1", upper: "", middle: "", lower: "", progress: null }],
      numberOfSlides: 1
    });
    const spy = jest.spyOn(wrapper.instance(), "setIndex");
    wrapper.instance().forceUpdate();
    expect(spy).toHaveBeenCalledTimes(0);
    wrapper
      .find(".slide-selector__item")
      .first()
      .simulate("click");
    expect(spy).toHaveBeenCalledTimes(1);
  });
});

describe("setIndex", () => {
  let wrapper;

  beforeEach(() => (wrapper = mount(<Carousel />)));

  it("it updates slideIndex", () => {
    wrapper.setState({
      slideIndex: 0,
      slides: [
        { id: "1", upper: "", middle: "", lower: "", progress: null },
        { id: "2", upper: "", middle: "", lower: "", progress: null }
      ],
      numberOfSlides: 2
    });
    wrapper.instance().setIndex(1);
    expect(wrapper.state("slideIndex")).toEqual(1);
  });

  it("it does not update slideIndex if you try to set the same index", () => {
    wrapper.setState({
      slideIndex: 1,
      slides: [
        { id: "1", upper: "", middle: "", lower: "", progress: null },
        { id: "2", upper: "", middle: "", lower: "", progress: null }
      ],
      numberOfSlides: 2
    });
    wrapper.instance().setIndex(1);
    expect(wrapper.state("slideIndex")).toEqual(1);
  });
});
