import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom';
import { TasksCreator } from '../../Components/TaskCreator/TaskCreator';
import { TasksEditor } from '../../Components/TaskEditor/TaskEditor';
import { TasksList } from '../../Components/TasksList/TasksList';
import { connect } from 'react-redux';
import * as TasksActions from '../../store/actions/tasks.actions';

class TasksScreen extends Component {

  componentDidMount(){
    this.props.loadAllTasks();
  }

  componentDidUpdate(nextProps){
  }

  render() {
    return (
      <>
        TasksScreen works!
        <Container>
          <Row>
            <Col xs={7}>
              <div>
                <TasksCreator createTask={task => this.props.onCreateTask(task)} ></TasksCreator>
              </div>
              <div>
                <TasksList
                  tasks={this.props.tasks}
                  selectTask={taskId => this.props.onSelectTask(taskId)}
                  deleteTask={taskId => this.props.onDeleteTask(taskId)}
                  updateTaskStatus={(taskId, patchDocument) => this.props.onStatusUpdate(taskId,patchDocument)}
                />
              </div>
            </Col>
            <Col xs={5}>
              <Switch>
                <Route exact path={`${this.props.location.pathname}/:id`} component={TasksEditor}></Route>
              </Switch>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks.tasks,
  areTasksLoaded: state.tasks.areTasksLoaded,
  selectedTask: state.tasks.selectedTask,
  priorities: state.priorities.priorities
});

const mapDispatchToProps = dispatch => ({  
  loadAllTasks: () => dispatch(TasksActions.loadAllTasks()),
  onCreateTask: task => dispatch(TasksActions.createTask(task)),
  onSelectTask: taskId => dispatch(TasksActions.loadTask(taskId)),
  onDeleteTask: taskId => dispatch(TasksActions.deleteTask(taskId)),
  onStatusUpdate: (taskId, patchDocument) => dispatch(TasksActions.patchTask(taskId, patchDocument))
});

export default connect(mapStateToProps,mapDispatchToProps)(TasksScreen);