/* eslint-disable */
import React from "react";
import axios from "axios";
import moment from "moment"

// reactstrap components
import {
  Button,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  CustomInput,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Input
} from "reactstrap";

// antd components
// import {InputNumber} from "antd";

// react plugin used to create datetimepicker
import Datetime from "react-datetime";

// core components
import Datepicker from "../Datepicker/Datepicker";
import {InputNumber} from "antd";

class AddResultsModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      date: '',
      time: '',
      home: '',
      homeTeamId: 0,
      guest: '',
      guestTeamId: 0,
      homeTeamGoals: 0,
      guestTeamGoals: 0,
      teams: [],
    };
  }

  getTeams() {
    axios.get('https://fantasy-bfl.herokuapp.com/teams')
      .then(res => {
        const teams = res.data.teams;
        this.setState({teams});
      }).catch(function (error) {
      console.log(error);
    });
  }

  componentDidMount() {
    this.getTeams();
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  handleChangeHomeTeam = (e) => {
    const home = e.target.value;
    const index = e.target.options.selectedIndex;
    const optionElement = e.target.childNodes[index];
    const homeTeamId = optionElement.getAttribute('id');
    console.log(homeTeamId);
    this.setState({
      home: home,
      homeTeamId: homeTeamId,
    });
  };

  handleChangeGuestTeam = (e) => {
    const guest = e.target.value;
    const index = e.target.options.selectedIndex;
    const optionElement = e.target.childNodes[index];
    const guestTeamId = optionElement.getAttribute('id');
    console.log(guestTeamId);
    this.setState({
      guest: guest,
      guestTeamId: guestTeamId,
    });
  };

  handleChangeTime = (moment, e) => {
    this.setState({time: moment.format("LT")})
  };

  handleChangeDate = (moment) => {
    this.setState({date: moment.toDate("D MMMM")});
  };

  handleChangeHomeGoals = (value) => {
    this.setState({homeTeamGoals: value})
  };

  handleChangeGuestGoals = (value) => {
    this.setState({guestTeamGoals: value})
  };

  handleClickAddResults = () => {
    axios({
      method: 'post',
      url: 'https://fantasy-bfl.herokuapp.com/results/create',
      data: {
        date: this.state.date,
        time: this.state.time,
        homeTeamId: this.state.homeTeamId,
        guestTeamId: this.state.guestTeamId,
        homeTeamGoals: this.state.homeTeamGoals,
        guestTeamGoals: this.state.guestTeamGoals,
      }
    }).then(res => {
      if (res.status === 200) {
        this.setState({
          modal: false,
        });
        window.location.reload(true);
      }
      console.log(res);
      console.log(res.status);
    });
  };

  render() {
    return (
      <div>
        <Button id="addResults" color="success" onClick={this.toggle}>{this.props.btnTitle}</Button>
        <Modal isOpen={this.state.modal} centered={true} fade={false} toggle={this.toggle}
               className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Добавить результат матча</ModalHeader>
          <ModalBody>
            <Row>
              <Col>
                <FormGroup>
                  <Label>Время</Label>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-calendar-grid-58"/>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Datetime
                      locale="ru"
                      dateFormat={false}
                      timeFormat={true}
                      inputProps={{
                        placeholder: "Время"
                      }}
                      value={this.state.time}
                      onChange={moment => this.handleChangeTime(moment)} />
                  </InputGroup>
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label>Дата</Label>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-calendar-grid-58"/>
                      </InputGroupText>
                    </InputGroupAddon>
                  <Datetime
                    locale="ru"
                    dateFormat={"D MMMM"}
                    timeFormat={false}
                    inputProps={{
                      placeholder: "Дата"
                    }}
                    value={this.state.date}
                    onChange={moment => this.handleChangeDate(moment)} />
                  </InputGroup>
                </FormGroup>
              </Col>
              </Row>
            <Row>
              <Col xs="4" align="center">
                <FormGroup>
                  <Label for="team">Дома</Label>
                  <CustomInput bsSize="sm" type="select" name="team" id="team" value={this.state.team}
                               onChange={this.handleChangeHomeTeam}>
                    <option value="">Выберите команду</option>
                    {this.state.teams.map(team =>
                      <option key={team.id} id={team.id} value={team.team}>{team.team}</option>
                    )}
                  </CustomInput>
                </FormGroup>
              </Col>
              <Col xl="4" xs="4" align="center">
                <FormGroup>
                  <Label className="mb-2">Счет</Label><br/>
                    <InputNumber size="sm" type="number" name="hometeamgoals" min={0} value={this.state.homeTeamGoals}
                                 onChange={this.handleChangeHomeGoals}/>
                                 <span> : </span>
                  <InputNumber bsSize="sm" type="number" name="guestteamgoals" min={0} value={this.state.guestTeamGoals}
                               onChange={this.handleChangeGuestGoals}/>
                </FormGroup>
              </Col>
              <Col xs="4" align="center">
                <FormGroup>
                  <Label for="team">Гости</Label>
                  <CustomInput bsSize="sm" type="select" name="team" id="team" value={this.state.team}
                               onChange={this.handleChangeGuestTeam}>
                    <option value="">Выберите команду</option>
                    {this.state.teams.map(team =>
                      <option key={team.id} id={team.id} value={team.team}>{team.team}</option>
                    )}
                  </CustomInput>
                </FormGroup>
              </Col>
            </Row>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Отменить</Button>{' '}
            <Button color="primary" onClick={this.handleClickAddResults}>Добавить</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

export default AddResultsModal;