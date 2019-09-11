import React from "react";
import axios from "axios";

// reactstrap component
import {Button, CustomInput, InputGroup, InputGroupAddon, Label} from "reactstrap";

class DeleteTeam extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: [],
      team: '',
      team_id: 0
    }
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

  handleChangeTeam = (e) => {
    const team = e.target.value;
    const index = e.target.options.selectedIndex;
    const optionElement = e.target.childNodes[index];
    const team_id = optionElement.getAttribute('id');
    this.props.getTeamName(e.target.value);
    this.setState({
      team: team,
      team_id: team_id,
    });
  };

  handleClickDeleteTeam = () => {
  axios({
    method: 'post',
    url: 'https://fantasy-bfl.herokuapp.com/teams/delete',
    data: {
      id: this.state.team_id
    }
  }).then(res => {
    if (res.status === 200) {
      window.location.reload(true);
    }
    console.log(res);
    console.log(res.status);
  })
};

  render() {
    return (
      <div>
        <Label for="team">Удаление команды</Label>
        <InputGroup>
          <CustomInput className="delete-team__select" type="select" name="team" id="team" value={this.state.team} onChange={this.handleChangeTeam}>
            <option value="">Выберите команду</option>
            {this.state.teams.map(team =>
              <option key={team.id} id={team.id} value={team.team}>{team.team}</option>
            )}
          </CustomInput>
          <InputGroupAddon addonType="append">
            <Button color="danger" onClick={this.handleClickDeleteTeam}>Удалить</Button>
          </InputGroupAddon>
        </InputGroup>
      </div>
    )
  }
}

export default DeleteTeam;