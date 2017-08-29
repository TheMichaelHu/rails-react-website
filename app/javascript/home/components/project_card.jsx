import { Card, CardMedia, CardTitle } from 'material-ui/Card';

import "../styles/project_card";

export class ProjectCard extends React.PureComponent {
  render() {
    const imgUrl = this.props.project.image_url || "http://via.placeholder.com/350x150";

    return (
      <div className="project-card">
        <a href={`/projects/${this.props.project.id}`}>
          <Card style={{ width: 400 }}>
            <CardMedia>
              <img src={imgUrl} alt={this.props.project.title} />
            </CardMedia>
            <CardTitle
              title={this.props.project.title}
              subtitle={this.props.project.description}
              style={{ height: 100, overflow: "hidden" }}
            />
          </Card>
        </a>
      </div>
    );
  }
}

ProjectCard.propTypes = {
  project: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])).isRequired,
};
