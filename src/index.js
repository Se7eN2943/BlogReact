import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store';
import App from './components/App/App';
import 'antd/dist/antd.css';
import './style/reset.scss';
import './components/App/App.scss';
import './components/Header/Header.scss';
import './components/Article/Article.scss';
import './components/Forms/AccountForms.scss';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.querySelector('.root')
);
