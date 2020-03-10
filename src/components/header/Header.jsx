import React from 'react';

class CommonHeader extends React.Component {

  render () {
    return (
      <header className="header bg-primary p-1">
        <h1 className="text-center text-white mb-0">{ this.props.name }</h1>
      </header>
    );
  }

}

export default CommonHeader;