import React from "react";
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  // Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  // UncontrolledTooltip
} from "reactstrap";

class Header extends React.Component {
  componentDidMount() {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
  }
  render() {
    return (
      <>
        <header className="header-global">
          <Navbar
            className="navbar-main navbar-transparent navbar-light headroom"
            expand="lg"
            id="navbar-main"
          >
            <Container>
              <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                <img
                  alt="..."
                  src={require("assets/img/brand/bfl_logo_header.png")}
                />
              </NavbarBrand>
              <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse navbar toggler="#navbar_global">
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      <Link to="/">
                        <img
                          alt="..."
                          src={require("assets/img/brand/bfl_logo_header_blue.png")}
                        />
                      </Link>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav
                  className="navbar-nav-hover align-items-lg-center"
                  navbar
                >
                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className="fas fa-futbol d-lg-none mr-1" />
                      <span className="nav-link-inner--text">Турниры</span>
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem to="/" tag={Link}>
                        1 Дивизион
                      </DropdownItem>
                      <DropdownItem to="/" tag={Link}>
                        2 Дивизион
                      </DropdownItem>
                      <DropdownItem to="/" tag={Link}>
                        3 Дивизион
                      </DropdownItem>
                      <DropdownItem to="/" tag={Link}>
                        Весенний чемпионат
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className="fas fa-running d-lg-none mr-1" />
                      <span className="nav-link-inner--text">
                        Участники
                      </span>
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem to="/" tag={Link}>
                        Команды
                      </DropdownItem>
                      <DropdownItem to="/" tag={Link}>
                        Игроки
                      </DropdownItem>
                      <DropdownItem to="/" tag={Link}>
                        Судьи
                      </DropdownItem>
                      <DropdownItem to="/" tag={Link}>
                        Зал славы
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className="fas fa-award d-lg-none mr-1" />
                      <span className="nav-link-inner--text">О Лиге</span>
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem to="/" tag={Link}>
                        Партнеры
                      </DropdownItem>
                      <DropdownItem to="/" tag={Link}>
                        Лига в цифрах и фактах
                      </DropdownItem>
                      <DropdownItem to="/" tag={Link}>
                        Руководство
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <NavItem>
                    <NavLink
                      // className="nav-link-inner--text"
                      href="/"
                      target="_blank"
                    >
                      <i className="far fa-newspaper d-lg-none mr-1" />
                      <span className="nav-link-inner--text">
                        Новости
                      </span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      // className="nav-link-inner--text"
                      href="/"
                      target="_blank"
                    >
                      <i className="far fa-images d-lg-none mr-1" />
                      <span className="nav-link-inner--text">
                        Медиа
                      </span>
                    </NavLink>
                  </NavItem>
                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className="far fa-clone d-lg-none mr-1" />
                      <span className="nav-link-inner--text">Examples</span>
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem to="/landing-page" tag={Link}>
                        Landing
                      </DropdownItem>
                      <DropdownItem to="/login-page" tag={Link}>
                        Login
                      </DropdownItem>
                      <DropdownItem to="/register-page" tag={Link}>
                        Register
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>
                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                  <NavItem className="d-none d-lg-block ml-lg-4">
                    <Button
                      className="btn-neutral btn-icon"
                      color="default"
                      href="/fantasy-page"
                    >
                      <span className="btn-inner--icon">
                        <i className="fas fa-futbol mr-2" />
                      </span>
                      <span className="nav-link-inner--text ml-1">
                        Fantasy BFL
                      </span>
                    </Button>
                  </NavItem>
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }
}

export default Header;
