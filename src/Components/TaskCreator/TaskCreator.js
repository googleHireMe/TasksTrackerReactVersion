import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

export class TasksCreator extends Component {

  state = {
    taskName: ''
  }

  onInputValueChange = event => this.setState({ taskName: event.target.value });

  render() {
    return (
      <form onSubmit={() => this.props.submit()} autoComplete="off">
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