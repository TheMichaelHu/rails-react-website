import '../styles/hero';

export class Hero extends React.PureComponent {
  render() {
    return (
      <div className="hero">
        <div className="hero-content">
          <div className="title">
            {this.props.title}
          </div>
          <span className="text">
            {this.props.text}
          </span>
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
