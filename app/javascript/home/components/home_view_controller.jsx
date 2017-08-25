import React from 'react';
import PropTypes from 'prop-types'

export class HomeVc extends React.PureComponent {
  render() {
    return (
      <div className="home-vc">
        {this.props.text}
      </div>
    )
  }
}

HomeVc.propTypes = {
  text: PropTypes.string,
};

HomeVc.defaultProps = {
  text: "hi",
};
