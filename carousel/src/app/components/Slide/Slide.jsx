import React from "react";
import PropTypes from "prop-types";
import bemHelper from "../../utils/bem";
import ProgressRing from "../ProgressRing/ProgressRing";
import "./slide.scss";

const cn = bemHelper({ block: "slide" });

const Slide = ({ slide }) => (
  <>
    <li key={slide ? slide.id : ""} className={cn("container")}>
      <p className={cn("content-upper")}>{slide ? slide.upper : ""}</p>
      <p className={cn("content-middle", slide && slide.id)}>
        {slide ? slide.middle : "..."}
      </p>
      <p className={cn("content-lower")}>{slide ? slide.lower : ""}</p>
    </li>
    {slide && slide.progress && <ProgressRing progress={slide.progress} />}
  </>
);

Slide.propTypes = {
  slide: PropTypes.shape({
    id: PropTypes.string.isRequired,
    upper: PropTypes.string.isRequired,
    middle: PropTypes.string.isRequired,
    lower:
      PropTypes.string.isRequired | PropTypes.instanceOf(Object).isRequired,
    progress: PropTypes.number
  })
};

export default Slide;
