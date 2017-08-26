import '../styles/section';

export class Section extends React.PureComponent {
  render() {
    return (
      <div className="section" style={{ backgroundColor: this.props.color }}>
        <div className="title">
          {this.props.title}
        </div>
        <hr />
        <div className="content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  color: PropTypes.string,
};

Section.defaultProps = {
  title: "",
  children: null,
  color: null,
};
