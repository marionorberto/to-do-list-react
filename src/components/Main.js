import React, { Component } from 'react';
import './Main.css';
import { FaPlus } from 'react-icons/fa';

import { FaEdit, FaWindowClose } from 'react-icons/fa';

export default class Main extends Component {
  state = {
    newTask: '',
    tasks: ['estudar js', 'estudar react', 'estudar nodejs'],
  };

  handleInputChange = (e) => {
    this.setState({
      newTask: e.target.value,
    });
  };

  render() {
    const { newTask, tasks } = this.state;

    return (
      <div className="main">
        <h1>Lista de Tarefas</h1>
        <form action="#">
          <input onChange={this.handleInputChange} value={newTask} type="text" />
          <button type="submit">
            {' '}
            <FaPlus className="faPlus" />
            {' '}
          </button>
        </form>

        <ul className="tasks">
          {tasks.map((task) => (
            <li key={task}>
              {task}
              <div>
                <FaEdit className="faEdit" />
                <FaWindowClose className="faWindowClose" />
              </div>
            </li>
          ))}

        </ul>
      </div>
    );
  }
}
