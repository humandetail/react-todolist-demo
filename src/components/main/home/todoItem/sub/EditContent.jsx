import React from 'react';
import { connect } from 'react-redux';
import { updateItem } from '@/redux/actions';

class EditContent extends React.Component {
  
  constructor (props) {
    super(props);

    // 获取父组件传递的内容，通过子组件修改完成确认后再修改
    this.state = {
      content: props.item.content
    }
  }

  // 生命周期钩子 - 组件挂载完毕
  componentDidMount () {

    this.refs.input.focus();

    this._handleDocClick = this.handleDocClick.bind(this);
    document.addEventListener('click', this._handleDocClick, false);
  }

  // 生命周期钩子 - 组件卸载之前
  componentWillUnmount () {
    // 移除事件监听函数
    document.removeEventListener('click', this._handleDocClick, false);
  }

  handleDocClick (e) {
    const target = e.target;
    
    if (target !== this.refs.input && target !== this.refs.button) {
      this.props.handleEdit(); // 当用户点击页面其它地方时，取消修改
    }
  }

  // 处理value的变化
  handelChange = (e) => {
    this.setState({
      content: e.target.value
    })
  }

  // 提交修改内容
  handleConfirm = () => {
    const content = this.state.content.trim(),
          item = this.props.item;

    if (content !== '' && content !== item.content) {
      const newItem = Object.assign({}, item, {
        content
      });
      this.props.updateItem(newItem);
    }

    this.props.handleEdit();
  }

  render () {

    return (
      <div className="edit-content input-group">
        <input 
          type="text"
          className="form-control"
          value={ this.state.content }
          onChange={this.handelChange}
          ref="input"
        />
        <div className="input-group-append">
          <button className="btn btn-primary px-2" type="button" onClick={ this.handleConfirm } ref="button">
            <span className="fa fa-check-circle"></span>
          </button>
        </div>
      </div>
    );
  }

}

export default connect(
  (state) => ({ list: state }),
  { updateItem }
)(EditContent);