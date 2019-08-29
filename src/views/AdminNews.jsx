import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";

// reactstrap components
import {
  Card,
  Container,
  Row,
  Col,
  Media,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  UncontrolledCollapse,
  Button,
} from "reactstrap";

// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import NewsAdminModal from "components/NewsAdminModal/NewsAdminModal";

class AdminNews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      newsId: ''
    };
  }

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;

    axios.get("https://fantasy-bfl.herokuapp.com/news")
      .then(res => {
        const data = res.data.results;
        this.setState({ news: data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  handleClickDeleteNews = async (e) => {
    e.preventDefault();
    // console.log(e.target.id);
    await axios({
      method: 'post',
      url: 'https://fantasy-bfl.herokuapp.com/news/delete',
      data: {
        id: e.target.id
      }
    }).then(res => {
      console.log(res);
      console.log(res.data);
    })
  };

  render() {
    const {news} = this.state;
    return (
      <>
        <Header/>
        <main className="profile-page" ref="main">
          <section className="section-profile-cover section-shaped my-0">
            {/* Circles background */}
            <div className="shape shape-style-1 shape-default alpha-4">
              <span/>
              <span/>
              <span/>
              <span/>
              <span/>
              <span/>
              <span/>
            </div>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          <section className="section">
            <Container>
              <Card className="card-profile shadow mt--300 pb-5">
                <div className="px-4">
                  <h4>Новости</h4>
                  <NewsAdminModal
                    buttonLabel="Добавить новость"
                    title="Добавление новости"
                  />
                  <Row className="justify-content-center">
                    <Col lg="10">

                        <ListGroup className="rounded p-2 my-3">
                          {news.map(item =>
                          <ListGroupItem key={item.id}>
                            <span style={{ "cursor": "pointer"}} id={'news-list' + item.id} >
                              {item.title}
                              </span>
                              {/*<a href="#pablo" className="float-right pl-2"><i className="fas fa-edit"/></a>*/}
                              {/*<a href="#pablo" className="float-right pl-2"><i className="fas fa-trash-alt"/></a>*/}
                          <UncontrolledCollapse toggler={'#news-list' + item.id}>
                            <ListGroupItemText>{item.text}</ListGroupItemText>
                            <a href="#pablo" className="float-right pl-2"><i className="fas fa-edit"/></a>
                            <a href="#pablo"
                               id={item.id}
                               className="float-right pl-2"
                               onClick={this.handleClickDeleteNews}
                            ><i id={item.id} className="fas fa-trash-alt"/></a>
                          </UncontrolledCollapse>
                          </ListGroupItem>
                          )}
                          {/*<Button><i className="fas fa-trash-alt"/></Button>*/}
                          {/*<Button><i className="fas fa-edit"/></Button>*/}
                        </ListGroup>

                        {/*// <Media key={item.id} className="border rounded p-2 my-3">*/}
                        {/*//   <Media left href="#">*/}
                        {/*//     <Media object src="https://via.placeholder.com/64x64" alt="News image" />*/}
                        {/*//   </Media>*/}
                        {/*//   <Media body>*/}
                        {/*//     <Media heading tag="h6">*/}
                        {/*//       <Link to={`/news/${item.id}`}>*/}
                        {/*//         {item.title}*/}
                        {/*//       </Link>*/}
                        {/*//     </Media>*/}
                        {/*//   </Media>*/}
                        {/*// </Media>*/}

                    </Col>
                  </Row>
                </div>
              </Card>
            </Container>
          </section>
        </main>
        <Footer/>
      </>
    )
  }
}

export default AdminNews;