import React from "react";
import OktaAuth from "@okta/okta-auth-js";
import {withAuth} from '@okta/okta-react';

// okta config file
import config from '../../app.config';

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Row,
  Col
} from "reactstrap";

// avality reactstrap validation component
import {AvForm, AvField} from 'availity-reactstrap-validation';

export default withAuth(class LoginForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        sessionToken: null,
        error: null,
        username: '',
        password: ''
      };
      this.oktaAuth = new OktaAuth({url: config.url});
    }

    handleSubmit = (e) => {
      this.oktaAuth.signIn({
        username: this.state.username,
        password: this.state.password
      })
        .then(res => this.setState({
          sessionToken: res.sessionToken
        }))
        .catch(err => {
          this.setState({error: err.message});
          console.log(err.statusCode + 'error', err)
        });
    };

    handleUsernameChange = (e) => {
      this.setState({username: e.target.value});
    };

    handlePasswordChange = (e) => {
      this.setState({password: e.target.value});
    };

    render() {
      if (this.state.sessionToken) {
        this.props.auth.redirect({sessionToken: this.state.sessionToken});
        return null;
      }

      const errorMessage = this.state.error ?
        <span className="text-center text-danger">{this.state.error}</span> :
        null;

      return (
        <>
          <Card className="bg-secondary shadow border-0">
            {/*<CardHeader className="bg-white pb-5">*/}
            {/*  <div className="text-muted text-center mb-3">*/}
            {/*    <small>Вход через социальные сети</small>*/}
            {/*  </div>*/}
            {/*  <div className="btn-wrapper text-center">*/}
            {/*    <Button className="btn-neutral btn-icon"*/}
            {/*            color="default"*/}
            {/*            href="#pablo"*/}
            {/*            onClick={e => e.preventDefault()}>*/}
            {/*      <span className="btn-inner--icon mr-1">*/}
            {/*        <img alt="..."*/}
            {/*             src={require("assets/img/icons/common/vk.svg")}/>*/}
            {/*      </span>*/}
            {/*      <span className="btn-inner--text">Vk</span>*/}
            {/*    </Button>*/}
            {/*    {errorMessage}*/}
            {/*  </div>*/}
            {/*</CardHeader>*/}
            <CardHeader>{errorMessage}</CardHeader>
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
                <small>Войти используя учетные данные</small>
              </div>
              <AvForm role="form" onValidSubmit={this.handleSubmit}>
                <div className="form_wrapper">
                  <span className="form_icon"><i className="ni ni-single-02"/></span>
                  <AvField
                    className="input-group-alternative mb-1"
                    name="username"
                    placeholder="Username"
                    type="text"
                    value={this.state.username}
                    onChange={this.handleUsernameChange}/>
                </div>
                <div className="form_wrapper">
                  <span className="form_icon"><i className="ni ni-lock-circle-open"/></span>
                  <AvField
                    className="input-group-alternative mb-1"
                    name="password"
                    placeholder="Пароль"
                    type="password"
                    autoComplete="off"
                    value={this.state.password}
                    onChange={this.handlePasswordChange}/>
                </div>
                <div className="custom-control custom-control-alternative custom-checkbox">
                  <input className="custom-control-input"
                         id=" customCheckLogin"
                         type="checkbox"/>
                  <label className="custom-control-label"
                         htmlFor=" customCheckLogin">
                    <span>Запомнить меня</span>
                  </label>
                </div>
                <div className="text-center">
                  <Button className="my-4"
                          color="primary">
                    Войти
                  </Button>
                </div>
              </AvForm>
            </CardBody>
          </Card>
          <Row className="mt-3">
            <Col xs="6">
              <a className="text-light"
                 href="#pablo"
                 onClick={e => e.preventDefault()}>
                <small>Забыли пароль?</small>
              </a>
            </Col>
            <Col className="text-right" xs="6">
              <a className="text-light"
                 href="#pablo"
                 onClick={e => e.preventDefault()}>
                <small>Создать новый аккаунт</small>
              </a>
            </Col>
          </Row>
        </>
      );
    }
  }
)
// export default withAuth(LoginForm);