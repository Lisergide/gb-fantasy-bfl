import React from "react";

const ResiltsTableRow = (props) => {
  return (
    <tr>
      <td className="results-position">
        {props.position + 1}
      </td>
      <td>
        {props.date}
      </td>
      <td>
        {props.time}
      </td>
      <td>
        {props.home}
      </td>
      <td>
        {props.hometeamgoals}
      </td>
      <td>
        {props.guestteamgoals}
      </td>
      <td>
        {props.guest}
      </td>
    </tr>
  )
};

export default ResiltsTableRow;