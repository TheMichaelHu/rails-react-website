import FlipMove from 'react-flip-move';
import { ProjectCard } from './project_card';

export class ProjectCollection extends React.PureComponent {
  render() {
    return (
      <div className="experience-collection">
        <FlipMove duration={400} easing="ease-in-out">
          {this.props.projects.map(project => (
            <ProjectCard project={project} key={project.title} />
          ))}
        </FlipMove>
      </div>
    );
  }
}

ProjectCollection.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
};
