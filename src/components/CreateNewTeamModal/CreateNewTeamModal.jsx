/* eslint-disable */
import React from "react";
import axios from "axios";

import InputModalTable from "../InputModalTable/InputModalTable";

// reactstrap components
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Table,
  InputGroup,
  InputGroupAddon,
  Label,
  Input,
  FormGroup,
  CustomInput,
} from "reactstrap";

class CreateNewTeamModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      team: '',
      team_id: 0,
      games_played: 0,
      wins: 0,
      draws: 0,
      looses: 0,
      goales_scored: 0,
      goales_missed: 0,
      points: 0,
      teams: [],
      resultsTeams: []
    };
  }

  getTeams() {
    axios.get('https://fantasy-bfl.herokuapp.com/teams')
      .then(res => {
        const teams = res.data.teams;
        this.setState({teams})
      }).catch(function (error) {
        console.log(error);
      });
  }

  getResults() {
    axios.get('https://fantasy-bfl.herokuapp.com/league-table')
      .then(res => {
        const resultsTeams = res.data.league_table;
        this.setState({resultsTeams})
      }).catch(function (error) {
      console.log(error);
    });
  }

  componentDidMount() {
    this.getTeams();
    this.getResults();
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  handleChangeTeam = (e) => {
    const team = e.target.value;
    const index = e.target.options.selectedIndex;
    const optionElement = e.target.childNodes[index];
    const team_id = optionElement.getAttribute('id');

    const resultsTeamSelect = this.state.resultsTeams.filter(f => f.team_id !== +team_id);
    resultsTeamSelect.map(result =>
      this.setState({
        team: team,
        team_id: team_id,
        games_played: result.games_played,
        wins: result.wins,
        draws: result.draws,
        looses: result.looses,
        goales_scored: result.goales_scored,
        goales_missed: result.goales_missed,
        points: result.points
      }))
  };

  handleChangeGamesPlayed = (e) => {
    this.setState({games_played: e.target.value});
  };

  handleChangeWins = (e) => {
    this.setState({wins: e.target.value});
  };

  handleChangeDraws = (e) => {
    this.setState({draws: e.target.value});
  };

  handleChangeLooses = (e) => {
    this.setState({looses: e.target.value});
  };

  handleChangeGoalesScored = (e) => {
    this.setState({goales_scored: e.target.value});
  };

  handleChangeGoalesMissed = (e) => {
    this.setState({goales_missed: e.target.value});
  };

  handleChangePoints = (e) => {
    this.setState({points: e.target.value});
  };

  handleClickAddToLeagueTable = () => {
    axios({
      method: 'post',
      url: `https://fantasy-bfl.herokuapp.com/league-table/create`,
      data: {
        team_id: this.state.team_id,
        games_played: this.state.games_played,
        wins: this.state.wins,
        draws: this.state.draws,
        looses: this.state.looses,
        goales_scored: this.state.goales_scored,
        goales_missed: this.state.goales_missed,
        points: this.state.points,
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
    // console.log(this.state.teams);
    // console.log(this.state.resultsTeams);
    const {teams, team, team_id} = this.state;


    return (
      <div>
        <Button id="addTeam" color="primary" onClick={this.toggle}>{this.props.btnTitle}</Button>
        <Modal isOpen={this.state.modal} centered={true} fade={false} toggle={this.toggle}
               className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Добавить команду</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="team">Название команды</Label>
              <CustomInput type="select" name="team" id="team" value={this.state.team} onChange={this.handleChangeTeam}>
                <option value="">Выберите команду</option>
                {teams.map(team =>
                  <option key={team.id} id={team.id} value={team.team}>{team.team}</option>
                )}
              </CustomInput>
            </FormGroup>

            <InputModalTable />
            {/*<Table className="modal_table mt-3">*/}
            {/*  <tbody className="text-center">*/}
            {/*  <tr className="table-head">*/}
            {/*    <td title="Игры">И</td>*/}
            {/*    <td title="Победы">В</td>*/}
            {/*    <td title="Ничьи">Н</td>*/}
            {/*    <td title="Поражения">П</td>*/}
            {/*    <td title="Забито мячей">ЗМ</td>*/}
            {/*    <td title="Пропущено мячей">ПМ</td>*/}
            {/*    <td title="Очки">О</td>*/}
            {/*  </tr>*/}
            {/*  <tr>*/}
            {/*    <td>*/}
            {/*      <Input type="text" name="games_played" value={this.state.games_played}*/}
            {/*             onChange={this.handleChangeGamesPlayed}/>*/}
            {/*    </td>*/}
            {/*    <td>*/}
            {/*      <Input type="text" name="wins" value={this.state.wins} onChange={this.handleChangeWins}/>*/}
            {/*    </td>*/}
            {/*    <td>*/}
            {/*      <Input type="text" name="draws" value={this.state.draws} onChange={this.handleChangeDraws}/>*/}
            {/*    </td>*/}
            {/*    <td>*/}
            {/*      <Input type="text" name="looses" value={this.state.looses} onChange={this.handleChangeLooses}/>*/}
            {/*    </td>*/}
            {/*    <td>*/}
            {/*      <Input type="text" name="goales_scored" value={this.state.goales_scored}*/}
            {/*             onChange={this.handleChangeGoalesScored}/>*/}
            {/*    </td>*/}
            {/*    <td>*/}
            {/*      <Input type="text" name="goales_missed" value={this.state.goales_missed}*/}
            {/*             onChange={this.handleChangeGoalesMissed}/>*/}
            {/*    </td>*/}
            {/*    <td>*/}
            {/*      <Input type="text" name="points" value={this.state.points} onChange={this.handleChangePoints}/>*/}
            {/*    </td>*/}
            {/*  </tr>*/}
            {/*  </tbody>*/}
            {/*</Table>*/}
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

export default CreateNewTeamModal;