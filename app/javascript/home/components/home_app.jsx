import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
  lightGreen200, lightGreen500,
  cyan700,
  grey50, grey400, grey800, grey900,
} from 'material-ui/styles/colors';
import { fade } from 'material-ui/utils/colorManipulator';
import MediaQuery from 'react-responsive';

import { HomeVc } from './home_view_controller';

export class HomeApp extends React.Component {
  render() {
    const muiTheme = getMuiTheme({
      palette: {
        primary1Color:      grey900,
        primary2Color:      grey800,
        primary3Color:      grey400,
        accent1Color:       lightGreen500,
        accent2Color:       cyan700,
        accent3Color:       lightGreen200,
        textColor:          grey50,
        secondaryTextColor: fade(grey50, 0.7),
        alternateTextColor: grey50,
        canvasColor:        fade(grey900, 0.97),
        borderColor:        fade(grey50, 0.3),
        disabledColor:      fade(grey50, 0.3),
        pickerHeaderColor:  fade(grey50, 0.12),
        clockCircleColor:   fade(grey50, 0.12),
      },
    });

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <MediaQuery query="(min-width: 1224px)">
            <HomeVc />
          </MediaQuery>
          <MediaQuery query="(max-width: 1224px)">
            <HomeVc mobile />
          </MediaQuery>
        </div>
      </MuiThemeProvider>
    );
  }
}
