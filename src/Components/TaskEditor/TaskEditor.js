import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as TasksActions from '../../store/actions/tasks.actions';
import * as PrioritiesActions from '../../store/actions/priorities.actions';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import classes from './TaskEditor.module.css';
import Checkbox from '@material-ui/core/Checkbox';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select'
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

class TasksEditor extends Component {

  state = {
    isTaskLoadedInitially: false,
    selectedDate: null
  }

  componentDidMount() {
    this.props.loadPriorities();
  }

  componentDidUpdate(prevProps) {
    const isTaskAlreadyLoaded = this.state.isTaskLoadedInitially;
    const isNewTaskLoaded = this.props.match.params.id !== prevProps.match.params.id;
    if (!isTaskAlreadyLoaded || isNewTaskLoaded) {
      this.setState({ isTaskLoadedInitially: true });
      const taskId = this.props.match.params.id;
      this.props.loadSelectedTask(taskId);
    }
  }

  handleDateChange = (event) => {
    console.log('date changed:', event);
  }

  updateStatus = (taskId, event) => {
    const patchDocument = { status: event.target.checked };
    this.props.updateTaskStatus(taskId, patchDocument)
  }

  updatePriority = (taskId, event) => {
    const patchDocument = { priority: event.target.value };
    this.props.updateTaskStatus(taskId, patchDocument)
  }

  updateTitle = (taskId, event) => {
    const patchDocument = { title: event.target.value };
    this.props.updateTaskStatus(taskId, patchDocument)
  }
  
  updateDescription = (taskId, event) => {
    const patchDocument = { description: event.target.value };
    this.props.updateTaskStatus(taskId, patchDocument)
  }

  render() {
    return (
      <form>
        <Row className="row sticky-header">
          <Col xs={1} className={classes.CheckboxContainer}>
            <Checkbox
              color="primary"
              checked={this.props.task?.status ?? false}
              onChange={event => this.updateStatus(this.props.task._id, event)}
            />
          </Col>
          <Col xs={5}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                disableToolbar
                label="Due date"
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                value={this.state.selectedDate}
                onChange={(event) => this.handleDateChange(this.props.task._id,event)}
              />
            </MuiPickersUtilsProvider>
          </Col>
          <Col xs={5}>
            <FormControl 
                className={classes.formControl} 
                fullWidth={true}
                margin="normal">
              <InputLabel id="priority-select-label">Priority</InputLabel>
              <Select
                labelId="priority-select-label"
                label="Due date"
                value={this.props.task?.priority ?? ''}
                onChange={(event) => this.updatePriority(this.props.task._id, event)}
                
              >
                {this.props.priorities?.map(priority => <MenuItem key={priority._id} value={priority._id}>{priority.description}</MenuItem>)}
              </Select>
            </FormControl>
          </Col>
        </Row>
        <Row>
          <Col>
            <TextField
              value={this.props.task?.title ?? ''}
              onChange={event => this.updateTitle(this.props.task._id, event)}
              label="Title"
              fullWidth={true} />
          </Col>
        </Row>
        <Row>
          <Col>
            <TextareaAutosize 
              value={this.props.task?.description ?? ''}
              onChange={event => this.updateDescription(this.props.task._id, event)}
              placeholder="Description" 
              rows={1}
              className={classes.Description}
          />
          </Col>
        </Row>
      </form >
    );
  }
};

const mapStateToProps = state => ({
  task: state.tasks.selectedTask,
  priorities: state.priorities.priorities
});

const mapDispatchToProps = dispatch => ({
  loadSelectedTask: taskId => dispatch(TasksActions.loadTask(taskId)),
  loadPriorities: () => dispatch(PrioritiesActions.loadPriorities()),
  updateTaskStatus: (taskId, patchDocument) => dispatch(TasksActions.patchTask(taskId, patchDocument))
});

export default connect(mapStateToProps, mapDispatchToProps)(TasksEditor);