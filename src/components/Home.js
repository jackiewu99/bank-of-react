// src/components/Home.js


import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';

class Home extends Component {
  render() {
    return (
        <div>
          <h1>Bank of React</h1>

          <Link to="/userProfile">User Profile</Link>
          

          <AccountBalance accountBalance={this.props.accountBalance}/>
          <Link to="/login">Logout</Link>
          <br/> 
          <Link to="/debit">Debit</Link>
          <br/> 
          <Link to="/credit">Credit</Link>
        </div>
        
    );
  }
}

export default Home;