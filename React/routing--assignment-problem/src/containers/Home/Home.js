import React, { Component } from 'react';
import { Route } from 'react-router';

import Courses from '../Courses/Courses';
import Users from '../Users/Users';

class Home extends Component {

  render () {
    return (
      <div className="home">
        <Route path="/courses" component={Courses} />
        <Route path="/users" component={Users} />
      </div>
    );
  }
}