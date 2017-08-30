import { Card, CardMedia, CardTitle } from 'material-ui/Card';
import { Link } from 'react-router-dom';

import "../styles/project_card";

export class ProjectCard extends React.PureComponent {
  render() {
    const imgUrl = this.props.project.img_url || "http://via.placeholder.com/350x150";

    return (
      <div className="project-card">
        <Link to={`/project/${this.props.project.id}`}>
          <Card className="card">
            <CardMedia>
              <div
                className="card-img"
                style={{
                  background:     `url(${imgUrl}) no-repeat center`,
                  backgroundSize: "cover",
                }}
                alt={this.props.project.title}
              />
            </CardMedia>
            <CardTitle
              title={this.props.project.title}
              subtitle={this.props.project.description}
              className="card-text"
            />
          </Card>
        </Link>
      </div>
    );
  }
}

ProjectCard.propTypes = {
  project: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])).isRequired,
};
