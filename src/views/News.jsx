import React from "react";

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
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }

  render() {
    // const {title, text} = this.props.location;
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
                    <Col>
                      <div>
                        <h3 className="text-center">Title</h3>
                      </div>
                      <div className="d-flex justify-content-center mb-3">
                        <img src="https://via.placeholder.com/800x400" alt=""/>
                      </div>
                      <div>
                        <p className="text-center">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At atque, cupiditate debitis
                          doloremque dolores ea eaque error, fugiat in ipsa laboriosam laudantium repellat reprehenderit
                          sed sint veniam vero, voluptate voluptatibus?
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At atque, cupiditate debitis
                          doloremque dolores ea eaque error, fugiat in ipsa laboriosam laudantium repellat reprehenderit
                          sed sint veniam vero, voluptate voluptatibus?
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At atque, cupiditate debitis
                          doloremque dolores ea eaque error, fugiat in ipsa laboriosam laudantium repellat reprehenderit
                          sed sint veniam vero, voluptate voluptatibus?
                        </p>
                      </div>
                    </Col>
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