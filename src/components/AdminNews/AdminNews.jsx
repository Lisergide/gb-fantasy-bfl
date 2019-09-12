import React from "react";
import axios from "axios";

// core components
import AdminNewsRow from "./AdminNewsRow";
import AdminNewsBody from "./AdminNewsBody";

class AdminNews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [],
    }
  }

  getData() {
    axios.get('https://fantasy-bfl.herokuapp.com/news')
      .then(res => {
        const rows = [];
        const news = res.data.results;

        const newsSort = news.sort(function (a, b) {
          const dateA = new Date(a.news_date);
          const dateB = new Date(b.news_date);

          return dateB-dateA;
        });
        newsSort.map((item, index) => {
            const {id, news_date, title, text, imgfilename} = item;

            return (
              rows.push(
                <AdminNewsRow key={index} position={index} newsId={id} newsTitle={title} newsText={text} newsDate={news_date}
                              newsImg={imgfilename}/>
              )
            )
          });
        this.setState({
          rows: rows
        })
      }).catch(error => {
      console.log(error);
    });
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <AdminNewsBody>
        {this.state.rows}
      </AdminNewsBody>
    )
  };
}

export default AdminNews;