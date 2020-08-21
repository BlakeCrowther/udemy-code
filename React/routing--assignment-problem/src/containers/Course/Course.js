import React, { Component } from 'react';

class Course extends Component {
    state = {
        courseTitle: ''
    }

    componentDidMount () {
        this.parseQueryParams();
    }

    componentDidUpdate () {
        this.parseQueryParams();
    }

    parseQueryParams () {
        const query = new URLSearchParams(this.props.location.search);
        if (this.state.courseTitle !== query.get("title")) {
            this.setState({courseTitle: query.get("title")});
        }
    }

    render () {

        return (
            <div>
                <h1>{this.state.courseTitle}</h1>
                <p>You selected the Course with ID: {this.props.match.params.id}</p>
            </div>
        );
    }
}

export default Course;