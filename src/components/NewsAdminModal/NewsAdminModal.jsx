import React from "react";
import {withAuth} from "@okta/okta-react";

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

export default withAuth(class NewsAdminModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      modal: false,
      newsTitle: '',
      newsText: '',
      pictures: []
    };
  }

  async getCurrentUser() {
    this.props.auth.getUser()
      .then(user => this.setState({user}));
  };

  componentDidMount() {
    this.getCurrentUser();
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

  onDrop = picture => {
    this.setState({
      pictures: this.state.pictures.concat(picture)
    })
  };

  render() {
    if (!this.state.user) return null;
    console.log(this.state.pictures);
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
              <Label for="news-img">Загрузить изображение</Label>
              <Input type="file" id="news-img" name="news-img" />
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
          <Button color="secondary" onClick={this.toggle}>Опубликовать</Button>
        </ModalFooter>
      </Modal>
    </>
  }

})
