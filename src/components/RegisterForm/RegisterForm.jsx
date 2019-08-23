import React from 'react';
import OktaAuth from '@okta/okta-auth-js';
import {withAuth} from '@okta/okta-react';
// import axios from 'axios';

// okta config file
import config from '../../app.config';

// reactstrap components
import {
  Button,
  Card,
  // CardHeader,
  CardBody,
  // Form,
  Row,
  Col
} from "reactstrap";

// avality reactstrap validation component
import {AvForm, AvField, AvInput} from 'availity-reactstrap-validation';

export default withAuth(class RegisterForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        firstName: '',
        lastName: '',
        email: '',
        login: '',
        password: '',
        confirmPassword: '',
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
      this.setState({
        email: e.target.value,
        login: e.target.value,
      });
    };

    handlePasswordChange = (e) => {
      this.setState({password: e.target.value});
    };

    handleConfirmPasswordChange = (e) => {
      this.setState({confirmPassword: e.target.value});
    };

    handleSubmit = (e) => {
      // e.preventDefault();
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
            {/*<CardHeader className="bg-white pb-5">*/}
            {/*  <div className="text-muted text-center mb-3">*/}
            {/*    <small>Вход через социальные сети</small>*/}
            {/*  </div>*/}
            {/*  <div className="text-center">*/}
            {/*    <Button className="btn-neutral btn-icon mr-4"*/}
            {/*            color="default"*/}
            {/*            href="#pablo"*/}
            {/*            onClick={e => e.preventDefault()}>*/}
            {/*  <span className="btn-inner--icon mr-1">*/}
            {/*    <img alt="..."*/}
            {/*         src={require("assets/img/icons/common/vk.svg")}/>*/}
            {/*  </span>*/}
            {/*      <span className="btn-inner--text">Vk</span>*/}
            {/*    </Button>*/}
            {/*  </div>*/}
            {/*</CardHeader>*/}
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
                <small>Регистрация учетной записи</small>
              </div>
              <AvForm role="form" onValidSubmit={this.handleSubmit}>
                <div className="form_wrapper">
                  <span className="form_icon"><i className="ni ni-single-02"/></span>
                  <AvField
                    className="input-group-alternative mb-1"
                    name="firstName"
                    placeholder="Имя"
                    type="text"
                    value={this.state.firstName}
                    onChange={this.handleFirstNameChange}
                    validate={{
                      required: {value: true, errorMessage: 'Пожалуйста, заполните обязательное поле.'},
                      pattern: {
                        value: '^[A-Za-zА-Яа-яЁё0-9]+$',
                        errorMessage: 'Поле может содержать буквы русского/латинского алфавита и цифры.'
                      },
                    }}/>
                </div>
                <div className="form_wrapper">
                  <span className="form_icon"><i className="ni ni-single-02"/></span>
                  <AvField
                    className="input-group-alternative mb-1"
                    name="lastName"
                    placeholder="Фамилия"
                    type="text"
                    value={this.state.lastName}
                    onChange={this.handleLastNameChange}
                    validate={{
                      required: {value: true, errorMessage: 'Пожалуйста, заполните обязательное поле.'},
                      pattern: {
                        value: '^[A-Za-zА-Яа-яЁё0-9]+$',
                        errorMessage: 'Поле может содержать буквы русского/латинского алфавита и цифры.'
                      }
                    }}/>
                </div>
                <div className="form_wrapper">
                  <span className="form_icon"><i className="ni ni-email-83"/></span>
                  <AvField
                    className="input-group-alternative mb-1"
                    name="email"
                    placeholder="Email"
                    type="email"
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                    validate={{
                      required: {value: true, errorMessage: 'Пожалуйста, заполните обязательное поле.'},
                      pattern: {
                        value: '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$',
                        errorMessage: 'Поле email указано неверно.'
                      }
                    }}/>
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
                    onChange={this.handlePasswordChange}
                    validate={{
                      required: {value: true, errorMessage: 'Пожалуйста, заполните обязательное поле.'},
                      pattern: {
                        value: '^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$',
                        errorMessage: 'Пароль должен быть не менее 8 символов и состоять из комбинации ' +
                          'цифр, строчных и заглавных букв латинского алфавита.'
                      }
                    }}/>
                </div>
                <div className="form_wrapper">
                  <span className="form_icon"><i className="ni ni-lock-circle-open"/></span>
                  <AvField
                    className="input-group-alternative mb-1"
                    name="confirmPassword"
                    placeholder="Подтверждение пароля"
                    type="password"
                    autoComplete="off"
                    value={this.state.confirmPassword}
                    onChange={this.handleConfirmPasswordChange}
                    validate={{
                      required: {value: true, errorMessage: 'Пожалуйста, заполните обязательное поле.'},
                      pattern: {
                        value: '^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$',
                        errorMessage: 'Пароль должен быть не менее 8 символов и состоять из комбинации ' +
                          'цифр, строчных и заглавных букв латинского алфавита.'
                      },
                      match: {value: 'password', errorMessage: "Пароли не совпадают"}
                    }}/>
                </div>
                {/*<div className="text-muted font-italic">*/}
                {/*  <small>*/}
                {/*    сложность пароля:{" "}*/}
                {/*    <span className="text-success font-weight-700">*/}
                {/*    сложный*/}
                {/*    </span>*/}
                {/*  </small>*/}
                {/*</div>*/}
                <Row className="my-4">
                  <Col xs="12">
                    <div className="custom-control custom-control-alternative custom-checkbox">
                      <AvInput className="custom-control-input"
                               name="customCheckRegister"
                               id="customCheckRegister"
                               type="checkbox"
                               required/>
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
              </AvForm>
            </CardBody>
          </Card>
        </>
      );
    }
  }
)
// export default withAuth(RegisterForm);