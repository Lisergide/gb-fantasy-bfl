import React, {Component} from "react";

import LeagueTableRow from "./LeagueTableRow";
import LeagueTableBody from "./LeagueTableBody";

class LeagueTable extends Component {
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
        console.log(responseJson);
        responseJson.league_table.map(
          (item, index) => {
            const {team, team_id, games_played, wins, draws, looses, goales_scored, goales_missed, points} = item;

            return (
              rows.push(
                <LeagueTableRow key={index} team_id={team_id} position={index} team={team} gamesPlayed={games_played} wins={wins} draws={draws} looses={looses} goalesScored={goales_scored} goalesMissed={goales_missed} points={points} />
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
      <LeagueTableBody>
        {this.state.rows}
      </LeagueTableBody>
    )
  };

}

export default LeagueTable;