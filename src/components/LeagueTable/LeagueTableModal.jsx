/* eslint-disable */
import React from "react";
import axios from "axios";

// reactstrap components
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Table, Input} from "reactstrap";

class LeagueTableModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      team_id: 0,
      games_played: 0,
      wins: 0,
      draws: 0,
      looses: 0,
      goales_scored: 0,
      goales_missed: 0,
      points: 0,
    };
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
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

  handleClickEditTeam = async () => {
    await axios({
      method: 'put',
      url: `https://fantasy-bfl.herokuapp.com/league-table/${this.props.team_id}`,
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
        id: this.props.team_id,
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
          <ModalHeader toggle={this.toggle}>{this.props.team}</ModalHeader>
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
                    <Input type="text" name="games_played" value={this.state.games_played} onChange={this.handleChangeGamesPlayed} />
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
                  <Input type="text" name="goales_scored" value={this.state.goales_scored} onChange={this.handleChangeGoalesScored}/>
                </td>
                <td>
                  <Input type="text" name="goales_missed" value={this.state.goales_missed} onChange={this.handleChangeGoalesMissed}/>
                </td>
                <td>
                  <Input type="text" name="points" value={this.state.points} onChange={this.handleChangePoints}/>
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