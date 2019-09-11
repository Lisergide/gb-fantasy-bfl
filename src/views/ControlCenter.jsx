import React from "react";
import {Link} from "react-router-dom";
import axios from "axios";

// reactstrap components
import {
  Card,
  CardBody,
  Container,
  Row,
  Col,
  Button, UncontrolledTooltip
} from "reactstrap";

// core components
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import CreateNewTeam from "../components/CreateNewTeam/CreateNewTeam";
import CreateNewsModal from "../components/CreateNewsModal/CreateNewsModal";
import AdminNews from "../components/AdminNews/AdminNews";
import DeleteTeam from "../components/DeleteTeam/DeleteTeam";
// import EditTeam from "../components/EditTeam/EditTeam";


class ControlCenter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      team: '',
    };
  }

  getNews() {
    axios.get("https://fantasy-bfl.herokuapp.com/news")
      .then(res => {
        const data = res.data.results;
        this.setState({ news: data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  getTeamName = (value) => {
    this.setState({team: value});
    console.log(this.state.team)
  };

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;

    this.getNews();
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
                <Col lg="6" sm="12" className="mb-4">
                  <Card className="bg-secondary shadow border-0">
                    <CardBody className="px-lg-5 py-lg-5">
                      <h3>Управление командами</h3>
                      <CreateNewTeam />
                      <DeleteTeam getTeamName={this.getTeamName} />
                      {/*<EditTeam team={this.state.team }/>*/}
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6" sm="12" className="mb-4">
                  <Card className="bg-secondary shadow border-0 control-card">
                    <CardBody className="px-lg-5 py-lg-5">
                      <h3>Управление таблицами</h3>
                      <Button color="info" tag={Link} to="/table-page">
                        Турнирная таблица
                      </Button>
                      <Button color="warning" tag={Link} to="/results-page">
                        Результаты игр
                      </Button>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col className="mb-4">
                  <Card className="bg-secondary shadow border-0">
                    <CardBody className="px-lg-5 py-lg-5">
                      <div className="d-flex justify-content-between">
                        <h3>Управление новостями</h3>
                        <CreateNewsModal modalTitle="Добавление новости" btnTitle={<i className="fas fa-plus"/>} />
                        <UncontrolledTooltip placement="top" target="addNews">Добавить новость</UncontrolledTooltip>
                      </div>
                      <AdminNews/>
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
