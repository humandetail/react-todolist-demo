import React from 'react';
import { connect } from 'react-redux';
import { deleteItem } from '@/redux/actions';

class RemoveBtn extends React.Component {

  // 操作删除该项内容
  handleDelete = () => {
    if (confirm('是否要删除这一项？')) {
      this.props.deleteItem(this.props.id);
    }
  }

  render () {
    return (
      <a href="#" className="px-1 text-danger" onClick={ this.handleDelete }>
        <span className="fa fa-times"></span>
      </a>
    );
  }
}

// export default RemoveBtn;
export default connect(
  (state) => ({ list: state }),
  { deleteItem }
)(RemoveBtn);