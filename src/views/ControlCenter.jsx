import React from "react";
import {Link} from "react-router-dom";

// reactstrap components
import {
  Card,
  CardBody,
  Container,
  Row,
  Col,
  Button
} from "reactstrap";

// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import CreateNewTeamModal from "../components/CreateNewTeamModal/CreateNewTeamModal";

class ControlCenter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
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
                        <h2>Центр управления</h2>
                      <Row>
                        <Col>
                          <CreateNewTeamModal  btnTitle="Добавить команду" />
                        </Col>
                        <Col>
                          <Button color="info" tag={Link} to="/table-page">
                            Турнирная таблица
                          </Button>
                        </Col>
                      </Row>
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

export default ControlCenter;
