import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';



class Credit extends Component {
  constructor () {
    super()
    this.state = {
      gain: {
        amount: '',
        description: '',
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

    this.props.creditInfo.push(this.state.gain)
    this.displayItems();
  }

  displayItems = () =>{
    var displayItem = ''
      for(var i = 0; i < this.props.creditInfo.length;i++)
      {
       displayItem = displayItem + <br/> + 'Date:  ' + this.props.creditInfo[i].date.substring(0,10) + 
                                      ' Item:   ' + this.props.creditInfo[i].description + 
                                      ' Cost:   ' + this.props.creditInfo[i].amount
      }
     return displayItem = displayItem.split(<br/>)
    }

  render () {
    return (
      <div>
        <h2>{this.displayItems()}</h2>
        <h1>CREDIT</h1>
        <AccountBalance accountBalance={this.props.accountBalance}/>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="Reason">Reason</label>
            <input type="text" name="description" onChange={this.handleChange} value={this.state.gain.description}/>

          </div>
          <div>
            <label htmlFor="Amount">Amount</label>
            <input type="number" name="amount" onChange={this.handleChange} value={this.state.gain.amount} />
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