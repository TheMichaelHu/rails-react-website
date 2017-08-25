import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { HomeVc } from './home_view_controller';

export class HomeApp extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <HomeVc />
      </MuiThemeProvider>
    );
  }
}
