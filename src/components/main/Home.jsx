import React from 'react';

import InputWrapper from './home/InputWrapper';
import TodoList from './home/TodoList';

import { connect } from 'react-redux';

class HomeMain extends React.Component {
  constructor () {
    super();
  }

  getList (done) {
    return this.props.list.filter((item) => item.done === done);
  }

  render () {
    const _todoList = this.getList(false),
          _doneList = this.getList(true);

    return (
      <div className="container home-main">
        <InputWrapper />
        {
          _todoList.length > 0 ? <TodoList field="Todo" list={ _todoList } /> : ''
        }
        {
          _doneList.length > 0 ? <TodoList field="Done" list={ _doneList } /> : ''
        }
      </div>
    );
  }

}

export default connect(
  state => ({
    list: state
  })
)(HomeMain);

