import React from 'react';
import TodoItem from './todoItem/TodoItem';

class TodoList extends React.Component {

  render () {

    return (
      <section className="todo-list mt-5">
        <header className="section-header d-flex align-items-center">
          <h2 className="section-title flex-fill">{ this.props.field }</h2>
          <div className="count">
            <span className="badge badge-light">{ this.props.list.length }</span>
          </div>
        </header>

        <ul className="list">
          {
            this.props.list.map(
              (item) => <TodoItem item={ item } key={ item.id } field={ this.props.field } />
            )
          }
        </ul>
      </section>
    );
  }

}

export default TodoList;