import React, {Component} from "react";
import {Link} from "react-router-dom";

// reactstrap components
import {Button} from "reactstrap";

// core components
import AdminLeagueTableRow from "./AdminLeagueTableRow";
import AdminLeagueTableBody from "./AdminLeagueTableBody";

class AdminLeagueTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [],
    }
  }

  fetchData() {
    fetch('https://fantasy-bfl.herokuapp.com/league-table/')
      .then((response) => response.json())
      .then((responseJson) => {
        const rows = [];
        // console.log(responseJson);
        responseJson.league_table.map(
          (item, index) => {
            const {id, team, team_id, games_played, wins, draws, looses, goales_scored, goales_missed, points} = item;

            return (
              rows.push(
                <AdminLeagueTableRow key={index} id={id} team_id={team_id} position={index} team={team}
                                     games_played={games_played} wins={wins} draws={draws} looses={looses}
                                     goales_scored={goales_scored} goales_missed={goales_missed} points={points}/>
              )
            )
          }
        );
        this.setState({
          rows: rows
        })
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <div>
        <AdminLeagueTableBody>
          {this.state.rows}
        </AdminLeagueTableBody>
        <Button tag={Link} to="/control-page" outline color="primary">Вернуться назад</Button>
      </div>
    )
  };

}

export default AdminLeagueTable;