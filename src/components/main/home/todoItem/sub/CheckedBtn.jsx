import React from 'react';
import { connect } from 'react-redux';
import { updateItem } from '@/redux/actions';

class CheckedBtn extends React.Component {

  // 修改该项是否标注成已完成状态
  handleChecked = (checked) => {
    if (confirm('确认执行操作？')) {
      this.props.updateItem(Object.assign(this.props.item, {
        done: checked
      }));
    }
  }

  render () {
    switch (this.props.field) {
      case 'Todo':
        return (
          <a href="#" className="px-1 text-success" onClick={ this.handleChecked.bind(this, true) }>
            <span className="fa fa-check"></span>
          </a>
        );
      case 'Done':
        return (
          <a href="#" className="px-1 text-success" onClick={ this.handleChecked.bind(this, false) }>
            <span className="fa fa-minus"></span>
          </a>
        );
      default:
        return '';
    }
  }
}

export default connect(
  (state) => ({ list: state }),
  { updateItem }
)(CheckedBtn);
