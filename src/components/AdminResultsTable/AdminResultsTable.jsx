/* eslint-disable */
import React, {Component} from "react";
import axios from "axios";
import moment from 'moment';
import * as d3 from "d3-collection";
import {Link} from "react-router-dom";

// reactstrap component
import {Button, Table} from "reactstrap";

// core components
import EditResultsModal from "../EditResultsModal/EditResultsModal";

class AdminResultsTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      groupByDate: [],
    };
  }

  getData() {
    axios.get('https://fantasy-bfl.herokuapp.com/results')
      .then(res => {
        const results = res.data.results;
        const resultsSort = results.sort(function (a, b) {
          const dateA = new Date(a.date);
          const dateB = new Date(b.date);

          return dateA - dateB;
        });
        const d3Group = d3.nest()
          .key(function (d) {
            return moment(d.date).format("D MMMM");
          })
          .entries(resultsSort);
        this.setState({
          results: results,
          groupByDate: d3Group
        });
      });
  }

  componentDidMount() {
    this.getData();
  }

  handleClickDeleteResult = async (e) => {
    e.preventDefault();
    await axios({
      method: 'post',
      url: 'https://fantasy-bfl.herokuapp.com/results/delete',
      data: {
        id: e.target.id
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
    console.log(this.state.groupByDate);
    return (
      <div>
        <Table size="sm">
          {this.state.groupByDate.map((item, idx) =>
            <tbody key={idx}>
            <tr>
              <td colSpan={6} align="center" className="font-weight-bold">{item.key}</td>
            </tr>
            {item.values.map((t, i) =>
              <tr key={i}>
                <td>{t.time}</td>
                <td>{t.home}</td>
                <td>{t.hometeamgoals} : {t.guestteamgoals}</td>
                <td>{t.guest}</td>
                <td style={{width: "25px"}}>
                  <EditResultsModal
                    resultsId={t.id}
                    date={t.date}
                    time={t.time}
                    home={t.home}
                    guest={t.guest}
                    homeTeamGoals={t.hometeamgoals}
                    guestTeamGoals={t.guestteamgoals}
                    btnTitle={<i className="fas fa-edit"/>}
                  />
                </td>
                <td style={{width: "25px"}}>
                  <a href="javascript:void(0)" id={t.id} className="text-danger" onClick={this.handleClickDeleteResult}>
                    <i id={t.id} className="fas fa-trash-alt"/>
                  </a>
                </td>
              </tr>
            )}
            </tbody>
          )}
        </Table>
        <Button tag={Link} to="/control-page" outline color="primary">Вернуться назад</Button>
      </div>
    )
  }
}

export default AdminResultsTable;