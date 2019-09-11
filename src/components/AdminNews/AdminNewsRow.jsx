import React from "react";

// reactstrap components
import {Button} from "reactstrap";

// core components
import EditNewsModal from "../EditNewsModal/EditNewsModal";
import axios from "axios";

const AdminNewsRow = (props) => {

  const handleClickDeleteNews = async (e) => {
    e.preventDefault();
    // console.log(e.target.id);
    await axios({
      method: 'post',
      url: 'https://fantasy-bfl.herokuapp.com/news/delete',
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

  return (
    <tr>
      <td className="news-position align-middle">
        {props.position + 1}
      </td>
      <td className="td-news-img align-middle">
        <img width="64px" src="https://via.placeholder.com/64x64" alt="admin-news-img"/>
      </td>
      <td className="align-middle">
        {props.newsTitle}
      </td>
      <td className="align-middle">
        {new Date(props.newsDate).toLocaleDateString()}
      </td>
      <td className="align-middle">
        <EditNewsModal
          newsId={props.newsId}
          newsTitle={props.newsTitle}
          newsText={props.newsText}
          newsDate={new Date(props.newsDate).toISOString().substring(0, 10)}
        />
      </td>
      <td className="align-middle">
        <Button id={props.newsId} color="danger" onClick={handleClickDeleteNews}>
          <i id={props.newsId} className="fas fa-trash-alt"/>
        </Button>
      </td>
    </tr>
  );
};

export default AdminNewsRow