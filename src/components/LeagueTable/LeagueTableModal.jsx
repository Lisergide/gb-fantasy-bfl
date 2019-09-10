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
  Input
} from "reactstrap";

// ant-design components
import {InputNumber} from "antd";

// import 'antd/dist/antd.css';

class LeagueTableModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      team_id: 0,
      team: this.props.team,
      games_played: this.props.games_played,
      wins: this.props.wins,
      draws: this.props.draws,
      looses: this.props.looses,
      goales_scored: this.props.goales_scored,
      goales_missed: this.props.goales_missed,
      points: this.props.points,
      resultsTeams: []
    };
  }

  async componentDidMount() {
    await axios.get('https://fantasy-bfl.herokuapp.com/league-table')
      .then(res => {
        const resultsTeams = res.data.league_table;
        this.setState({resultsTeams})
      }).catch(function (error) {
        console.log(error);
      });
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  handleChangeTeam = (e) => {
    this.setState({team: e.target.value});
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

  handleClickUpdateTeamName = () => {
    axios({
      method: 'put',
      url: `https://fantasy-bfl.herokuapp.com/teams/${this.props.id}`,
      data: {
        team: this.state.team,
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
    })
  };

  handleClickEditTeam = async () => {
    await axios({
      method: 'put',
      url: `https://fantasy-bfl.herokuapp.com/league-table/${this.props.id}`,
      data: {
        team_id: this.props.team_id,
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
    })
  };

  handleClickDeleteTeam = async () => {
    await axios({
      method: 'post',
      url: `https://fantasy-bfl.herokuapp.com/league-table/delete`,
      data: {
        id: this.props.id,
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
    })
  };

  render() {

    return (
      <div>
        <a href="javascript:void(0)" onClick={this.toggle}>{this.props.team}</a>
        <Modal isOpen={this.state.modal} centered={true} fade={false} toggle={this.toggle}
               className={this.props.className}>
          <ModalHeader toggle={this.toggle}>
            <InputGroup>
              <Input type="text" name="team" value={this.state.team} onChange={this.handleChangeTeam}/>
            <InputGroupAddon addonType="append">
              <Button color="success" onClick={this.handleClickUpdateTeamName}><i className="fas fa-check"/></Button>
            </InputGroupAddon>
            </InputGroup>
          </ModalHeader>
          <ModalBody>
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
            <Button className="float-right" color="danger" onClick={this.handleClickDeleteTeam}>Удалить команду</Button>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Отменить</Button>{' '}
            <Button color="primary" onClick={this.handleClickEditTeam}>Сохранить</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

export default LeagueTableModal;