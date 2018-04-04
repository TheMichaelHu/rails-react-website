import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { lightGreen500 } from 'material-ui/styles/colors';
import { Hero } from 'shared/components/hero';
import { Section } from 'shared/components/section';
import Subheader from 'material-ui/Subheader';
import FontIcon from 'material-ui/FontIcon';
import { Link } from 'react-router-dom';

import "../styles/hobbies_view_controller";

export class HobbiesVc extends React.PureComponent {
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
        <Subheader>Hobbies</Subheader>
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
    return (
      <div className="hobbies-vc">
        <div className="hero-wrapper">
          <Hero
            title="Hobbies"
            text="tl;dr I need to go outside more"
          />
        </div>
        <Section title="Photoshop Self Portraits">
          <p>
            Ever since freshman year of high school I&apos;ve been making surreal self-portraits using Photoshop or MS paint. I publically share the subset of creations I like on <a href="https://www.instagram.com/themichaelhu/" target="_blank" rel="noopener noreferrer">Instagram</a>. A lot of my inspiration is drawn from Photoshop effects I come across online, random shower thoughts, and suggestions from friends.
          </p>
          <center>
            <a
              className="snapwidget-wrapper"
              href="https://www.instagram.com/themichaelhu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="blocker" />
              <script src="https://snapwidget.com/js/snapwidget.js" />
              <iframe
                title="instagram-widget"
                src="https://snapwidget.com/embed/528277"
                className="snapwidget-widget"
                allowTransparency="true"
                scrolling="no"
                style={
                  {
                    border:   "none",
                    overflow: "hidden",
                    width:    "100%",
                    maxWidth: 765,
                    height:   600,
                  }
                }
              />
            </a>
          </center>
        </Section>
        {this.renderDrawer()}
      </div>
    );
  }
}
HobbiesVc.propTypes = {
  open: PropTypes.bool,
};

HobbiesVc.defaultProps = {
  open:   false,
  router: {},
};
