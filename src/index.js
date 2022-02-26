import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import reducer from './reducer';
import App from './components/App/App';
import 'antd/dist/antd.css';
import './reset.scss';
import './components/App/App.scss';
import './components/Header/Header.scss';
import './components/Article/Article.scss';
import './components/ArticleList/ArticleList.scss';
import './components/AlloneArticle/AlloneArticle.scss';


const root = document.querySelector('.root');

const logger = (store) => (next) => (actions) => {
  const res = next(actions);
  console.log(store.getState());
  return res;
};

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(logger, thunk)));

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  root
);
