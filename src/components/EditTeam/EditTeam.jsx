import React from "react";

// reactstrap component
import {Button, Input, InputGroup, InputGroupAddon, Label} from "reactstrap";
import axios from "axios";

class EditTeam extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      team: this.props.team,
    }
  }

  handleChangeTeam = (e) => {
    this.setState({team: e.target.value});
  };

  handleClickEditTeamName = () => {
    axios({
      method: 'put',
      url: `https://fantasy-bfl.herokuapp.com/teams/${this.props.team_id}`,
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

  render() {
    console.log(this.props.team);
    return (
      <div>
        <Label for="team">Изменение команды</Label>
        <InputGroup>
          <Input type="text" name="team" id="team" value={this.props.team} onChange={this.handleChangeTeam} />
          <InputGroupAddon addonType="append">
            <Button color="danger" onClick={this.handleClickEditTeamName}>Изменить</Button>
          </InputGroupAddon>
        </InputGroup>
      </div>
    )
  }
}

export default EditTeam;