import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom';
import { TasksCreator } from '../../Components/TaskCreator/TaskCreator';
import { TasksEditor } from '../../Components/TaskEditor/TaskEditor';
import { TasksList } from '../../Components/TasksList/TasksList';

export class TasksScreen extends Component {

  render() {
    return (
      <>
        TasksScreen works!
        <Container>
          <Row>
            <Col xs={7}>
              <div>
                <TasksCreator></TasksCreator>
              </div>
              <div>
                <TasksList></TasksList>
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