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
        <span>
            <LeagueTableModal
              team_id={props.team_id}
              team={props.team}
              games_played={props.games_played}
              wins={props.wins}
              draws={props.draws}
              looses={props.looses}
              goales_scored={props.goales_scored}
              goales_missed={props.goales_missed}
              points={props.points}
            />
        </span>
      </td>
      <td>
        {props.games_played}
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
        {props.goales_scored}
      </td>
      <td>
        {props.goales_missed}
      </td>
      <td className="team-points">
        {props.points}
      </td>
    </tr>
  );
};

export default LeagueTableRow;