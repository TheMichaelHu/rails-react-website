import { ProjectFilters } from './project_filters';
import { ProjectCollection } from './project_collection';

import '../styles/projects_view_controller';

export class ProjectsVc extends React.PureComponent {
  render() {
    return (
      <div className="projects-vc">
        <ProjectFilters />
        <div className="project-collection-wrapper">
          <ProjectCollection />
        </div>
      </div>
    );
  }
}
