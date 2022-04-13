/*
 * @Date: 2022-04-13 14:00:09
 * @LastEditors: xiongzeluo
 * @LastEditTime: 2022-04-13 14:34:54
 * @FilePath: /generationNovel/Users/luoxiongze/code/duellinks-maybe-cards/src/App.tsx
 */

// eslint-disable-next-line no-unused-vars
import { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import DuelLinks from './pages/DuelLinks';
import { store } from './store/index';
import { consoleLog } from './utils/console';
import './style.less';
import 'antd/dist/antd.less';

class App extends Component {
  render() {
    // consoleLog('2022-01-26 1533');
    return (
      <Provider store={store}>
        <HashRouter>
          <Switch>
            <Route path='/' component={DuelLinks} />
          </Switch>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
