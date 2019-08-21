import React from "react";
import {Link} from "react-router-dom";

import {
  Card,
  CardBody,
  CardFooter,
  CardLink,
  CardTitle,
  CardImg,
  CardImgOverlay,
} from "reactstrap";

class NewsBox extends React.Component {
  render() {
    const {link, title, newsDate, likes, comments, backgroundImg} = this.props;

    const publicDate = new Date(newsDate);

    const newsBoxStyle = {
      // width: "280px",
      // height: "215px",
      // backgroundImage: "url(" + require("assets/img/news/" + backgroundImg + ".jpg") + ")",
      backgroundImage: `url(${backgroundImg})`,
      // backgroundImage: "url('https://via.placeholder.com/280')",
    };

    return (
      <div>
        <Card className="news_box shadow border-0 m-2">
          <Link to={link} params={{"title": title}} className="news_box__link">
            <CardImg className="news_box__img" width="100%" src={backgroundImg}/>
            <CardImgOverlay className="news_box__body py-3">
            {/*<CardBody className="news_box__body py-3">*/}
              <CardTitle className="text-white">{title}</CardTitle>
            {/*</CardBody>*/}
            </CardImgOverlay>
          </Link>
          <CardFooter>
            <span className="text-muted">{publicDate.toLocaleDateString()}</span>
            <CardLink className="text-muted float-right ml-3" href="#">
              <i className="far fa-thumbs-up"/>
              <span className="pl-1">{likes}</span>
            </CardLink>
            <CardLink className="text-muted float-right ml-3" href="#">
              <i className="far fa-comment-alt"/>
              <span className="pl-1">{comments}</span>
            </CardLink>
          </CardFooter>
        </Card>
      </div>
    );
  };
}

export default NewsBox;
