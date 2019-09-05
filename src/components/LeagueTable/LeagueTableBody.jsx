import React from "react";
import {Table} from 'reactstrap';

const LeagueTableBody = (props) => {
  return (
    <Table className="standings">
      <tbody>
      <tr className="table-head">
        <td className="team-position">
          #
        </td>
        <td className="team-name">
          Team
        </td>
        <td title="Matches played">
          MP
        </td>
        <td title="Wins">
          W
        </td>
        <td title="Draws">
          D
        </td>
        <td title="Losses">
          L
        </td>
        <td title="Goals scored">
          GS
        </td>
        <td title="Goals missed">
          GM
        </td>
        <td title="Team points">
          Pts
        </td>
      </tr>
      {props.children}
      </tbody>
    </Table>
  );
};

export default LeagueTableBody;