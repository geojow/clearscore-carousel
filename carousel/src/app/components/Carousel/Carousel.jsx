import React, { Component } from 'react';
import PropTypes from 'prop-types'
import bemHelper from '../../utils/bem';
import Slide from '../Slide/Slide'
import SlideSelector from '../SlideSelector/SlideSelector'
import './carousel.scss';

const cn = bemHelper({ block: 'carousel' });

class Carousel extends Component {
  state = {
    slideIndex: 0,
    slides: [],
    numberOfSlides: 0
  }

  componentDidMount() {
    this.animation = setInterval(() => this.setIndex(this.state.slideIndex + 1), 5000)
  }

  componentWillUnmount() {
    clearInterval(this.animation)
  }

  componentWillReceiveProps(props) {
    const { creditReport } = props;
    const slides = creditReport ? [{
      id: 'scoreIndicator',
      upper: "Your credit score is",
      middle: creditReport.score.toString(),
      lower: `out of ${creditReport.maxScoreValue}`,
      progress: Math.floor((creditReport.score / creditReport.maxScoreValue) * 100)
    }, {
      id: 'longTermDebt',
      upper: 'Your long term debt total',
      middle: `£${creditReport.currentLongTermDebt}`,
      lower: creditReport.changeInLongTermDebt === 0 ? "No change from last month" : creditReport.changeInLongTermDebt < 0 ? `Down ${creditReport.changeInLongTermDebt} from last month` : `Up ${(creditReport.changeInLongTermDebt)} from last month`,
      progress: null
    }] : []
    this.setState({
      slides,
      numberOfSlides: slides.length
    })
  }

  setIndex = index => {
    const { numberOfSlides } = this.state;
    if (index >= numberOfSlides) index = 0;
    this.setState({ slideIndex: index });
  };

  render() {
    const { slideIndex, slides, numberOfSlides } = this.state;
    return (
      <ul className={cn('container')}>
        <Slide slide={slides[slideIndex]} />
        <SlideSelector
          numberOfSlides={numberOfSlides}
          currentSlide={slideIndex}
          setSlide={this.setIndex}
        />
      </ul>
    )
  }
}

Carousel.propTypes = {
  creditReport: PropTypes.shape({
    score: PropTypes.number.isRequired,
    maxScoreValue: PropTypes.number.isRequired,
    currentLongTermDebt: PropTypes.number.isRequired,
    changeInLongTermDebt: PropTypes.number.isRequired,
  })
}

export default Carousel;
