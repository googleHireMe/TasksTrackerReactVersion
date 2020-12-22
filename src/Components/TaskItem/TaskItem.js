import React, { Component } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DeleteIcon from '@material-ui/icons/Delete';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';

export class TasksItem extends Component {

  state = {
    popoverAncherEl: null
  };

  openPopover = (event) => this.setState({ popoverAncherEl: event.currentTarget });

  handleClose = () => this.setState({ popoverAncherEl: null });


  render() {
    return (
      <div className="task-item" onClick={() => this.props.selectTask(this.props.task._id)}>
        <div className="left-part">
          <div className="checkbox">
            <Checkbox
              color="primary"
              value={this.props.task.status}
              onChange={event => this.props.updateStatus(this.props.task, event)}
            />
          </div>
          <div className="title">
            {this.props.task?.title}
          </div>
        </div>
        <div className="right-part">
          <div className="dueDate">
            {this.props.task?.dueDate}
          </div>
          <div className="actions">
            <IconButton
              aria-controls="long-menu"
              aria-haspopup="true"
              onClick={event => this.openPopover(event)}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="menu"
              anchorEl={this.state.popoverAncherEl}
              keepMounted
              open={event => this.openPopover(event)}
              onClose={() => this.handleClose()}
            >
              <MenuItem onClick={() => this.handleClose()}>
                <DeleteIcon />
              </MenuItem>
            </Menu>
          </div>
        </div>
      </div>
    );
  }
}