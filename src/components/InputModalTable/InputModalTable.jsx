import React from "react";
import {Table, Input} from "reactstrap";

// ant-design components
import {InputNumber} from "antd";

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

  handleChangeGamesPlayed = (value) => {
    console.log(value);
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

  render() {
    return (
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
    )
  }

}

export default InputModalTable;