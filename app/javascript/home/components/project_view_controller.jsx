import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { lightGreen500 } from 'material-ui/styles/colors';
import { Hero } from 'shared/components/hero';
import { Section } from 'shared/components/section';
import Subheader from 'material-ui/Subheader';
import FontIcon from 'material-ui/FontIcon';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

import { IconGroup } from 'shared/components/icon_group';

import "../styles/project_view_controller";

export class ProjectVc extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { project: {} };
  }

  componentWillMount() {
    return fetch(`/projects/${this.props.router.match.params.id}`).then((response) => {
      return response.json();
    }).then((project) => {
      this.setState({ project });
    });
  }

  getIcons() {
    const icons = [];
    if (this.state.project.code_url) {
      icons.push({ name: "github", url: this.state.project.code_url, tooltip: "repo" });
    }
    if (this.state.project.demo_url) {
      icons.push({ name: "laptop", url: this.state.project.demo_url, tooltip: "demo" });
    }
    return icons;
  }

  renderDrawer() {
    return (
      <Drawer
        open={this.props.open}
        className="drawer-nav"
        width={250}
      >
        <Link to="/">
          <div className="nav-home">
            Michael Hu
          </div>
        </Link>
        <Subheader>Portfolio</Subheader>
        <Link to="/">
          <MenuItem
            primaryText="Back"
            leftIcon={<FontIcon className="fa fa-chevron-left" color={lightGreen500} />}
          />
        </Link>
      </Drawer>
    );
  }

  render() {
    const project = this.state.project;

    return (
      <div className="project-vc">
        <div className="hero-wrapper">
          <Hero
            title={project.title}
            text={project.description}
          />
        </div>
        <div
          className="cover-img"
          style={{
            background:     `url(${project.img_url}) no-repeat center`,
            backgroundSize: "cover",
          }}
          alt={project.title}
        />
        <Section title="Info">
          <span className="title">Type: </span>
          {project.type} Project <br />
          <span className="title">Team: </span>
          {project.team} <br />
          <span className="title">Tech: </span>
          {project.tools}

          <div className="icon-group-wrapper">
            <IconGroup
              icons={this.getIcons()}
              size="large"
            />
          </div>
        </Section>
        <Section title="Summary">
          <ReactMarkdown source={project.text} />
        </Section>
        {this.renderDrawer()}
      </div>
    );
  }
}
ProjectVc.propTypes = {
  open:   PropTypes.bool,
  router: PropTypes.objectOf(PropTypes.object),
};

ProjectVc.defaultProps = {
  open:   false,
  router: {},
};
