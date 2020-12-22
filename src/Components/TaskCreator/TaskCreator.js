import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

export class TasksCreator extends Component {

  state = {
    task: {
      description: ''
    }
  }

  onInputValueChange = event => this.setState({ task: { ...this.state.task, description: event.target.value } });

  createTask = (event, task) => {
    event.preventDefault();
    this.props.createTask(task);
  }

  render() {
    return (
      <form onSubmit={event => this.createTask(event, this.state.task)} autoComplete="off">
        <TextField
          value={this.state.taskName}
          onChange={event => this.onInputValueChange(event)}
          id="task-name-input"
          placeholder="Add task, press Enter to save"
          variant="filled"
          fullWidth={true} />
      </form>
    );
  }
}