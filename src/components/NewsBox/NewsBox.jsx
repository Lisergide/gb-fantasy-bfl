/* eslint-disable */
import React from "react";
import {withAuth} from "@okta/okta-react";
import {Link} from "react-router-dom";
import axios from "axios";

// reactstrap components
import {
  Card,
  CardFooter,
  CardLink,
  CardTitle,
  CardImg,
  CardImgOverlay,
  Button,
} from "reactstrap";

import EditNewsModal from "../EditNewsModal/EditNewsModal";

export default withAuth(class NewsBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {user: null};
    this.getCurrentUser = this.getCurrentUser.bind(this);
    this.handleClickDeleteNews = this.handleClickDeleteNews.bind(this);
  }

  async getCurrentUser() {
    this.props.auth.getUser()
      .then(user => this.setState({user}));
  };

  componentDidMount() {
    this.getCurrentUser();
  }

  async handleClickDeleteNews(e) {
    e.preventDefault();
    // console.log(e.target.id);
    await axios({
      method: 'post',
      url: 'https://fantasy-bfl.herokuapp.com/news/delete',
      data: {
        id: e.target.id
      }
    }).then(res => {
      if (res.status === 200) {

        window.location.reload(true);
      }
      console.log(res);
      console.log(res.status);
    })
  };

  render() {
    const {
      link,
      newsTitle,
      newsDate,
      newsId,
      newsText,
      // likes,
      // comments,
      backgroundImg
    } = this.props;

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
            {!this.state.user ? null : <>
              <CardLink
                id={newsId}
                href="javascript:void(0)"
                color="link"
                className="text-danger float-right ml-3"
                onClick={this.handleClickDeleteNews}
              >
                <i id={newsId} className="fas fa-trash-alt"/>
                {/*<i className="far fa-thumbs-up"/>*/}
                {/*<span className="pl-1">{likes}</span>*/}
              </CardLink>
              < EditNewsModal
                newsId={newsId}
                newsTitle={newsTitle}
                newsText={newsText}
                newsDate={publicDate.toISOString().substring(0, 10)}
              />
            </>
            }
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
})