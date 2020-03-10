import React from 'react';

class EditBtn extends React.Component {
  render () {
    if (this.props.field === 'Todo') {
      return (
        <a href="#" className="px-1 text-primary" onClick={this.props.handleEdit}>
          <span className="fa fa-edit"></span>
        </a>
      );
    } else {
      return '';
    }
  }
}

export default EditBtn;