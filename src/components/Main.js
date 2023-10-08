import React, { Component } from 'react';
import './Main.css';
import { FaPlus, FaEdit, FaRemoveFormat } from 'react-icons/fa';

export default class Main extends Component {
  state = {
    newTask: '',
  };

  handleInputChange = (e) => {
    this.setState({
      newTask: e.target.value,
    });
  };

  render() {
    const { newTask } = this.state;

    return (
      <div className="main">
        <h1>Lista de Tarefas</h1>
        <form action="#">
          <input onChange={this.handleInputChange} type="text" />
          <button type="submit">
            {' '}
            <FaPlus className="faPlus" />
            {' '}
          </button>
        </form>

        <li className="Task">
          <div>dsdsd</div>
          {' '}
          <div>
            <FaEdit />
            <FaRemoveFormat />
          </div>
          {' '}
        </li>
        <h1>{newTask}</h1>
      </div>
    );
  }
}
