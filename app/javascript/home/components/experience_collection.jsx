import { ExperienceItem } from './experience_item';

export class ExperienceCollection extends React.PureComponent {
  renderExperiences() {
    return _.map(this.props.experiences, experience => (
      <ExperienceItem
        {...experience}
        key={experience.company}
      />
    ));
  }

  render() {
    return (
      <div className="experience-collection">
        {this.renderExperiences()}
      </div>
    );
  }
}

ExperienceCollection.propTypes = {
  experiences: PropTypes.arrayOf(PropTypes.object).isRequired,
};
