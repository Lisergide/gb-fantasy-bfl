/* eslint-disable */
import React from "react";
import axios from "axios";
import moment from "moment"

// reactstrap components
import {Button, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter, Label, CustomInput, FormGroup} from "reactstrap";

// antd components
import {DatePicker} from "antd";

class AddResultsModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      date: '',
      weekday: '',
      time: '',
      year: '',
      home: '',
      guest: '',
      hometeamgoals: 0,
      guestteamgoals: 0,
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
    this.setState({home: e.target.value})
  };

  handleChangeGuestTeam = (e) => {
    this.setState({guest: e.target.value})
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
                {/*datepicker*/}
              </Col>
              <Col>
                <FormGroup>
                  <Label for="team">Дома</Label>
                  <CustomInput bsSize="sm" type="select" name="team" id="team" value={this.state.team} onChange={this.handleChangeHomeTeam}>
                    <option value="">Выберите команду</option>
                    {this.state.teams.map(team =>
                      <option key={team.id} id={team.id} value={team.team}>{team.team}</option>
                    )}
                  </CustomInput>
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="team">Гости</Label>
                  <CustomInput bsSize="sm" type="select" name="team" id="team" value={this.state.team} onChange={this.handleChangeGuestTeam}>
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
            <Button color="primary" onClick={this.handleClickAddToLeagueTable}>Добавить</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

export default AddResultsModal;