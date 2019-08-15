import React from "react";

// reactstrap components
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Button,
  Container,
  Row,
  Col,
  UncontrolledCarousel
} from "reactstrap";

const items = [
  {
    src: require("assets/img/theme/img-slider-02.jpg"),
    altText: "",
    caption: "Slide 2",
    header: "Title 2"
  },
  {
    src: require("assets/img/theme/img-slider-03.jpg"),
    altText: "",
    caption: "Slide 2",
    header: "Title 3"
  }
];

class NewsSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    };
  }

  onExiting = () => {
    this.animating = true;
  }

  onExited = () => {
    this.animating = false;
  }

  next = () => {
    if(this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous = () => {
    if(this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex = (newIndex) => {
    if(this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText}/>
          <CarouselCaption
            className="text-danger"
            captionText={item.caption}
          />
        </CarouselItem>
      );
    });
    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={this.goToIndex}
        />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}

export default NewsSlider;
