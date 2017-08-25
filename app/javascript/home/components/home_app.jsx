import React from 'react';
import ReactDOM from 'react-dom';
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

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <HomeApp />,
    document.getElementById("home-app"),
  )
});
