import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { grey700, grey600, lightGreen500 } from 'material-ui/styles/colors';
import { Hero } from 'shared/components/hero';
import { Section } from 'shared/components/section';
import { IconGroup } from 'shared/components/icon_group';
import Subheader from 'material-ui/Subheader';
import FontIcon from 'material-ui/FontIcon';
import { Element, Link } from 'react-scroll';
import { ExperienceVc } from './experience_view_controller';
import { ProjectsVc } from './projects_view_controller';
import '../styles/portfolio_view_controller';

export class PortfolioVc extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      headerText: "woah that's me",
    };

    this.scrollTop = this.scrollTop.bind(this);
    this.scrollNotTop = this.scrollNotTop.bind(this);
  }

  scrollTop() {
    this.setState({ headerText: "woah that's me" });
  }

  scrollNotTop() {
    this.setState({ headerText: "Michael Hu" });
  }

  renderDrawer() {
    return (
      <Drawer
        open={this.props.open}
        className="drawer-nav"
        width={250}
      >
        <Link
          onSetActive={this.scrollTop}
          onSetInactive={this.scrollNotTop}
          to="hero"
          smooth
          spy
          duration={500}
          offset={-64}
        >
          <div className="nav-home">
            {this.state.headerText}
          </div>
        </Link>
        <Subheader>Portfolio</Subheader>
        <Link activeClass="menu-active" to="about" smooth spy duration={500} offset={-64}>
          <MenuItem
            primaryText="About"
            leftIcon={<FontIcon className="fa fa-pencil" color={lightGreen500} />}
          />
        </Link>
        <Link activeClass="menu-active" to="experience" smooth spy duration={500} offset={-64}>
          <MenuItem
            primaryText="Experience"
            leftIcon={<FontIcon className="fa fa-graduation-cap" color={lightGreen500} />}
          />
        </Link>
        <Link activeClass="menu-active" to="projects" smooth spy duration={500} offset={-64}>
          <MenuItem
            primaryText="Projects"
            leftIcon={<FontIcon className="fa fa-laptop" color={lightGreen500} />}
          />
        </Link>
        <Subheader>Misc</Subheader>
        <MenuItem
          primaryText="Hobbies"
          disabled
          leftIcon={<FontIcon className="fa fa-camera" color={grey600} />}
        />
        <MenuItem
          primaryText="Blog"
          disabled
          leftIcon={<FontIcon className="fa fa-bullhorn" color={grey600} />}
        />
      </Drawer>
    );
  }

  render() {
    return (
      <div className="portfolio-vc">
        <Element name="hero" className="hero-wrapper">
          <Hero
            title="Michael Hu"
            text="software engineer"
          />
        </Element>
        <Element name="about">
          <Section title="About">
            <p>I&apos;m a grad student at Cornell University grabbing an MEng in computer science. My background is that of a web developer with some machine learning here or there, but I&apos;m really hoping to flex my machine learning and distributed computing skills during my time in grad school.</p>
            <p>This site hosts something that might resemble a resume, but its true purpose is to organize my software projects over the years. I&apos;m also planning to grow a blog off it at some later point.</p>
            <div className="icon-group-wrapper">
              <IconGroup
                icons={[
                  { name: "github", url: "https://github.com/TheMichaelHu" },
                  { name: "linkedin", url: "https://www.linkedin.com/in/michaelanhu/" },
                  { name: "twitter", url: "https://twitter.com/TheMichaelHu" },
                  { name: "envelope", url: "mailto:michael.an.hu@gmail.com" },
                ]}
                size="large"
              />
            </div>
          </Section>
        </Element>
        <Element name="experience">
          <ExperienceVc />
        </Element>
        <Element name="projects">
          <Section title="Projects" color={grey700}>
            <div className="projects-vc-wrapper">
              <ProjectsVc />
            </div>
          </Section>
        </Element>
        {this.renderDrawer()}
      </div>
    );
  }
}

PortfolioVc.propTypes = {
  open: PropTypes.bool,
};

PortfolioVc.defaultProps = {
  open: false,
};
