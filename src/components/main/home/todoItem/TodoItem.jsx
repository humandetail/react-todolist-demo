import React from 'react';

import Content from './sub/Content';
import EditContent from './sub/EditContent';
import EditBtn from './sub/EditBtn';
import RemoveBtn from './sub/RemoveBtn';
import CheckedBtn from './sub/CheckedBtn';

class TodoItem extends React.Component {

  constructor () {
    super();

    this.state = {
      isEdit: false
    }
  }

  // 更换内容的待修改状态
  handleEdit = () => {
    this.setState({
      isEdit: !this.state.isEdit
    })
  }

  render () {
    const { field, item } = this.props;

    return (
      <li className="list-item shadow p-3 mb-3 bg-white d-flex align-items-center">
        <div className="content flex-fill mr-3">
          {
            this.state.isEdit
              ? <EditContent item={ item } handleEdit={ this.handleEdit } />
              : <Content content={ item.content } />
          }
        </div>
        <div className="operations btn-group">
          <EditBtn
            field={ field }
            item={ item }
            handleEdit={ this.handleEdit }
          />
          <RemoveBtn
            id={ item.id }
          />
          <CheckedBtn field={ field } item={ item } />
        </div>
      </li>
    );
  }

}

export default TodoItem;