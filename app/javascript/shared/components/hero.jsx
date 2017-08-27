import '../styles/hero';

export class Hero extends React.PureComponent {
  render() {
    return (
      <div className="hero">
        <div className="hero-content">
          <div className="title">
            {this.props.title}
          </div>
          <div className="text">
            {this.props.text}
          </div>
        </div>
      </div>
    );
  }
}

Hero.propTypes = {
  title: PropTypes.string,
  text:  PropTypes.string,
};

Hero.defaultProps = {
  title: "",
  text:  "",
};
