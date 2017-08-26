import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import { lightGreen200, lightGreen500 } from 'material-ui/styles/colors';

// import '../styles/hero';

export class IconGroup extends React.PureComponent {
  constructor(props) {
    super(props);

    this.styles = {
      smallIcon: { width: 36, height: 36, fontSize: 36 },
      mediumIcon: { width: 48, height: 48, fontSize: 48 },
      largeIcon: { width: 60, height: 60, fontSize: 60 },
      small: { width: 72, height: 72, padding: 16 },
      medium: { width: 96, height: 96, padding: 24 },
      large: { width: 120, height: 120, padding: 30 },
    };
  }

  renderIcons() {
    let counter = 0;

    const icons = _.map(this.props.icons, (icon) => {
      counter += 1;
      return (
        <a href={icon.url}>
          <IconButton
            key={`icon ${counter}`}
            iconStyle={this.styles[`${this.props.size}Icon`]}
            tooltipStyles={this.styles[`${this.props.size}Tooltip`]}
            style={this.styles[this.props.size]}
          >
            <FontIcon
              className={`fa fa-${icon.name}`}
              color={lightGreen500}
              hoverColor={lightGreen200}
            />
          </IconButton>
        </a>
      );
    });

    return icons;
  }

  render() {
    return (
      <div className="icon-group">
        {this.renderIcons() }
      </div>
    );
  }
}

IconGroup.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  icons: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};

IconGroup.defaultProps = {
  size: "medium",
  icons: [],
};
