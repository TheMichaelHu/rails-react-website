import AppBar from 'material-ui/AppBar';
import FontIcon from 'material-ui/FontIcon';
import Paper from 'material-ui/Paper';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import { Route, Switch } from 'react-router-dom';

import { PortfolioVc } from './portfolio_view_controller';
import { ProjectVc } from './project_view_controller';
import { HobbiesVc } from './hobbies_view_controller';
import '../styles/home_view_controller';

export class HomeVc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openDrawer: !props.mobile,
    };

    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  toggleDrawer() {
    this.setState({ openDrawer: !this.state.openDrawer });
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
            <p>Copyright 2018 Michael Hu | All Rights Reserved</p>
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
            <Switch>
              <Route
                exact
                path="/"
                component={() => <PortfolioVc open={this.state.openDrawer} />}
              />
              <Route
                exact
                path="/hobbies"
                component={() => <HobbiesVc open={this.state.openDrawer} />}
              />
              <Route
                path="/project/:id"
                component={router => <ProjectVc router={router} open={this.state.openDrawer} />}
              />
            </Switch>
          </div>
          {this.renderFooter()}
        </div>
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
