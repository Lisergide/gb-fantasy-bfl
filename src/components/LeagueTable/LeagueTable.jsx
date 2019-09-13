import React, {Component} from "react";

// core components
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
        // console.log(responseJson);
        responseJson.league_table.map(
          (item, index) => {
            const {id, team, team_id, games_played, points} = item;

            return (
              rows.push(
                <LeagueTableRow key={index} id={id} team_id={team_id} position={index} team={team}
                                     games_played={games_played} points={points}/>
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
        <LeagueTableBody>
          {this.state.rows}
        </LeagueTableBody>
      </div>
    )
  };

}

export default LeagueTable;