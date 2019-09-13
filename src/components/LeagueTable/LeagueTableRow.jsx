import React from "react";

const LeagueTableRow = (props) => {
  return (
    <tr>
      <td className="team-position">
        {props.position + 1}
      </td>
      <td className="team-name">
        <span>
          {props.team}
        </span>
      </td>
      <td>
        {props.games_played}
      </td>
      <td className="team-points">
        {props.points}
      </td>
    </tr>
  );
};

export default LeagueTableRow;