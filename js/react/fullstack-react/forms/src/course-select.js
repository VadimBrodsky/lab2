import React from 'react';
import PropTypes from 'prop-types';

const Courses = {
  core: [
  "javascripting",
  "git-it",
  "Scope Chains & Closures",
  "Elementary Electron",
  "learnyounode",
  "How to npm",
  "stream-adventure",
  "how-to-markdown"
  ],
  electives: [
  "Functional Javascript",
  "Level Me Up Scotty!",
  "ExpressWorks",
  "Make Me Hapi",
  "Promise It Won't Hurt",
  "Async You",
  "NodeBot Workshop",
  "Going Native",
  "Planet Proto",
  "WebGL Workshop",
  "ESNext Generation",
  "Test Anything",
  "Tower of babel",
  "learnyoumongo",
  "regex-adventure",
  "learn-sass",
  "Pattern Lab Workshop",
  "learnyoubash",
  "Currying in JavaScript",
  "Shader School",
  "Bytewiser",
  "Bug Clinic",
  "Browserify Adventure",
  "Intro to WebGL",
  "Count to 6",
  "Kick off Koa",
  "LololoDash",
  "learnyoucouchdb",
  "learnuv",
  "Learn Generators",
  "learnyoureact",
  "perfschool",
  "Web Audio School",
  "torrential",
  "Thinking in React",
  "Post-mortem debugging",
  "Seneca in practice",
  "LESS is more"
  ]
};

function apiClient(department) {
  return {
    then: function (cb) {
      setTimeout(() => { cb(Courses[department]); }, 1000);
    },
  };
}

export default class CourseSlect extends React.Component {
  static propTypes = {
    department: PropTypes.string,
    couse: PropTypes.string,
    onChange: PropTypes.func.isRequired,
  };

  state = {
    department: null,
    course: null,
    courses: [],
    _loading: false,
  };

  onSelectDepartment = evt => {
    const department = evt.target.value;
    const course = null;
    this.setState({ department, course, });

    this.props.onChange({ name: 'department', value: department });
    this.props.onChange({ name: 'course', value: course });

    if (department) {
      this.fetch(department);
    }
  };

  onSelectCourse = evt => {
    const course = evt.target.value;
    this.setState({ course });
    this.props.onChange({ name: 'course', value: course });
  };

  fetch = department => {
    this.setState({ _loading: true, courses: [], })
    apiClient(department).then((courses) => {
      this.setState({_loading: false, courses, });
    });
  };

  renderDepartmentSelect = () => {
    return (
      <select
        onChange={this.onSelectDepartment}
        value={this.state.department || ''}
      >
        <option value=''> Which department? </option>
        <option value='core'> NodeSchool: Core </option>
        <option value='electives'> NodeSchool: Electives </option>
      </select>
    );
  };

  renderCourseSelect = () => {
    if (this.state._loading) { return <img alt='loading' src='/img/loading.gif' />; }
    if (!this.state.department || !this.state.courses.length) return <span />;

    return (
      <select
        onChange={this.onSelectCourse}
        value={this.state.course || ''}
      >
        { [
          <option value='' key='course-none'> Which course? </option>,
          ...this.state.courses.map((course, i) => (
            <option value={course} key={i}>
              {course}
            </option>
          )),
        ] }
      </select>
    );
  };

  componentWillReceiveProps(update) {
    this.setState({
      department: update.department,
      couse: update.couse,
    });
  }

  render() {
    return (
      <div>
        { this.renderDepartmentSelect() }
        &nbsp;
        { this.renderCourseSelect() }
      </div>
    );
  }
}
