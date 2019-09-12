import React from "react";

//reactstrap component
import {Table} from "reactstrap";

const AdminNewsBody = (props) => {
  return (
    <Table size="sm" className="standings">
      <tbody>
      <tr className="table-head">
        <td className="news-position">
          #
        </td>
        <td className="td-news-img">
          Img
        </td>
        <td>
          Title
        </td>
        <td>
          Date
        </td>
        <td>
          Edit
        </td>
        <td>
          Delete
        </td>
      </tr>
      {props.children}
      </tbody>
    </Table>

  );
};

export default AdminNewsBody;