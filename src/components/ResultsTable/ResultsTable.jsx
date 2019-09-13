/* eslint-disable */
import React, {Component} from "react";
import axios from "axios";

import * as d3 from "d3-collection";

// reactstrap component
import { Table, Button } from "reactstrap";

import moment from 'moment';




class ResultsTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groupByDate: []
    };
  }

  getData() {
    axios.get('https://fantasy-bfl.herokuapp.com/results')
      .then(res => {
        const results = res.data.results;
        const resultsSort = results.sort(function (a, b) {
          const dateA = new Date(a.date);
          const dateB = new Date(b.date);

          return dateA-dateB;
        });
        const d3Group = d3.nest()
          .key(function(d) {return moment(d.date).format("D MMMM");})
          .entries(resultsSort);
        this.setState({
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
            <td style={{ width: "25px"}}>
              <a href="javascript:void(0)" className="text-primary">
                <i className="fas fa-edit"/>
              </a>
            </td>
            <td style={{ width: "25px"}}>
              <a href="javascript:void(0)" id={t.id} className="text-danger" onClick={this.handleClickDeleteResult}>
                <i id={t.id} className="fas fa-trash-alt"/>
              </a>
            </td>
          </tr>
          )}
            </tbody>
          )}
        </Table>
      </div>
    )
  }
}

export default ResultsTable;