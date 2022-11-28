import React, { Component } from 'react';
import './ColorPicker.css';
import classNames from 'classnames';

class ColorPicker extends Component {
  state = {
    activeOptionIdx: 0,
  };

  setActiveIndex = index => {
    this.setState({ activeOptionIdx: index });
  };

  makeOptionClassName = index => {
    return classNames('ColorPicker__option', {
      'ColorPicker__option--active': index === this.state.activeOptionIdx,
    });
    //   const optionClasses = ['ColorPicker__option'];

    //   if (index === this.state.activeOptionIdx) {
    //     optionClasses.push('ColorPicker__option--active');
    //   }

    //   return optionClasses.join(' ');
  };

  render() {
    const { activeOptionIdx } = this.state;
    const { options } = this.props;
    const { label } = options[activeOptionIdx];

    return (
      <>
        <div className="ColorPicker">
          <h2 className="ColorPicker__title">Color Picker</h2>
          <p>Вибранно колір:{label} </p>
          <div className="Container">
            {this.props.options.map(({ label, color }, index) => (
              <button
                key={label}
                className={this.makeOptionClassName(index)}
                style={{
                  backgroundColor: color,
                  //   border:
                  //     index === this.state.activeOptionIdx
                  //       ? '5px solid black'
                  //       : 'none',
                }}
                onClick={() => this.setActiveIndex(index)}
              ></button>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default ColorPicker;
