/*eslint-disable*/
import React from "react";

// reactstrap components
import {
  Button,
  NavItem,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <>
        <footer className="footer has-cards">
          <Container>
            <hr />
            <Row className="align-items-center justify-content-md-between">
              <Col md="6">
                <div className="copyright">
                  © {new Date().getFullYear()} -{" "}
                  <a href="https://vk.com/bfl32" target="_blank">
                    Брянская Футбольная Лига
                  </a>
                  .
                </div>
              </Col>
              <Col md="6">
                <Nav className="nav-footer justify-content-end">
                  <NavItem>
                    <Button className="btn-neutral btn-icon-only btn-round"
                      color="vk"
                      href="https://vk.com/bfl32"
                      id="tooltip475038074"
                      size="lg"
                      target="_blank">
                      <i className="fab fa-vk" />
                    </Button>
                    <UncontrolledTooltip delay={0}
                      target="tooltip475038074">
                      ВКонтанкте
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <Button className="btn-neutral btn-icon-only btn-round ml-1"
                      color="instagram"
                      href="https://www.instagram.com/bflmafia"
                      id="tooltip837440414"
                      size="lg"
                      target="_blank">
                      <i className="fab fa-instagram" />
                    </Button>
                    <UncontrolledTooltip delay={0}
                      target="tooltip837440414">
                      Instagram
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <Button className="btn-neutral btn-icon-only btn-round ml-1"
                      color="youtube"
                      href="https://www.youtube.com/channel/UCfn5o1Sc1m5NOu5bPio134A"
                      id="tooltip829810202"
                      size="lg"
                      target="_blank">
                      <i className="fab fa-youtube" />
                    </Button>
                    <UncontrolledTooltip delay={0}
                      target="tooltip829810202">
                      YouTube
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <Button className="btn-neutral btn-icon-only btn-round ml-1"
                      color="github"
                      href="https://github.com/Lisergide/gb-fantasy-bfl"
                      id="tooltip495507257"
                      size="lg"
                      target="_blank">
                      <i className="fab fa-github" />
                    </Button>
                    <UncontrolledTooltip delay={0}
                      target="tooltip495507257">
                      Github
                    </UncontrolledTooltip>
                  </NavItem>
                </Nav>
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default Footer;
