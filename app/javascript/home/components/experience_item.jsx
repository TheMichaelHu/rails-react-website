import '../styles/experience_item';

export class ExperienceItem extends React.PureComponent {
  renderBullets() {
    if (!this.props.bullets) {
      return null;
    }

    return (
      <ul>
        {_.map(this.props.bullets, bullet => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="experience-item">
        <span>
          <b>{this.props.company}</b>,&nbsp;
          {this.props.location}
        </span>
        <span className="tenure">{this.props.tenure}</span>
        <div className="title">{this.props.title}</div>
        {this.renderBullets()}
      </div>
    );
  }
}

ExperienceItem.propTypes = {
  company:  PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  tenure:   PropTypes.string.isRequired,
  title:    PropTypes.string.isRequired,
  bullets:  PropTypes.arrayOf(PropTypes.string),
};

ExperienceItem.defaultProps = {
  bullets: null,
};
