import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import Debit from './components/Debit'
import Credit from './components/Credit'
import LogIn from './components/Login';

import axios from "axios";

class App extends Component {

  mockLogIn = (logInInfo) => {
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
  }

  addDebit = (debitAmount) => //addDebit function to add the debit to account balance
  {
    var debt = this.state.accountBalance
    debt = (parseFloat(this.state.accountBalance) - debitAmount.amount)
    this.setState({accountBalance: Math.round(debt * 100) / 100})

  }

  addCredit = (creditAmount) => //addCredit function to add the credit to account balance
  {
    var cred = this.state.accountBalance
    alert(creditAmount.amount)
    if(creditAmount.amount == '')
      {
        this.setState({accountBalance: Math.round(cred * 100) / 100})
        return;
      
      }
    cred =  (parseFloat(this.state.accountBalance) + parseFloat(creditAmount.amount))
    this.setState({accountBalance: Math.round(cred * 100) / 100})
    
  }
  constructor() {
    
    super();
    this.state = {
      
      accountBalance: 0,
      currentUser: {
        userName: 'joe_shmo',
        memberSince: '07/23/96',
      },
      debits: [],
      credits: []
    }  
  }

  async componentDidMount() { //gets the given data and inserts into debits,credits, and account balance
    let debits = await axios.get("https://moj-api.herokuapp.com/debits")
    let credits = await axios.get("https://moj-api.herokuapp.com/credits")

    debits = debits.data
    credits = credits.data
    let debitSum = 0, creditSum = 0;
    debits.forEach((debit)=>{
    debitSum += debit.amount
  })
  credits.forEach((credit)=>{
    creditSum += credit.amount
  })
  let accountBalance = Number.parseFloat((creditSum - debitSum)).toFixed(2);
  this.setState({debits, credits, accountBalance});

  }
  
  
  



  render() {
    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
    const UserProfileComponent = () => (<UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}  /> );
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} />);
    const DebitComponent = () => (<Debit accountBalance={this.state.accountBalance} addDebit={this.addDebit} debitInfo={this.state.debits}/> );
    const CreditComponent = () => (<Credit accountBalance={this.state.accountBalance} addCredit={this.addCredit} creditInfo={this.state.credits}/> );
    return (
        <Router>
          <div>

            <Route exact path="/" render={HomeComponent}/>
            <Route exact path="/userProfile" render={UserProfileComponent}/>
            <Route exact path="/login" render={LogInComponent}/>
            <Route exact path="/debit" render={DebitComponent}/>
            <Route exact path="/credit" render={CreditComponent}/>
          </div>
        </Router>
    );
  }

}

export default App