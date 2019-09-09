/* eslint-disable */
import React from "react";
import axios from "axios";

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

  componentDidMount() {
    this.getTeams();

  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  handleChangeTeam = (e) => {
    this.setState({team: e.target.value});

    // const team = e.target.value;
    // const index = e.target.options.selectedIndex;
    // const optionElement = e.target.childNodes[index];
    // const team_id = optionElement.getAttribute('id');

    // const resultsTeamSelect = this.state.resultsTeams.filter(f => f.team_id === +team_id);
    // resultsTeamSelect.map(result =>
    //   this.setState({
    //     team: team,
    //     team_id: team_id,
    //     games_played: result.games_played,
    //     wins: result.wins,
    //     draws: result.draws,
    //     looses: result.looses,
    //     goales_scored: result.goales_scored,
    //     goales_missed: result.goales_missed,
    //     points: result.points
    //   }))
  };

  handleClickCreateTeam = () => {
    axios({
      method: 'post',
      url: `https://fantasy-bfl.herokuapp.com/teams/create`,
      data: {
        team: this.state.team,
      }
    }).then(res => {
      if (res.status === 200) {
        // this.setState({
        //   modal: false,
        // });
        // window.location.reload(true);
        try {
          this.getTeams();
        } catch (err) {
          console.log(err);
        }

      }
      console.log(res);
      console.log(res.status);
    });
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



  handleClickAddTeam = () => {
    const team = this.state.team;
    const teams = this.state.teams;

    const teamId = teams.filter(f => f.team === team);
    teamId.map(result =>
      this.setState({
        team_id: result.id
      }));
    console.log(this.state.team_id);
    // resultsTeamSelect.map(result =>
    //   this.setState({
    //     team: team,
    //     team_id: team_id,
    //     games_played: result.games_played,
    //     wins: result.wins,
    //     draws: result.draws,
    //     looses: result.looses,
    //     goales_scored: result.goales_scored,
    //     goales_missed: result.goales_missed,
    //     points: result.points
    //   }))
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
            <Label for="team">Название команды</Label>
            <InputGroup>
              <Input type="text" name="team" id="team" value={this.state.team} onChange={this.handleChangeTeam}/>
              <InputGroupAddon addonType="append">
                <Button color="success" onClick={this.handleClickCreateTeam}>Создать</Button>
              </InputGroupAddon>
            </InputGroup>
            <Table className="modal_table mt-3">
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
                  <Input type="text" name="games_played" value={this.state.games_played}
                         onChange={this.handleChangeGamesPlayed}/>
                </td>
                <td>
                  <Input type="text" name="wins" value={this.state.wins} onChange={this.handleChangeWins}/>
                </td>
                <td>
                  <Input type="text" name="draws" value={this.state.draws} onChange={this.handleChangeDraws}/>
                </td>
                <td>
                  <Input type="text" name="looses" value={this.state.looses} onChange={this.handleChangeLooses}/>
                </td>
                <td>
                  <Input type="text" name="goales_scored" value={this.state.goales_scored}
                         onChange={this.handleChangeGoalesScored}/>
                </td>
                <td>
                  <Input type="text" name="goales_missed" value={this.state.goales_missed}
                         onChange={this.handleChangeGoalesMissed}/>
                </td>
                <td>
                  <Input type="text" name="points" value={this.state.points} onChange={this.handleChangePoints}/>
                </td>
              </tr>
              </tbody>
            </Table>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Отменить</Button>{' '}
            <Button color="primary" onClick={this.handleClickAddTeam}>Сохранить</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

export default CreateNewTeamModal;