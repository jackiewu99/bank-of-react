import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';



class Debit extends Component {
  constructor () {
    super()
    this.state = {
      pay: {
        cost: 0,
        reason: '',
        date:''
      },
      redirect: false
      
    }
  }




  handleChange = (e) => {
    const updatedUser = {...this.state.pay}
    const inputField = e.target.name
    const inputValue = e.target.value
    updatedUser[inputField] = inputValue

    this.setState({user: updatedUser})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addDebit(this.state.user)//the line that actually changes the username
    
  }


  render () {

    return (
      <div>
        <h2></h2>
         <h1>DEBIT</h1>
        <AccountBalance accountBalance={this.props.accountBalance}/>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="Reason">Reason</label>
            <input type="text" name="reason" />
          </div>
          <div>
            <label htmlFor="Amount">Amount</label>
            <input type="number" name="cost" onChange={this.handleChange} value={this.state.pay.cost} />
          </div>
          <button>Add Debit</button>
        </form>
        <Link to="./">Home</Link>
        <Link to="/userprofile">User Profile</Link>
        <Link to="/credit">Credit</Link>
      </div>
      
      
    )
  }
}


export default Debit;