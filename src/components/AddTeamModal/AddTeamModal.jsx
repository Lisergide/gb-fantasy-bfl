/* eslint-disable */
import React from "react";
import axios from "axios";
import {setupCache} from "axios-cache-adapter";

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

// ant-design components
import {InputNumber} from "antd";
// import 'antd/dist/antd.css';
// axios-cache-adapter

const cache = setupCache({
  maxAge: 15 * 60 * 1000,
});

const api = axios.create({
  adapter: cache.adapter
});

class AddTeamModal extends React.Component {
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
      resultsTeams: [],
      teamFilterNoAdd: []
    };
  }

  getTeams() {
    api.get('https://fantasy-bfl.herokuapp.com/teams')
      .then(res => {
        const teams = res.data.teams;
        this.setState({teams});
        this.getResults();
      }).catch(function (error) {
      console.log(error);
    });
  }

  getResults() {
    api.get('https://fantasy-bfl.herokuapp.com/league-table')
      .then(async res => {
        const resultsTeams = res.data.league_table;
        this.setState({
          resultsTeams,
        });
        this.teamFilter();
      }).catch(function (error) {
      console.log(error);
    });
  }

  teamFilter() {
    const teamName = this.state.resultsTeams.map(m => m.team);
    const teamFilterNoAdd = this.state.teams.filter(f => teamName.includes(f.team) === false);
    this.setState({
      teamFilterNoAdd
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

  handleChangeTeam = (e) => {
    const team = e.target.value;
    const index = e.target.options.selectedIndex;
    const optionElement = e.target.childNodes[index];
    const team_id = optionElement.getAttribute('id');
    this.setState({
      team: team,
      team_id: team_id,
    })
  };

  handleChangeGamesPlayed = (value) => {
    this.setState({games_played: value});
  };

  handleChangeWins = (value) => {
    this.setState({wins: value});
  };

  handleChangeDraws = (value) => {
    this.setState({draws: value});
  };

  handleChangeLooses = (value) => {
    this.setState({looses: value});
  };

  handleChangeGoalesScored = (value) => {
    this.setState({goales_scored: value});
  };

  handleChangeGoalesMissed = (value) => {
    this.setState({goales_missed: value});
  };

  handleChangePoints = (value) => {
    this.setState({points: value});
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
    const { teamFilterNoAdd } = this.state;

    return (
      <div>
        <Button id="addTeam" color="success" onClick={this.toggle}>{this.props.btnTitle}</Button>
        <Modal isOpen={this.state.modal} centered={true} fade={false} toggle={this.toggle}
               className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Добавить команду</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="team">Название команды</Label>
              <CustomInput type="select" name="team" id="team" value={this.state.team} onChange={this.handleChangeTeam}>
                <option value="">Выберите команду</option>
                {teamFilterNoAdd.map(team =>
                  <option key={team.id} id={team.id} value={team.team}>{team.team}</option>
                )}
              </CustomInput>
            </FormGroup>
            <Table className="modal_table">
              <tbody className="text-center">
              <tr className="table-head">
                <td title="Игры">И</td>
                <td title="Победы">В</td>
                <td title="Ничьи">Н</td>
                <td title="Поражения">П</td>
                <td title="Забито мячей">ЗМ</td>
                <td title="Пропущено мячей">ПМ</td>
                <td title="Очки">О</td>
              </tr>
              <tr>
                <td>
                  <InputNumber type="number" name="games_played" min={0} value={this.state.games_played}
                               onChange={this.handleChangeGamesPlayed}/>
                </td>
                <td>
                  <InputNumber type="number" name="wins" min={0} value={this.state.wins}
                               onChange={this.handleChangeWins}/>
                </td>
                <td>
                  <InputNumber type="number" name="draws" min={0} value={this.state.draws}
                               onChange={this.handleChangeDraws}/>
                </td>
                <td>
                  <InputNumber type="number" name="looses" min={0} value={this.state.looses}
                               onChange={this.handleChangeLooses}/>
                </td>
                <td>
                  <InputNumber type="number" name="goales_scored" min={0} value={this.state.goales_scored}
                               onChange={this.handleChangeGoalesScored}/>
                </td>
                <td>
                  <InputNumber type="number" name="goales_missed" min={0} value={this.state.goales_missed}
                               onChange={this.handleChangeGoalesMissed}/>
                </td>
                <td>
                  <InputNumber type="number" name="points" value={this.state.points}
                               onChange={this.handleChangePoints}/>
                </td>
              </tr>
              </tbody>
            </Table>
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

export default AddTeamModal;