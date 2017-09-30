import React from 'react';
import PropTypes from 'prop-types';

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
    this.props.onChange({ name: 'course', value: couse });

    if (department) {
      this.fetch(department);
    }
  };

  fetch = department => {
    this.setState({ _loading: true, courses: [], })
    apiClient(department).then((courses) => {
      this.setState({_loading: false, courses, });
    });
  };

  componentWillReceiveProps(update) {
    this.setState({ department: update.department, couse.update.couse, })
  }

  render() {
    return (
      <div>
        { this.renderDepartmentSelect() }
        <br />
        { this.renderCourseSelect() }
      </div>
    );
  }
}
