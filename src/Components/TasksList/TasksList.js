import React, { Component } from 'react';
import { TasksItem } from '../TaskItem/TaskItem';

export class TasksList extends Component {
  render = () => <>{this.props.tasks?.map(task => <TasksItem task={task} />)}</>;
}