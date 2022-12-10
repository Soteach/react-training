import React, { Component } from 'react';
import Clock from './Clock/Clock';
import Container from './Container/Container';
import { Modal } from './Modal/Modal';
import './App.css';

class App extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;
    return (
      <Container>
        <button type="button" onClick={this.toggleModal}>
          Open
        </button>
        {showModal && (
          <Modal>
            <h1>This is modal content as children</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              maiores blanditiis vitae animi excepturi doloribus cupiditate
              ipsam voluptatibus debitis odit, itaque reiciendis in assumenda
              reprehenderit accusamus dolor omnis! Odit maxime molestias dolores
              atque eaque. Architecto officia quo iste nostrum distinctio
              accusantium magnam perspiciatis dolores, alias quisquam ducimus
              neque voluptatum? Dignissimos?
            </p>
          </Modal>
        )}

        {/* {showModal && <Clock />} */}
      </Container>
    );
  }
}

export default App;
