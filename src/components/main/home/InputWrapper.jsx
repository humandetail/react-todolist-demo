import React from 'react';
import nanoid from 'nanoid';
import { connect } from 'react-redux';
import { addItem } from '@/redux/actions';

class InputWrapper extends React.Component {

  // 提交内容
  handleSubmit = async () => {
    const oInput = this.refs.input,
          value = oInput.value.trim('');

    if (value == '') {
      return;
    }

    await this.props.addItem({
      id: nanoid(10),
      content: value,
      done: false
    });

    oInput.value = '';
  }

  render () {
    return (
      <div className="input-wrapper input-group mb-3">
        <input type="text" className="form-control form-control-lg" placeholder="请输入待办事项..." ref="input" />
        <div className="input-group-append">
          <button
            className="btn btn-primary px-5"
            type="button"
            onClick={ this.handleSubmit }
          >
            <span className="fa fa-plus"></span>
          </button>
        </div>
      </div>
    );
  }

}

export default connect(
  state => ({
    list: state
  }),
  { addItem }
)(InputWrapper);