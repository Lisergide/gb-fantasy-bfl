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
  Button
} from "reactstrap";

// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import CreateNewTeam from "components/CreateNewTeam/CreateNewTeam.jsx";
import NewsBox from "components/NewsBox/NewsBox";
import CreateNewsModal from "components/CreateNewsModal/CreateNewsModal";


class ControlCenter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
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

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;

    this.getNews();
  }

  render() {
    const { news } = this.state;
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
                      <h3>Создание команды</h3>
                      <CreateNewTeam btnTitle="Добавить команду"/>
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
                      <Button color="warning" tag={Link} to="/table-page">
                        Календарь игр
                      </Button>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col className="mb-4">
                  <Card className="bg-secondary shadow border-0">
                    <CardBody className="px-lg-5 py-lg-5">
                      <h3>Управление новостями</h3>
                      <div className="news_block">
                        <Row>
                          {news.map(item =>
                            <Col key={item.id} sm="6" lg="4" className="d-flex justify-content-center">
                              <NewsBox
                                link={`/news-page/${item.id}`}
                                newsTitle={item.title}
                                newsDate={item.news_date}
                                newsId={item.id}
                                newsText={item.text}
                                backgroundImg={
                                  // "https://via.placeholder.com/343x229"
                                  item.imgfilename === null
                                    ? "https://via.placeholder.com/343x229"
                                    :  item.imgfilename
                                }
                              />
                            </Col>
                          )}
                            <Col sm="6" lg="4" className="d-flex justify-content-center">
                              <CreateNewsModal
                                btnClassName="btn-add-news shadow border-0"
                                btnColor="muted"
                                btnLabel="Добавить новость"
                                modalTitle="Добавление новости"
                                btnIcon={<i className="fas fa-plus"/>}
                              />
                            </Col>
                        </Row>
                      </div>
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
