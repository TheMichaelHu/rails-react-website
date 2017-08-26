import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FontIcon from 'material-ui/FontIcon';
import Subheader from 'material-ui/Subheader';
import { grey600, lightGreen400 } from 'material-ui/styles/colors';
import Paper from 'material-ui/Paper';

import '../styles/home_view_controller';

export class HomeVc extends React.Component {
  constructor(props) {
    super(props);
    this.state = { openDrawer: !props.mobile };

    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  toggleDrawer() {
    this.setState({ openDrawer: !this.state.openDrawer });
  }

  renderDrawer() {
    return (
      <Drawer
        open={this.state.openDrawer}
        className="drawer-nav"
        width={250}
      >
        <div className="nav-home">
          Michael Hu
        </div>
        <Subheader>Portfolio</Subheader>
        <MenuItem
          primaryText="About"
          leftIcon={<FontIcon className="fa fa-pencil" color={lightGreen400} />}
        />
        <MenuItem
          primaryText="Experience"
          leftIcon={<FontIcon className="fa fa-graduation-cap" color={lightGreen400} />}
        />
        <MenuItem
          primaryText="Projects"
          leftIcon={<FontIcon className="fa fa-laptop" color={lightGreen400} />}
        />
        <MenuItem
          primaryText="Contact"
          leftIcon={<FontIcon className="fa fa-envelope" color={lightGreen400} />}
        />
        <Subheader>Misc</Subheader>
        <MenuItem
          primaryText="Photography"
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
      <AppBar
        title={this.props.mobile ? "Portfolio" : ""}
        iconElementLeft={this.props.mobile ? undefined : (<div />)}
        onLeftIconButtonTouchTap={this.toggleDrawer}
      />
    );
  }

  renderFooter() {
    return (
      <div className="nav-footer">
        <Paper zDepth={1}>
          <div className="nav-footer-content">
            Copyright 2017 | Michael Hu
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
            Content
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
