import React from "react";
import {Redirect} from "react-router";
import {withAuth} from '@okta/okta-react';

// reactstrap components
import {
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import LoginForm from "components/LoginForm/LoginForm";

export default withAuth(class Login extends React.Component {
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
    }

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    // this.refs.main.scrollTop = 0;
  }

  componentDidUpdate() {
    this.checkAuthentication();
  }



  render() {
    if (this.state.authenticated === null) return null;
    return this.state.authenticated
      ? <Redirect to={{pathname: "/profile-page"}}/>
      : <>
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
                <Col lg="5">
                  <LoginForm/>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        <Footer/>
      </>
  }
}
)
// export default withAuth(Login);
