//
import { createElement, cloneElement, Component, PropTypes } from 'react';

//
export default class ContextProvider extends Component {

  static propTypes = {
    context: PropTypes.any,
  }

  static childContextTypes = {
    media: PropTypes.any
  }

  getChildContext() {
    const {
      context,
      children // eslint-disable-line
      } = this.props;

    //
    const media = (typeof context === 'function')
      ? context() : context;

    //
    return { media };
  }

  render() {
    const {
      children // eslint-disable-line
      } = this.props;

    return children.length > 1
      ? createElement('div', {}, children)
      : cloneElement(children, {});
  }
}
