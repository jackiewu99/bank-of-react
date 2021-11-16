import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';



class Credit extends Component {
  constructor () {
    super()
    this.state = {
      gain: {
        cost: '',
        reason: '',
        date:''
      },
      redirect: false
    }
  }

  handleChange = (e) => {
    const updatedUser = {...this.state.gain}
    const inputField = e.target.name
    const inputValue = e.target.value
    updatedUser[inputField] = inputValue

    this.setState({gain: updatedUser})
  }



  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addCredit(this.state.gain)
  }


  render () {
    return (
      <div>
        <h1>CREDIT</h1>
        <AccountBalance accountBalance={this.props.accountBalance}/>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="Reason">Reason</label>
            <input type="text" name="reason" />

          </div>
          <div>
            <label htmlFor="Amount">Amount</label>
            <input type="number" name="cost" onChange={this.handleChange} value={this.state.gain.cost} />
          </div>
          <button>Add Credit</button>
        </form>
        <Link to="./">Home</Link>
        <Link to="/userprofile">User Profile</Link>
        <Link to="/debit">Debit</Link>
      </div>
      
      
    )
  }
}


export default Credit;