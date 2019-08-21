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
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col
} from "reactstrap";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionToken: null,
      error: null,
      email: '',
      password: ''
    };
    this.oktaAuth = new OktaAuth({url: config.url});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.oktaAuth.signIn({
      email: this.state.email,
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

  handleEmailChange = (e) => {
    this.setState({email: e.target.value});
  };

  handlePasswordChange = (e) => {
    this.setState({password: e.target.value});
  };

  render() {
    if (this.state.sessionToken) {
      this.props.auth.redirect({sessionToken: this.state.sessionToken});
      return null;
    }
    return (
      <>
        <Card className="bg-secondary shadow border-0">
          <CardHeader className="bg-white pb-5">
            <div className="text-muted text-center mb-3">
              <small>Вход через социальные сети</small>
            </div>
            <div className="btn-wrapper text-center">
              <Button className="btn-neutral btn-icon"
                      color="default"
                      href="#pablo"
                      onClick={e => e.preventDefault()}>
                <span className="btn-inner--icon mr-1">
                  <img alt="..."
                       src={require("assets/img/icons/common/vk.svg")}/>
                </span>
                <span className="btn-inner--text">Vk</span>
              </Button>
            </div>
          </CardHeader>
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <small>Войти используя учетные данные</small>
            </div>
            <Form role="form" onSubmit={this.handleSubmit}>
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83"/>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email"
                    type="email"
                    value={this.state.email}
                    onChange={this.handleEmailChange}/>
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open"/>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Пароль"
                    type="password"
                    autoComplete="off"
                    value={this.state.password}
                    onChange={this.handlePasswordChange}/>
                </InputGroup>
              </FormGroup>
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
                        color="primary"
                        type="submit">
                  Войти
                </Button>
              </div>
            </Form>
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

export default withAuth(LoginForm);