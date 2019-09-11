import React, {Component} from "react";
import axios from "axios";

import ResultsTableRow from "./ResultsTableRow";


class ResultsTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: []
    };
  }

  getData() {
    axios.get('https://fantasy-bfl.herokuapp.com/results')
      .then(res => {
        const rows = [];
        const results = res.data.results;

        results.map((item, index) => {
          const {date, time, home, guest, hometeamgoals, guestteamgoals} = item;

          return (
            rows.push(
              <ResultsTableRow key={index}
                               position={index}
                               date={date}
                               time={time}
                               home={home}
                               guest={guest}
                               hometeamgoals={hometeamgoals}
                               guestteamgoals={guestteamgoals}/>
            )
          )
        });
        this.setState({
          rows: rows
        })
      }).catch(error => {
      console.log(error);
    });
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div>

      </div>
    )
  }
}

export default ResultsTable;