import React from 'react';

export default class Content extends React.Component {

  render () {
    return (
      <div className="text">{ this.props.content }</div>
    );
  }

}