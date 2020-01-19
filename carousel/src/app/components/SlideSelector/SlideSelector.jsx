import React from "react";
import PropTypes from "prop-types";
import bemHelper from "../../utils/bem";
import "./slideselector.scss";

const cn = bemHelper({ block: "slide-selector" });

const SlideSelector = ({ numberOfSlides, currentSlide, setSlide }) => (
  <ul className={cn("container")}>
    {[...Array(numberOfSlides).keys()].map((number, index) => (
      <li
        className={`${cn("item")} ${
          currentSlide === index ? `${cn("item-active")}` : ""
        }`}
        key={number}
        onClick={() => setSlide(number)}
      ></li>
    ))}
  </ul>
);

SlideSelector.propTypes = {
  numberOfSlides: PropTypes.number.isRequired,
  currentSlide: PropTypes.number.isRequired,
  setSlide: PropTypes.func.isRequired
};

export default SlideSelector;
