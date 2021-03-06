import React, { Component } from 'react';
import { TasksItem } from '../TaskItem/TaskItem';

export class TasksList extends Component {

  render = () => <>
    {this.props.tasks?.map(task =>
      <TasksItem
        key={task._id}
        task={task}
        selectTask={taskId => this.props.selectTask(taskId)}
        deleteTask={taskId => this.props.deleteTask(taskId)}
        updateTaskStatus={(taskId, patchDocument) => this.props.updateTaskStatus(taskId,patchDocument)}
      />)
    }
  </>;
}