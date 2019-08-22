import React from "react";
import {withAuth} from '@okta/okta-react';

// reactstrap components
import {Button, Card, Container, Row, Col} from "reactstrap";

// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";

export default withAuth(class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: null };
    this.getCurrentUser = this.getCurrentUser.bind(this);
  }

  async getCurrentUser(){
    this.props.auth.getUser()
      .then(user => this.setState({user}));
  };

  componentDidMount() {
    this.getCurrentUser();

    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    // this.refs.main.scrollTop = 0;
  }

  render() {
    if (!this.state.user) return null;
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
              <svg xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0">
                <polygon className="fill-white"
                  points="2560 0 2560 100 0 100"/>
              </svg>
            </div>
          </section>
          <section className="section">
            <Container>
              <Card className="card-profile shadow mt--300">
                <div className="px-4">
                  <Row className="justify-content-center">
                    <Col className="order-lg-2" lg="3">
                      <div className="card-profile-image">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img alt="..."
                            className="rounded-circle"
                            src={require("assets/img/theme/team-5-800x800.jpg")}/>
                        </a>
                      </div>
                    </Col>
                    <Col className="order-lg-3 text-lg-right align-self-lg-center"
                      lg="4">
                      <div className="card-profile-actions py-4 mt-lg-0">
                        <Button className="mr-4"
                          color="info"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                          size="sm">
                          Connect
                        </Button>
                        <Button className="float-right"
                          color="default"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                          size="sm">
                          Message
                        </Button>
                      </div>
                    </Col>
                    <Col className="order-lg-1" lg="4">
                      <div className="card-profile-stats d-flex justify-content-center">
                        <div>
                          <span className="heading">22</span>
                          <span className="description">Friends</span>
                        </div>
                        <div>
                          <span className="heading">10</span>
                          <span className="description">Photos</span>
                        </div>
                        <div>
                          <span className="heading">89</span>
                          <span className="description">Comments</span>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <div className="text-center mt-5">
                    <h3>
                      {this.state.user.name}{" "}
                      <span className="font-weight-light">, 29</span>
                    </h3>
                    <div className="h6 font-weight-300">
                      <i className="ni location_pin mr-2"/>
                      Moscow, Russia
                    </div>
                  </div>
                </div>
              </Card>
            </Container>
          </section>
        </main>
        <Footer/>
      </>
    );
  }
}
)
// export default withAuth(Profile);