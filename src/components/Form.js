import React, { Component } from 'react';
import shortid from 'shortid';

class Form extends Component {
  state = {
    name: '',
    soname: '',
    experience: 'junior',
    licence: false,
  };

  nameInputId = shortid.generate();
  sonameInputId = shortid.generate();

  handleChange = event => {
    // console.log(event.currentTarget);
    // console.log(event.currentTarget.name);
    // console.log(event.currentTarget.value);

    this.setState({
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    // console.log(this.state);
    this.reset();
  };

  handleLicenceChange = event => {
    console.log(event.currentTarget.checked);
    this.setState({ licence: event.currentTarget.checked });
  };

  reset = () => {
    this.setState({
      name: '',
      soname: '',
    });
  };

  render() {
    return (
      <>
        <h2 className="inputHeader"> Робота з Input</h2>
        <form className="form" onSubmit={this.handleSubmit}>
          <label className="label" htmlFor={this.nameInputId}>
            ім’я
            <input
              className="inputForm"
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              id={this.nameInputId}
            />
          </label>
          <label className="" htmlFor={this.sonameInputId}>
            Прізвище
            <input
              className=""
              type="text"
              name="soname"
              value={this.state.soname}
              onChange={this.handleChange}
              id={this.sonameInputId}
            ></input>
          </label>
          <button type="submit">Надіслати</button>

          <p>Ваш рівень:</p>
          <label className="">
            <input
              className=""
              type="radio"
              name="experience"
              value="junior"
              onChange={this.handleChange}
              checked={this.state.experience === 'junior'}
            />
            Junior
          </label>
          <label className="">
            <input
              className=""
              type="radio"
              name="experience"
              value="middle"
              onChange={this.handleChange}
              checked={this.state.experience === 'middle'}
            />
            Middle
          </label>
          <label className="">
            <input
              className=""
              type="radio"
              name="experience"
              value="senior"
              onChange={this.handleChange}
              checked={this.state.experience === 'senior'}
            />{' '}
            Senior
          </label>

          <label className="">
            <input
              className=""
              type="checkbox"
              name="licence"
              checked={this.state.licence}
              onChange={this.handleLicenceChange}
            />
            Згоден з умовами договору
          </label>
          <button type="submit" disabled={!this.state.licence}>
            Надіслати
          </button>
        </form>
      </>
    );
  }
}

export default Form;
