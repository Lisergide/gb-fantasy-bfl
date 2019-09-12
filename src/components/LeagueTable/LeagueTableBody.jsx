import React from "react";
import {Table} from 'reactstrap';

const LeagueTableBody = (props) => {
  return (
    <Table size="sm" className="standings">
      <tbody>
      <tr className="table-head">
        <td className="team-position">
          #
        </td>
        <td className="team-name">
          Клуб
        </td>
        <td title="Игры">
          И
        </td>
        <td title="Победы">
          В
        </td>
        <td title="Ничьи">
          Н
        </td>
        <td title="Поражения">
          П
        </td>
        <td title="Забито мячей">
          ЗМ
        </td>
        <td title="Пропущено мячей">
          ПМ
        </td>
        <td title="Очки">
          О
        </td>
      </tr>
      {props.children}
      </tbody>
    </Table>
  );
};

export default LeagueTableBody;