/* eslint-disable */
import React from "react";
import axios from "axios";

// reactstrap components
import {
  Button,
  InputGroup,
  InputGroupAddon,
  Label,
  Input,
} from "reactstrap";

class CreateNewTeam extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      team: '',
    };
  }

  handleChangeTeam = (e) => {
    this.setState({team: e.target.value});
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
        // window.location.reload(true);
      }
      console.log(res);
      console.log(res.status);
    });
  };

  render() {
    return (
      <div>
            <Label for="team">Название команды</Label>
            <InputGroup>
              <Input type="text" name="team" id="team" value={this.state.team} onChange={this.handleChangeTeam}/>
              <InputGroupAddon addonType="append">
                <Button color="success" onClick={this.handleClickCreateTeam}>Создать</Button>
              </InputGroupAddon>
            </InputGroup>
      </div>
    )
  }
}

export default CreateNewTeam;