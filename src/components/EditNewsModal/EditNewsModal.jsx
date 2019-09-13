/* eslint-disable */
import React from "react";
import axios from "axios";

// reactstrap components
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  Progress, InputGroupAddon, InputGroupText, InputGroup,
} from "reactstrap";

// firebase storage
import {storage} from "../../firebase";

export default class EditNewsModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      newsTitle: this.props.newsTitle,
      newsText: this.props.newsText,
      newsDate: this.props.newsDate,
      progress: 0,
      file: null,
      newsImg: null,
      newsImgName: null,
      newsImgUrl: this.props.newsImgUrl
    };
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    })
  };

  handleChangeNewsTitle = (e) => {
    this.setState({newsTitle: e.target.value});
  };

  handleChangeNewsText = (e) => {
    this.setState({newsText: e.target.value});
  };

  handleChangeNewsDate = (e) => {
    console.log(e.target.value);
    this.setState({newsDate: e.target.value});
  };

  handleChangeNewsImg = (e) => {
    console.log(e.target);
    this.setState({
      newsImg: e.target.files[0],
      newsImgName: e.target.files[0].name,
      file: URL.createObjectURL(e.target.files[0])
    });
  };

  handleClickUploadImg = () => {
    const {newsImg, newsImgName} = this.state;
    const uploadTask = storage.ref(`images/${newsImgName}`).put(newsImg);
    uploadTask.on('state_changed',
      (snapshot) => {
        //progress function
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        this.setState({progress});
      },
      (error) => {
        //error function
        console.log(error);
      },
      () => {
        //complete function
        storage.ref(`images`).child(newsImgName).getDownloadURL().then(newsImgUrl => {
          console.log(newsImgUrl);
          this.setState({newsImgUrl});
          this.handleClickEditNews();
        })
      });
  };

  handleClickEditNews = async () => {
    // e.preventDefault();
    await axios({
      method: 'put',
      url: `https://fantasy-bfl.herokuapp.com/news/${this.props.newsId}`,
      data: {
        news_date: this.state.newsDate,
        title: this.state.newsTitle,
        text: this.state.newsText,
        imgFileName: this.state.newsImgUrl,
      }
    }).then(res => {
      if (res.status === 200) {
        this.setState({
          modal: false,
        });
        window.location.reload(true);
      }
      console.log(res);
      console.log(res.status);
    })

  };

  render() {
    // console.log(this.state.newsImg);
    const {newsTitle, newsText, newsDate} = this.state;
    const {modalClassName} = this.props;
    return <>
      <Button color="primary" onClick={this.toggle}>
        <i className="fas fa-edit"/>
      </Button>
      <Modal isOpen={this.state.modal} centered={true} fade={false} toggle={this.toggle} className={modalClassName}>
        <ModalHeader toggle={this.toggle}>Редактирование новости</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="news-title">Заголовок новости</Label>
              <Input
                type="text"
                id="news-title"
                name="news-title"
                value={newsTitle}
                onChange={this.handleChangeNewsTitle}
              />
            </FormGroup>
            <FormGroup>
              <Label for="news-text">Текст новости</Label>
              <Input
                type="textarea"
                rows="14"
                id="news-text"
                name="news-text"
                value={newsText}
                onChange={this.handleChangeNewsText}
              />
            </FormGroup>
            <FormGroup>
              <Label for="news-date">Дата публикации</Label>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="far fa-calendar-alt"/>
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  type="date"
                  name="news-date"
                  id="news-date"
                  placeholder="date placeholder"
                  value={newsDate}
                  onChange={this.handleChangeNewsDate}
                />
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <Label for="news-img">Загрузить изображение</Label>
              <Input
                type="file"
                id="news-img"
                name="news-img"
                onChange={this.handleChangeNewsImg}
              />
              <img src={this.state.file} width="189" alt=""/><br/>
              <Progress className="my-2" value={this.state.progress} max="100"/>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={this.toggle}>Отменить</Button>
          <Button color="primary"
                  onClick={this.state.newsImg === null
                    ? this.handleClickEditNews
                    : this.handleClickUploadImg}>
            Сохранить
          </Button>
        </ModalFooter>
      </Modal>
    </>
  }
}
