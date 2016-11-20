//
import { createElement, cloneElement, Component, PropTypes } from 'react';

//
export default class ContextProvider extends Component {

  static propTypes = {
    children: PropTypes.any.isRequired,
  }

  static childContextTypes = {
    media: PropTypes.any
  }

  getChildContext() {
    const {
      children, // eslint-disable-line
      ...moreProps } = this.props;

    return { media: moreProps };
  }

  render() {
    const { children } = this.props;

    return children.length > 1
      ? createElement('div', {}, children)
      : cloneElement(children, {});
  }
}
