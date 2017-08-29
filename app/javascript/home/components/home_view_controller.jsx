import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FontIcon from 'material-ui/FontIcon';
import Subheader from 'material-ui/Subheader';
import { grey600, lightGreen500 } from 'material-ui/styles/colors';
import Paper from 'material-ui/Paper';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Scroll from 'react-scroll';

import { PortfolioVc } from './portfolio_view_controller';
import '../styles/home_view_controller';

const Link = Scroll.Link;

export class HomeVc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openDrawer: !props.mobile,
      headerText: "woah that's me",
    };

    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.scrollTop = this.scrollTop.bind(this);
    this.scrollNotTop = this.scrollNotTop.bind(this);
  }

  toggleDrawer() {
    this.setState({ openDrawer: !this.state.openDrawer });
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
        open={this.state.openDrawer}
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

  renderHeader() {
    return (
      <div className="nav-header">
        <AppBar
          iconElementLeft={this.props.mobile ? undefined : (<div />)}
          onLeftIconButtonTouchTap={this.toggleDrawer}
          style={{ boxShadow: "none" }}
        />
      </div>
    );
  }

  renderFooter() {
    const actionStyle = {
      float:       "right",
      marginRight: 25,
      marginTop:   -25,
    };

    return (
      <div className="nav-footer">
        <a href="mailto:michael.an.hu@gmail.com">
          <FloatingActionButton style={actionStyle} secondary>
            <FontIcon className="fa fa-envelope" />
          </FloatingActionButton>
        </a>
        <Paper zDepth={1}>
          <div className="nav-footer-content">
            <p>Copyright 2017 Michael Hu | All Rights Reserved</p>
            <p>Many thanks to the team behind <a href="http://www.material-ui.com/">Material-UI</a> for making amazing React components so I didn&apos;t have to!</p>
          </div>
        </Paper>
      </div>
    );
  }

  render() {
    return (
      <div className="home-vc">
        <div className={`home-wrapper ${this.state.openDrawer ? "shifted" : "unshifted"}`}>
          {this.renderHeader()}
          <div className="home-content">
            <PortfolioVc />
          </div>
          {this.renderFooter()}
        </div>
        {this.renderDrawer()}
      </div>
    );
  }
}

HomeVc.propTypes = {
  mobile: PropTypes.bool,
};

HomeVc.defaultProps = {
  mobile: false,
};
