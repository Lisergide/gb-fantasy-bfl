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
import CreateNewTeam from "components/CreateNewTeam/CreateNewTeam.jsx";

class ControlCenter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }

  render() {
    return (
      <>
        <Header/>
        <main ref="main">
          <section className="section section-shaped section-lg">
            <div className="shape shape-style-1 bg-gradient-default">
              <span/>
              <span/>
              <span/>
              <span/>
              <span/>
              <span/>
              <span/>
              <span/>
            </div>
            <Container className="py-lg-md d-flex">
              <div className="col px-0">
                <h1 className="display-3 text-white">
                  Центр управления
                </h1>
              </div>
            </Container>
            <Container>
              <Row>
                <Col>
                  <Card className="bg-secondary shadow border-0">
                    <CardBody className="px-lg-5 py-lg-5">
                      <CreateNewTeam btnTitle="Добавить команду"/>
                    </CardBody>
                  </Card>
                </Col>
                <Col>
                  <Card className="bg-secondary shadow border-0">
                    <CardBody className="px-lg-5 py-lg-5">
                      <Button color="info" tag={Link} to="/table-page">
                        Турнирная таблица
                      </Button>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        <Footer/>
      </>
    );
  }
}

export default ControlCenter;
