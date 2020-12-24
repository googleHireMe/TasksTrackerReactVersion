import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as TasksActions from '../../store/actions/tasks.actions';
import * as PrioritiesActions from '../../store/actions/priorities.actions';

class TasksEditor extends Component {

  componentDidMount() {
    debugger;
    this.props.loadPriorities();
  }

  componentWillReceiveProps(nextProps){
    debugger;
    const x = nextProps;
  }

  componentDidUpdate(nextProps) {
    debugger;
    const isTaskAlreadyLoaded = !!this.props.task;
    const isNewTaskLoaded = this.props.task?._id !== nextProps.task?._id;
    if (!isTaskAlreadyLoaded || isNewTaskLoaded) {
      const taskId = this.props.match.params.id;
      this.props.loadSelectedTask(taskId);
    }
  }

  render() {
    return (
      <>
        TasksEditor works!
        {this.props.task?.title}
      </>
    );
  }
};

const mapStateToProps = state => ({
  task: state.tasks.selectedTask,
  priorities: state.priorities.priorities
});

const mapDispatchToProps = dispatch => ({
  loadSelectedTask: taskId => dispatch(TasksActions.loadTask(taskId)),
  loadPriorities: () => dispatch(PrioritiesActions.loadPriorities())
});

export default connect(mapStateToProps, mapDispatchToProps)(TasksEditor);