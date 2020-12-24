import React, { Component } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DeleteIcon from '@material-ui/icons/Delete';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import classes from './TaskItem.module.css'
import Moment from 'react-moment';

export class TasksItem extends Component {

  state = {
    popoverAncherEl: null
  };

  openPopover = (event) => this.setState({ popoverAncherEl: event.currentTarget });

  handleClose = () => {
    this.setState({ popoverAncherEl: null });
    this.props.deleteTask(this.props.task._id);
  };

  updateStatus = (taskId, event) => {
    const patchDocument = { status: event.target.checked };
    this.props.updateTaskStatus(taskId, patchDocument)
  }

  render() {
    return (
      <div className={classes.TaskItem} onClick={() => this.props.selectTask(this.props.task._id)}>
        <div className={classes.LeftPart}>
          <div className={classes.Checkbox}>
            <Checkbox
              color="primary"
              checked={this.props.task.status}
              onChange={event => this.updateStatus(this.props.task._id, event)}
            />
          </div>
          <div className={classes.Title}>
            {this.props.task?.title}
          </div>
        </div>
        <div className={classes.RightPart}>
          <div className={classes.DueDate}>
            {this.props.task?.dueDate ? <Moment format="MM/DD/YYYY">{this.props.task?.dueDate}</Moment> : ''}
          </div>
          <div className={classes.Actions}>
            <IconButton
              onClick={event => this.openPopover(event)}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              anchorEl={this.state.popoverAncherEl}
              getContentAnchorEl={null}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              open={!!this.state.popoverAncherEl}
              onClose={() => this.handleClose()}
            >
              <MenuItem onClick={() => this.handleClose()}>
                <DeleteIcon /> Delete
              </MenuItem>
            </Menu>
          </div>
        </div>
      </div>
    );
  }
}