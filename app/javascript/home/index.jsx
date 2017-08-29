import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { HomeApp } from './components/home_app';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <BrowserRouter>
      <HomeApp />
    </BrowserRouter>,
    document.getElementById("home-app"),
  );
});
