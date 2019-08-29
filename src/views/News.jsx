import React from "react";
import axios from "axios";

// reactstrap components
import {
  Card,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: []
    };
  }

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;

    const { match } = this.props;
    axios.get(`https://fantasy-bfl.herokuapp.com/news/${match.params.id}`)
      .then(res => {
        const data = res.data.results;
        this.setState({ news: data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  publicDate = newsDate => {
    return new Date(newsDate);
  };

  render() {
    const { news } = this.state;
    // const {title, text} = this.props.location;
    console.log(news);
    return (
      <>
        <Header/>
        <main className="profile-page" ref="main">
          <section className="section-profile-cover section-shaped my-0">
            {/* Circles background */}
            <div className="shape shape-style-1 shape-default alpha-4">
              <span/>
              <span/>
              <span/>
              <span/>
              <span/>
              <span/>
              <span/>
            </div>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          <section className="section">
            <Container>
              <Card className="card-profile shadow mt--300 pb-5">
                <div className="px-4">
                  <Row className="justify-content-center">
                    {news.map(item =>
                    <Col key={item.id}>
                        <div>
                          <h4 className="text-center">{item.title}</h4>
                        </div>
                        <div className="d-flex justify-content-center mb-3">
                        <img src={item.imgfilename === null
                            ? "https://via.placeholder.com/800x400"
                            : require("assets/img/news/" + item.imgfilename + ".jpg")}
                             alt=""/>
                        </div>
                        <div>
                        <p className="text-center">
                        {item.text}
                        </p>
                        </div>
                      <div className="float-right"><p>{this.publicDate(item.news_date).toLocaleDateString()}</p></div>
                    </Col>
                    )}
                  </Row>
                </div>
              </Card>
            </Container>
          </section>
        </main>
        <Footer/>
      </>
    )
  }
}

export default News;