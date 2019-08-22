import React from "react";
import {Link} from "react-router-dom";
import {withAuth} from '@okta/okta-react';
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";

// reactstrap components
import {
  // Button,
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

export default withAuth(class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {authenticated: null};
    this.checkAuthentication = this.checkAuthentication.bind(this);
    this.checkAuthentication();
  }

    async checkAuthentication() {
      const authenticated = await this.props.auth.isAuthenticated();
      if (authenticated !== this.state.authenticated) {
        this.setState({authenticated});
      }
    };

    componentDidMount() {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
  }

  componentDidUpdate() {
    this.checkAuthentication();
  }

  render() {
    // if (this.state.authenticated === null) return null;
    return (
      <>
        <header className="header-global">
          <Navbar className="navbar-main navbar-transparent navbar-light headroom"
                  expand="lg"
                  id="navbar-main">
            <Container>
              <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                <img alt="..."
                     src={require("assets/img/brand/bfl_logo_header.png")}/>
              </NavbarBrand>
              <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon"/>
              </button>
              <UncontrolledCollapse navbar toggler="#navbar_global">
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      <Link to="/">
                        <img alt="..."
                             src={require("assets/img/brand/bfl_logo_header_blue.png")}/>
                      </Link>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global">
                        <span/>
                        <span/>
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav className="navbar-nav-hover align-items-lg-center"
                     navbar>
                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className="fas fa-futbol d-lg-none mr-1"/>
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
                      <i className="fas fa-running d-lg-none mr-1"/>
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
                      <i className="fas fa-award d-lg-none mr-1"/>
                      <span className="nav-link-inner--text">О Лиге</span>
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem to="/" tag={Link}>
                        Новости
                      </DropdownItem>
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
                    <NavLink href="/" target="_blank">
                      <i className="far fa-images d-lg-none mr-1"/>
                      <span className="nav-link-inner--text">
                        Медиа
                      </span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/fantasy-page">
                      <i className="fab fa-fantasy-flight-games d-lg-none mr-1"/>
                      <span className="nav-link-inner--text">
                        Fantasy
                      </span>
                    </NavLink>
                  </NavItem>
                </Nav>
                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                  {this.state.authenticated
                    ? <>
                      <NavItem>
                        <NavLink href="javascript:void(0)" onClick={() => {this.props.auth.logout()}}>
                          <i className="fas fa-sign-out-alt d-lg-none mr-1"/>
                          <span className="nav-link-inner--text">Выход</span>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink to="/profile-page" tag={Link}>
                          <i className="fas fa-user d-lg-none mr-1"/>
                          <span className="nav-link-inner--text">Профиль</span>
                        </NavLink>
                      </NavItem>
                    </>
                    : <>
                      <NavItem>
                        <NavLink href="javascript:void(0)" onClick={() => {this.props.auth.login()}}>
                          <i className="fas fa-sign-in-alt d-lg-none mr-1"/>
                          <span className="nav-link-inner--text">Вход</span>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink to="/register-page" tag={Link}>
                          <i className="far fa-edit d-lg-none mr-1"/>
                          <span className="nav-link-inner--text">Регистрация</span>
                        </NavLink>
                      </NavItem>
                    </>
                  }
                </Nav>
                {/*<Nav className="align-items-lg-center ml-lg-auto" navbar>*/}
                {/*  <NavItem className="d-none d-lg-block ml-lg-4">*/}
                {/*    <Button*/}
                {/*      className="btn-neutral btn-icon"*/}
                {/*      color="default"*/}
                {/*      href="/fantasy-page"*/}
                {/*    >*/}
                {/*      <span className="btn-inner--icon">*/}
                {/*        <i className="fas fa-futbol mr-2"/>*/}
                {/*      </span>*/}
                {/*      <span className="nav-link-inner--text ml-1">*/}
                {/*        Fantasy BFL*/}
                {/*      </span>*/}
                {/*    </Button>*/}
                {/*  </NavItem>*/}
                {/*</Nav>*/}
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }
}
)
// export default withAuth(Header);
