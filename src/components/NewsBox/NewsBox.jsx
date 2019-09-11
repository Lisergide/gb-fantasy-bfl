/* eslint-disable */
import React from "react";
import {Link} from "react-router-dom";

// reactstrap components
import {
  Card,
  CardFooter,
  CardLink,
  CardTitle,
  CardImg,
  CardImgOverlay,
} from "reactstrap";

const NewsBox = (props) => {
    const {
      link,
      newsTitle,
      newsDate,
      // likes,
      // comments,
      backgroundImg
    } = props;

    const publicDate = new Date(newsDate);

    return (
      <div>
        <Card inverse className="news_box shadow border-0 m-2">
          <Link to={link} params={{title: "title"}} className="news_box__link">
            <CardImg className="news_box__img" src={backgroundImg}/>
            <CardImgOverlay className="news_box__ovarlay py-3">
              <CardTitle className="text-white">{newsTitle}</CardTitle>
            </CardImgOverlay>
          </Link>
          <CardFooter>
            <span className="text-muted">{publicDate.toLocaleDateString()}</span>
              {/*<CardLink className="text-primary float-right ml-3" href="#">*/}
                {/*<i className="far fa-thumbs-up"/>*/}
                {/*<span className="pl-1">{likes}</span>*/}
              {/*</CardLink>*/}
            {/*<CardLink className="text-primary float-right ml-3" href="#">*/}
            {/*  <i className="fas fa-edit"/>*/}
            {/*  /!*<i className="far fa-comment-alt"/>*!/*/}
            {/*  /!*<span className="pl-1">{comments}</span>*!/*/}
            {/*</CardLink>*/}
          </CardFooter>
        </Card>
      </div>
    );
};

export default NewsBox;
