import React from "react";

import {
  Card,
  CardText,
  CardBody,
  CardFooter,
  CardLink,
  CardTitle,
} from "reactstrap";

const newsBoxStyle = {
  width: "280px",
  height: "280px",
  // backgroundImage: "url(" + require("assets/img/theme/img-slider-02.jpg") + ")",
  backgroundImage: "url('https://via.placeholder.com/280')",
  backgroundPosition: "center",
  backgroundSize: "cover"
  // backgroundSize: "400px"
};

const NewsBox = (props) => {
  return (
    <div>
      <Card style={newsBoxStyle} className="news_box shadow border-0 m-2">
        <CardBody className="py-3">
          <CardTitle className="text-white font-weight-bold">Title</CardTitle>
          <CardText className="text-white">
            Lorem ipsum dolor sit amet consectetur.
          </CardText>
        </CardBody>
        <CardFooter>
          <span className="text-muted">19.08.2019</span>
          <CardLink className="text-muted float-right ml-3" href="#">
            <i className="far fa-thumbs-up" />
            <span className="pl-1">15</span>
          </CardLink>
          <CardLink className="text-muted float-right ml-3" href="#">
            <i className="far fa-comment-alt" />
            <span className="pl-1">30</span>
          </CardLink>
        </CardFooter>
      </Card>
    </div>
  );
};

export default NewsBox;
