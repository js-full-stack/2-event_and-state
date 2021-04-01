import './Counter.scss';
import { Component } from 'react';
import Controls from './Controls';
import Value from './Value';
class Counter extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  // static propTypes = {
  // *Здесь же можно описывать проптайпсы, Babel все затранспайлит под капотом
  // }

  //? constructor() {
  //?   super();
  //?   this.state = {
  //?     value: 0,
  //?   };
  //? }
  //* Вместо конструктора можно просто объявить публичное свойство,
  //* под капотом Babel сделайт транспайлинг

  state = {
    // передача начального значения через props
    // !обязательно прописать дефолтное значение
    value: this.props.initialValue,
  };
  // Публичное свойство для автоматической передачи контекста
  handleIncrement = () => {
    // !this.state.value += 1 - ПЛОХО!
    // *setState - метод для работы с состоянием - ХОРОШО!
    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
  };

  handleDecrement = () => {
    this.setState(prevState => ({
      value: prevState.value - 1,
    }));
  };

  render() {
    const { value } = this.state;
    return (
      <div className="Counter">
        <Value value={value} />
        {/* <span className="Counter__value">{this.state.value}</span> */}
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
        {/* <div className="Counter__controls">
          <button type="button" onClick={this.handleIncrement}>
            Увеличить на 1
          </button>
          <button type="button" onClick={this.handleDecrement}>
            Уменьшить на 1
          </button>
        </div> */}
      </div>
    );
  }
}

export default Counter;
