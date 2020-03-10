import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@/assets/styles/common.scss';
import '@/assets/styles/home.scss';

import Home from '@/views/home';

store.subscribe(render); // 当状态发生变化时，重新渲染组件

function render () {
  ReactDOM.render(
    (
      <Provider store={ store }>
        <Home />
      </Provider>
    ),
    document.getElementById('app')
  );
}

render();