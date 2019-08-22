import React from "react";
import OktaAuth from '@okta/okta-auth-js';
import {withAuth} from '@okta/okta-react';
// import axios from 'axios';

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

export default withAuth(class RegisterForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        firstName: '',
        lastName: '',
        email: '',
        login: '',
        password: '',
        sessionToken: null
      };
      this.oktaAuth = new OktaAuth({url: config.url});
      this.checkAuthentication = this.checkAuthentication.bind(this);
      this.checkAuthentication();
    }

    async checkAuthentication() {
      const sessionToken = await this.props.auth.getIdToken();
      if (sessionToken) {
        this.setState({sessionToken});
      }
    }

    componentDidUpdate() {
      this.checkAuthentication();
    }

    handleFirstNameChange = (e) => {
      this.setState({firstName: e.target.value});
    };

    handleLastNameChange = (e) => {
      this.setState({lastName: e.target.value});
    };

    handleEmailChange = (e) => {
      this.setState({email: e.target.value});
    };

    handleLoginChange = (e) => {
      this.setState({login: e.target.value});
    };

    handlePasswordChange = (e) => {
      this.setState({password: e.target.value});
    };

    handleSubmit = (e) => {
      e.preventDefault();
      fetch('https://fantasy-bfl.herokuapp.com/users', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.state)
      }).then(user => {
        this.oktaAuth.signIn({
          username: this.state.email,
          password: this.state.password
        })
          .then(res => this.setState({
            sessionToken: res.sessionToken
          }));
      })
        .catch(err => console.log);
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
              <div className="text-center">
                <Button className="btn-neutral btn-icon mr-4"
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
                <small>Регистрация учетной записи</small>
              </div>
              <Form role="form" onSubmit={this.handleSubmit}>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-hat-3"/>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Имя"
                           type="text"
                           value={this.state.firstName}
                           onChange={this.handleFirstNameChange}/>
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-hat-3"/>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Фамилия"
                           type="text"
                           value={this.state.lastName}
                           onChange={this.handleLastNameChange}/>
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83"/>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Email"
                           type="email"
                           value={this.state.email}
                           onChange={this.handleEmailChange}/>
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83"/>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Login"
                           type="email"
                           value={this.state.login}
                           onChange={this.handleLoginChange}/>
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open"/>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Пароль"
                           type="password"
                           autoComplete="off"
                           value={this.state.password}
                           onChange={this.handlePasswordChange}/>
                  </InputGroup>
                </FormGroup>
                <div className="text-muted font-italic">
                  <small>
                    сложность пароля:{" "}
                    <span className="text-success font-weight-700">
                      сложный
                    </span>
                  </small>
                </div>
                <Row className="my-4">
                  <Col xs="12">
                    <div className="custom-control custom-control-alternative custom-checkbox">
                      <input className="custom-control-input"
                             id="customCheckRegister"
                             type="checkbox"/>
                      <label className="custom-control-label"
                             htmlFor="customCheckRegister">
                      <span>
                        Я принимаю условия{" "}
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          Пользовательского соглашения
                        </a>
                      </span>
                      </label>
                    </div>
                  </Col>
                </Row>
                <div className="text-center">
                  <Button className="mt-4"
                          color="primary">
                    Создать аккаунт
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </>
      );
    }
  }
)
// export default withAuth(RegisterForm);