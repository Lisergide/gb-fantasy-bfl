import React from "react";

// reactstrap components
import {
  Card,
  CardBody,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

// core components
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import AdminResultsTable from "../components/AdminResultsTable/AdminResultsTable";
import AddResultsModal from "../components/AddResultsModal/AddResultsModal";

class ResultsView extends React.Component {
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
            <Container className="pt-lg-md">
              <Row className="justify-content-center">
                <Col lg="9">
                  <Card className="bg-secondary shadow border-0">
                    <CardBody className="px-lg-5 py-lg-5">
                      <div className="d-flex justify-content-between">
                        <h2>Результаты</h2>
                        <AddResultsModal btnTitle={<i className="fas fa-plus"/>}/>
                        <UncontrolledTooltip placement="top" target="addResults">Добавить матч</UncontrolledTooltip>
                      </div>
                      <AdminResultsTable/>
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

export default ResultsView;
