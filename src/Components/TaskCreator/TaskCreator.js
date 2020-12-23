import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

export class TasksCreator extends Component {

  state = {
    task: {
      title: ''
    }
  }

  onInputValueChange = event => this.setState({ task: { ...this.state.task, title: event.target.value } });

  createTask = (event, task) => {
    event.preventDefault();
    this.setState({task: null});
    this.props.createTask(task);
  }

  render() {
    return (
      <form onSubmit={event => this.createTask(event, this.state.task)} autoComplete="off">
        <TextField
          value={this.state.task?.title ?? ''}
          onChange={event => this.onInputValueChange(event)}
          id="task-name-input"
          placeholder="Add task, press Enter to save"
          variant="filled"
          fullWidth={true} />
      </form>
    );
  }
}