import { Component } from 'react';
import shortid from 'shortid';

import Container from './Components/Container';
// import Form from './Components/Form';
// import Counter from './Components/Counter';
// import Dropdown from './Components//Dropdown';
// import ColorPicker from './Components/ColorPicker/index';
import TodoList from './Components/TodoList';
import TodoEditor from './Components/TodoEditor';
import Filter from './Components/Filter';
import initialTodo from './Components/TodoList/Todos.json';

class App extends Component {
  state = {
    todos: initialTodo,
    filter: '',
  };

  addTodo = text => {
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };

    this.setState(({ todos }) => ({
      todos: [todo, ...todos],
    }));
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  toggleCompleted = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
      ),
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getVisibleTodos = () => {
    const { filter, todos } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter),
    );
  };

  getCompletedTodos = () => {
    const { todos } = this.state;
    return todos.reduce((acc, todo) => (todo.completed ? acc + 1 : acc), 0);
  };

  render() {
    const { todos, filter } = this.state;
    const totalTodoCount = todos.length;
    const completedTodos = this.getCompletedTodos();
    const visibleTodos = this.getVisibleTodos();

    // console.log(completedTodos);
    return (
      <Container>
        <Filter value={filter} onChange={this.changeFilter} />
        {
          /* <div className="App">
          <header className="App-header"></header>*/
          <div>
            <p>Количество задач: {totalTodoCount}</p>
            <p>Выполненные задачи:{completedTodos} </p>
          </div>
        }
        <TodoList
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />
        {
          <TodoEditor onSubmit={this.addTodo} />
          /* <Counter initialValue={10} />
        <Dropdown />*/
          // <ColorPicker options={colorPickerOptions} />
        }
        {/* </div> */}
        {/* <Form onSubmit={this.formSubmitHandler} /> */}
      </Container>
    );
  }
}

export default App;

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];
