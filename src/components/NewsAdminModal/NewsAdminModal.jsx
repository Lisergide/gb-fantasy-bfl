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
  Input
} from "reactstrap";

// Images uploader UI component
import ImageUploader from "react-images-upload";

export default class NewsAdminModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      newsTitle: '',
      newsText: '',
      newsDate: '',
      file: null,
      newsImg: null
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
      newsImg: e.target.files[0].name,
      file: URL.createObjectURL(e.target.files[0])
    });
  };

  handleClickCreateNews = async (e) => {
    e.preventDefault();
    await axios({
      method: 'post',
      url: 'https://fantasy-bfl.herokuapp.com/news/create',
      data: {
        news_date: this.state.newsDate,
        title: this.state.newsTitle,
        text: this.state.newsText,
        imgFileName: this.state.newsImg,
      }
    }).then(res => {
      console.log(res);
      console.log(res.data);
    })

  };

  onDrop = picture => {
    this.setState({
      newsImg: this.state.newsImg.concat(picture)
    });
    console.log(this.state.newsImg)
  };

  render() {
    console.log(this.state.newsImg);
    const {buttonLabel, className, title, text} = this.props;
    return <>
      <Button color="danger" onClick={this.toggle}>{buttonLabel}</Button>
      <Modal isOpen={this.state.modal} centered={true} fade={false} toggle={this.toggle} className={className}>
        <ModalHeader toggle={this.toggle}>{title}</ModalHeader>
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
              <img src={this.state.file} width="189" alt=""/>
            </FormGroup>
            {/*<ImageUploader*/}
            {/*  withPreview={true}*/}
            {/*  withIcon={true}*/}
            {/*  buttonText="Choose images"*/}
            {/*  onChange={this.onDrop}*/}
            {/*  imgExtension={['.jpg', '.gif', '.png', '.gif']}*/}
            {/*  maxFileSize={5242880}*/}
            {/*/>*/}
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.toggle}>Отменить</Button>
          <Button color="secondary" onClick={this.handleClickCreateNews}>Опубликовать</Button>
        </ModalFooter>
      </Modal>
    </>
  }
}
