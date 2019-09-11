import React from "react";
import axios from "axios";
import {storage} from '../../firebase';

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
  Progress,
} from "reactstrap";

export default class CreateNewsModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      newsTitle: '',
      newsText: '',
      newsDate: '',
      progress: 0,
      file: null,
      newsImg: null,
      newsImgName: null,
      newsImgUrl: null
    };
    // this.handleClickCreateNews = this.handleClickCreateNews.bind(this);
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
    if (this.state.newsImg === null) {

    }
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
          this.handleClickCreateNews();
        })
      });
  };

  handleClickCreateNews = async () => {
    // e.preventDefault();
    await axios({
      method: 'post',
      url: 'https://fantasy-bfl.herokuapp.com/news/create',
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
    // console.log(this.state.newsImgUrl);
    const {btnTitle, modalClassName, modalTitle} = this.props;
    return (
      <div>
      <Button id="addNews" color="success" onClick={this.toggle}>{btnTitle}</Button>
      {/*<Button className={btnClassName} color={btnColor} onClick={this.toggle}>*/}
      {/*  <span className="btn-add-news__plus">{btnIcon}</span> <br/>*/}
      {/*  <span className="btn-add-news__title">{btnLabel}</span>*/}
      {/*</Button>*/}
      <Modal isOpen={this.state.modal} centered={true} fade={false} toggle={this.toggle} className={modalClassName}>
        <ModalHeader toggle={this.toggle}>{modalTitle}</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="news-title">Заголовок новости</Label>
              <Input
                type="text"
                id="news-title"
                name="news-title"
                value={this.state.newsTitle}
                onChange={this.handleChangeNewsTitle}
              />
            </FormGroup>
            <FormGroup>
              <Label for="news-text">Текст новости</Label>
              <Input
                type="textarea"
                id="news-text"
                name="news-text"
                value={this.state.newsText}
                onChange={this.handleChangeNewsText}
              />
            </FormGroup>
            <FormGroup>
              <Label for="news-date">Дата публикации</Label>
              <Input
                type="date"
                name="news-date"
                id="news-date"
                placeholder="date placeholder"
                value={this.state.newsDate}
                onChange={this.handleChangeNewsDate}
              />
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
                    ? this.handleClickCreateNews
                    : this.handleClickUploadImg}>
            Опубликовать
          </Button>
        </ModalFooter>
      </Modal>
    </div>
    )
  }
}
