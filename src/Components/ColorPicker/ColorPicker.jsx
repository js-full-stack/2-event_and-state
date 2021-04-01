import { Component } from 'react';
import classNames from 'classnames';
import './ColorPicker.scss';

class ColorPicker extends Component {
  state = {
    activeOptionIdx: 0,
  };

  setActiveIdx = index => {
    this.setState({ activeOptionIdx: index });
  };

  // использование библиотеки classnames для рендера классовов по условию
  makeOptionClassName = index =>
    classNames('ColorPicker__option', {
      'ColorPicker__option--active': index === this.state.activeOptionIdx,
    });

  //   const optionClasses = ['ColorPicker__option'];
  //   if (index === this.state.activeOptionIdx) {
  //     optionClasses.push('ColorPicker__option--active');
  //   }

  //   return optionClasses.join(' ');
  // };

  render() {
    const { activeOptionIdx } = this.state;
    const { options } = this.props;
    const { label } = options[activeOptionIdx];

    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">Color Picker</h2>
        <p>Выбран цвет: {label}</p>
        <div>
          {options.map(({ label, color }, index) => (
            <button
              key={label}
              className={this.makeOptionClassName(index)}
              style={{ backgroundColor: color }}
              onClick={() => this.setActiveIdx(index)}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
