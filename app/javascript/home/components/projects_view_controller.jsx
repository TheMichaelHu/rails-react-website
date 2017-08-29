import { ProjectFilters } from './project_filters';
import { ProjectCollection } from './project_collection';

import '../styles/projects_view_controller';

export class ProjectsVc extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { projects: [] };
    this.filters = {};
    this.updateFilters = this.updateFilters.bind(this);
  }

  componentWillMount() {
    this.updateFilters({});
  }

  getProjects(filters) {
    const query = _.map(_.keys(filters), (k) => {
      if (!filters[k]) { return ""; }
      return `${k}=${filters[k]}`;
    });
    return fetch(`/projects?${query.join("&")}`).then((response) => {
      return response.json();
    }).then((json) => {
      return json;
    });
  }

  updateFilters(filters) {
    this.filters = _.assign(this.filters, filters);
    this.getProjects(this.filters).then((projects) => {
      this.setState({ projects });
    });
  }

  renderProjects() {
    if (!this.state.projects) {
      return (
        <div className="no-projects">No projects found!</div>
      );
    }

    return (
      <ProjectCollection projects={this.state.projects} />
    );
  }

  render() {
    return (
      <div className="projects-vc">
        <ProjectFilters onFilter={this.updateFilters} />
        <div className="project-collection-wrapper">
          {this.renderProjects()}
        </div>
      </div>
    );
  }
}
