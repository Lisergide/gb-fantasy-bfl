import React from "react";
import axios from "axios";

// reactstrap components
import {
  Card,
  CardBody,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";

class Fantasy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;

    axios
      .get("https://fantasy-bfl.herokuapp.com/news")
      .then(res => {
        const data = res.data;
        this.setState({ data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  render() {
    console.log(this.state.data);
    return (
      <>
        <Header />
        <main ref="main">
          <section className="section section-shaped section-lg">
            <div className="shape shape-style-1 bg-gradient-default">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <Container className="pt-lg-md">
              <Row className="justify-content-center">
                <Col lg="9">
                  <Card className="bg-secondary shadow border-0">
                    <CardBody className="px-lg-5 py-lg-5">
                      <h2>Здесь будет Fantasy!</h2>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        <Footer />
      </>
    );
  }
}

export default Fantasy;
