import React from 'react';

import CommonHeader from '@/components/header/Header';
import HomeMain from '@/components/main/Home';

class Home extends React.Component {

  constructor () {
    super();
  }

  render () {
    return (
      <div className="home-page">
        <CommonHeader name={ 'TodoList' } />
        <HomeMain />
      </div>
    );
  }
}

export default Home;