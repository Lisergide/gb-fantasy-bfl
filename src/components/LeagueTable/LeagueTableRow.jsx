import React from "react";

const LeagueTableRow = (props) => {
  return (
    <tr>
      <td className="team-position">
        {props.position}
      </td>
      <td className="team-name">
        <div className="crest">
          <img src={props.crestURI} alt=""/>
        </div>
        <span>{props.team}</span>
      </td>
      <td>
        {props.gamesPlayed}
      </td>
      <td>
        {props.wins}
      </td>
      <td>
        {props.draws}
      </td>
      <td>
        {props.looses}
      </td>
      <td>
        {props.goalesScored}
      </td>
      <td>
        {props.goalesMissed}
      </td>
      <td className="team-points">
        {props.points}
      </td>
    </tr>
  );
};

export default LeagueTableRow;