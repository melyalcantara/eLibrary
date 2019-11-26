import React, { Component } from "react";
import pcimage from "../image/open_book-512.png";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Label,
  Media
} from "reactstrap";
import EditorModal from "./EditorModal";

import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

class ProfileModal extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  render() {
    const book = this.props.book;
    return (
      <div>
        <Button
          color="dark"
          style={{ marginBottom: "2rem" }}
          onClick={this.toggle}
          block
        >
          Book Profile
        </Button>

        <Modal
          size="lg"
          centered
          isOpen={this.state.modal}
          toggle={this.toggle}
        >
          <ModalHeader toggle={this.toggle}>
            <Media>
              <Media left href="#">
                <Media object src={pcimage} alt="Generic placeholder image" />
              </Media>
              <Media body>
                <Media heading>{book.title}</Media>
              </Media>
            </Media>
          </ModalHeader>

          <ModalBody>
            Escrito por: {book.author} en fecha: {book.pubdate}
            Una breve descripcion estaria aqui: Subido enL {book.upldate}
          </ModalBody>
          <Button variant="primary" block>
            Leer Libro{" "}
          </Button>
          <Button block>Escuchar Libro </Button>
          <EditorModal/>

        </Modal>
      </div>
    );
  }
}

export default ProfileModal;
