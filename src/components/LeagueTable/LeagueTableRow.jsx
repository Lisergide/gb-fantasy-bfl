import React from "react";
import LeagueTableModal from "./LeagueTableModal";

const LeagueTableRow = (props) => {
  return (
    <tr>
      <td className="team-position">
        {props.position + 1}
      </td>
      <td className="team-name">
        {/*<div className="crest">*/}
        {/*  <img src={props.crestURI} alt=""/>*/}
        {/*</div>*/}
        <span><LeagueTableModal team_id={props.team_id} team={props.team}/></span>
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