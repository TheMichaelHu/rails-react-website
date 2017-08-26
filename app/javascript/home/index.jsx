import ReactDOM from 'react-dom';
import { HomeApp } from './components/home_app';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <HomeApp />,
    document.getElementById("home-app"),
  );
});
