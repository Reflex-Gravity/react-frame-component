import React, { Component, Children } from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';

export default class Content extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    contentDidMount: PropTypes.func.isRequired,
    contentDidUpdate: PropTypes.func.isRequired,
    contentWillUnmount: PropTypes.func
  };

  static defaultProps = {
    contentWillUnmount: null
  };

  componentDidMount() {
    this.props.contentDidMount();
  }

  componentDidUpdate() {
    this.props.contentDidUpdate();
  }

  componentWillUnmount() {
    if (typeof this.props.contentWillUnmount === 'function') {
      this.props.contentWillUnmount();
    }
  }

  render() {
    return Children.only(this.props.children);
  }
}
