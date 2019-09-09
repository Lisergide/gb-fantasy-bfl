import React from "react";
import {Table, Input} from "reactstrap";


class InputModalTable extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      games_played: 0,
      wins: 0,
      draws: 0,
      looses: 0,
      goales_scored: 0,
      goales_missed: 0,
      points: 0,
    }
  }

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

  render() {
    return (
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
    )
  }

}

export default InputModalTable;