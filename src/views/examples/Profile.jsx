import React from "react";

// reactstrap components
import {
  Button,
  Card,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
// import NewsSlider from "components/NewsSlider/NewsSlider";
import Carousel from "views/IndexSections/Carousel";

class Profile extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <Header />
        <main className="profile-page" ref="main">
          <section className="section-profile-cover section-shaped my-0">
            {/* Circles background */}
            <div className="shape shape-style-1 shape-default alpha-4">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
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
              <Card className="card-profile shadow mt--300">
                <div className="px-4">
                  <Row className="justify-content-center">
                    <Col className="order-lg-2" lg="3">
                      <div className="card-profile-image">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            // className="rounded-circle"
                            src={require("assets/img/brand/bflmafia_logo.png")}
                          />
                        </a>
                      </div>
                    </Col>
                    <Col
                      className="order-lg-3 text-lg-right align-self-lg-center"
                      lg="4"
                    >
                      <div className="card-profile-actions py-4 mt-lg-0">
                        <Button
                          className="mr-4"
                          color="info"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                          size="sm"
                        >
                          Присоединиться
                        </Button>
                        <Button
                          className="float-right"
                          color="default"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                          size="sm"
                        >
                          Напиши нам
                        </Button>
                      </div>
                    </Col>
                    <Col className="order-lg-1" lg="4">
                      <div className="card-profile-stats d-flex justify-content-center">
                        <div>
                          <span className="heading">3,6К</span>
                          <span className="description">Участников</span>
                        </div>
                        <div>
                          <span className="heading">97,2К</span>
                          <span className="description">Фотографий</span>
                        </div>
                        <div>
                          <span className="heading">2,8К</span>
                          <span className="description">Видео</span>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <div className="text-center mt-5">
                    <h3>
                      Брянская Футбольгая Лига{" "}
                      {/* <span className="font-weight-light">, 27</span> */}
                    </h3>
                    {/* <div className="h6 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      Bucharest, Romania
                    </div> */}
                    {/* <div className="h6 mt-4">
                      <i className="ni business_briefcase-24 mr-2" />
                      Solution Manager - Creative Tim Officer
                    </div> */}
                    {/* <div>
                      <i className="ni education_hat mr-2" />
                      University of Computer Science
                    </div> */}
                  </div>
                  <div className="mt-5 py-5 border-top text-center">
                    <Row className="justify-content-center">
                      <Col lg="9">
                        <p>
                          Брянская Футбольная Лига - это лига, которая
                          объединяет не только футболистов-любителей, но и самых
                          настоящих профессионалов. За 3 года существования БФЛ
                          в ней сыграло 63 команды и около 700 футболистов.
                          Среди которых были футболисты брянского "Динамо"
                          Евгений Синица и Никита Бондарев, полузащитник
                          смоленского "ЦРФСО" - Андрей Рыченков, а также Сергей
                          Терехов - защитник команды Российской Премьер-лиги
                          "Оренбург". Основной целью БФЛ является развитие и
                          популяризация футбола в городе Брянске и Брянской
                          области.
                        </p>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          Читать далее...
                        </a>
                      </Col>
                    </Row>
                  </div>
                </div>
                <Row className="justify-content-center">
                  <Col>
                    <Carousel />
                  </Col>
                </Row>
              </Card>
            </Container>
          </section>
        </main>
        <Footer />
      </>
    );
  }
}

export default Profile;
